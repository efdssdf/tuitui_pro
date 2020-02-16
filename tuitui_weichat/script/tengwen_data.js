const crypto = require('crypto');
const request = require("request");
const schedule = require("node-schedule");

const Platform = require("../model/Platform");
const PlatformData = require("../model/PlatformData");

const md5 = crypto.createHash('md5');

const secret = "n3BtjDGlSL23wk4vbd2kj8dboaOZHMi8";

/*
let rule = new schedule.RecurrenceRule();
rule.second = 10;
let j = schedule.scheduleJob(rule, function () {
    getPlatformData()
});
*/

async function getPlatformData() {
    let now_time = new Date().getTime();
    let end = new Date(now_time).setSeconds(0,0);
    let last_time = now_time - 60*1000;
    let start = new Date(last_time).setSeconds(0,0);

    let result = await Platform.find({platform:2});
    if(!result.length) {
        return
    } else {
        for(let i = 0; i < result.length; i ++) {
            let resultItem = result[i];
            //if(resultItem.platform === 2) {
                exec_req(resultItem,start,end, now_time/1000)
            //}
        }
    }
} 

function exec_req(resultItem,start,end, time){
    let sign = resultItem.seruid + secret + time;
    let qs = {
        reg_start_time: parseInt(start/1000),    
        reg_end_time: parseInt(end/1000),    
        seruid: resultItem.seruid,
        time,     
        sign: md5.update(sign).digest("hex")
    };
    getTengwenData(qs, 1)
    //getTengwenOrder(qs, 1)
}      

function getTengwenData(qs, page) {
    return new Promise((resolve, reject) => {
        let c_url = "http://data-api.tengwen.com/seruser/ny_hour_user";
        let args =[]
        for (let key in qs) {
            args.push(key+'='+params[key])
        }
        args.push('page='+page)
        console.log('-------腾文 getdata---------')
        console.log(c_url+'?'+args.join('&'))
        request({
            url: "http://data-api.tengwen.com/seruser/ny_hour_user",
            method: "get",
            qs: {...qs, page},
            json: true
        }, (err, res) => {
            if(err) {
                console.log("error: " + err);
                reject(err)
            } else {
                let {code, data} = res.body;
                if(code === 1) {
                    let {pageCount, currentPage, dataSource} = data;
                    mapUserDataSource(dataSource, qs)
                    if(currentPage < pageCount) {
                        getTengwenData(qs, page + 1)
                    }
                } else {
                    console.log("============getTengwenData===============")
                    console.log(res.body)
                }
            }
        })
    })
};

async function mapUserDataSource(dataSource, qs) {
    for(let i = 0; i < dataSource.length; i ++) {
        let dataItem = dataSource[i];
        let {ip, ua, wx_gzhopenid, regtime, isfollow, id} = dataItem;
        let uni_ip_h_ua = handleIpAndUa(ip, ua);
        let updateData = await PlatformData.findOneAndUpdate({uni_ip_h_ua}, {
            regtime : regtime*1000, 
            wx_openid: wx_gzhopenid,   
            wx_ua: ua, 
            wx_id: id,
            wx_platfrom: 2,
            isfollow
        }, {upsert: true});
    }
}

function getTengwenOrder(qs, page) {
    return new Promise((resolve, reject) => {
        request({
            url: "http://data-api.tengwen.com/seruser/ny_hour_order",
            method: "get",
            qs: {
                pay_start_time: qs.reg_start_time,    
                pay_end_time: qs.reg_end_time,    
                seruid: qs.seruid,
                time: qs.time,     
                sign: qs.sign,
                page
            }
        }, (err, res) => {
            if(err) {
                reject(err)
            } else {
                let {code, data: {pageCount, currentPage, dataSource}} = res.body;
                if(code === 1) {
                    mapOrderDataSource(dataSource)
                    if(currentPage < pageCount) {
                        getTengwenOrder(qs, page + 1)
                    }
                }
            }
        })
    })
};

async function mapOrderDataSource(dataSource) {
    for(let i = 0; i < dataSource.length; i ++) {
        let dataItem = dataSource[i];
        let {atime, amount, userid, ispay} = dataItem;
        let pd = await PlatformData.findOneAndUpdate({wx_openid : wx_gzhopenid}, {
            wx_userid: userid, 
            amount, 
            order_time: atime*1000,
            ispay
        });
        if(pd.td_url){
            let ad_cb_url = 'https://ad.toutiao.com/track/activate/?link='
                            +item.td_url+'&event_type=2'
            await rp(ad_cb_url)
        }
    }
}

function rp(url){
    return new Promise((resolve,reject) => {
        request(url,function(err, res){
            if(err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

function handleIpAndUa(ip, ua) {
    return (ip + ua.substring(0,ua.indexOf(')',ua.indexOf(')')+1)+1));
}

let now_time = new Date().getTime();
    let end = new Date(now_time).setSeconds(0,0);
    let last_time = now_time - 60*1000;
    let start = new Date(last_time).setSeconds(0,0);


exec_req({seruid:'22327'}, start, end, now_time/1000)
