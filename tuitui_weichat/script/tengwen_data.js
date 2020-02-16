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
    let last_time = end - 4*60*1000;
    let start = new Date(last_time).setSeconds(0,0);
    let result = await Platform.find({platform:2});
    if(!result.length) {
        return
    } else {
        for(let i = 0; i < result.length; i ++) {
            let resultItem = result[i];
            //if(resultItem.platform === 2) {
                exec_user_req(resultItem,parseInt(start/1000),parseInt(end/1000),1)
                exec_order_req(resultItem,parseInt(start/1000),parseInt(end/1000),1)
            //}
        }
    }
} 

function exec_user_req(resultItem,start,end,page=1){
    let time = parseInt(Date.now()/1000)
    let sign = resultItem.seruid + secret + time;
    let qs = {
        reg_start_time: start,    
        reg_end_time: end,    
        seruid: resultItem.seruid,
        time: time,  
        page : page, 
        sign: md5.update(sign).digest("hex")
    };
    //console.log(qs)
    getTengwenData(qs)
}      

function exec_order_req(resultItem,start,end, time,page=1){
    let sign = resultItem.seruid + secret + time;
    let qs = {
        pay_start_time: start,    
        pay_end_time: end,    
        seruid: resultItem.seruid,
        time: time,     
        sign: md5.update(sign).digest("hex"),
        page : page
    };
    getTengwenOrder(qs)
} 

function getTengwenData(qs) {
    return new Promise((resolve, reject) => {
        let c_url = "https://data-api.tengwen.com/seruser/ny_hour_user";
        let args =[]
        for (let key in qs) {
            args.push(key+'='+qs[key])
        }
        console.log('-------腾文 getdata---------')
        console.log(c_url+'?'+args.join('&'))
        request({
            url: "https://data-api.tengwen.com/seruser/ny_hour_user",
            method: "get",
            qs: {...qs},
            json: true
        }, (err, res) => {
            if(err || res.statusCode !=200) {
                console.log("error: " + err);
                console.log(res.statusCode)
                reject(err)
            } else {
                let {code, data} = res.body;
                if(code == 1) {
                    console.log("============getTengwenData success===============")
                    console.log(JSON.stringify(res.body))
                    let {pageCount, currentPage, dataSource} = data;
                    mapUserDataSource(dataSource, qs)
                    if(currentPage < pageCount) {
                        exec_user_req(qs.seruid,qs.reg_start_time,qs.reg_end_time,page+1)
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
        console.log('------数据-------')
        console.log(dataItem)
        let {ip, ua, wx_gzhopenid, regtime, isfollow, id} = dataItem;
        let uni_ip_h_ua = handleIpAndUa(ip, ua);
        let updateData = await PlatformData.findOneAndUpdate({uni_ip_h_ua}, {
            regtime : regtime*1000, 
            wx_openid: wx_gzhopenid,   
            wx_ua: ua, 
            wx_id: id,
            wx_platfrom: 2,
            ip : ip,
            isfollow
        }, {upsert: true});
    }
}

function getTengwenOrder(qs) {
    return new Promise((resolve, reject) => {
        let c_url = "https://data-api.tengwen.com/seruser/ny_hour_order";
        let args =[]
        for (let key in qs) {
            args.push(key+'='+qs[key])
        }
        console.log('-------腾文 getorder---------')
        console.log(c_url+'?'+args.join('&'))


        request({
            url: "https://data-api.tengwen.com/seruser/ny_hour_order",
            method: "get",
            qs: {...qs},
            json: true
        }, (err, res) => {
            if(err) {
                console.log(err)
                reject(err)
            } else {
                let {code, data} = res.body;
                console.log(JSON.stringify(res.body))
                if(code == 1) {
                    console.log("============getTengwenOrder success===============")
                    console.log(res.body)
                    let {pageCount, currentPage, dataSource} = data;
                    mapOrderDataSource(dataSource)
                    if(currentPage < pageCount) {
                        exec_order_req(qs.seruid,qs.pay_start_time,qs.pay_end_time,page+1)
                    }
                }else{
                    console.log("============getTengwenOrder err===============")
                    console.log(res.body)
                }
            }
        })
    })
};

async function mapOrderDataSource(dataSource) {
    for(let i = 0; i < dataSource.length; i ++) {
        let dataItem = dataSource[i];
        let {atime, amount, userid, ispay,wx_gzhopenid} = dataItem;
        let pd = await PlatformData.findOneAndUpdate({wx_openid : wx_gzhopenid}, {
            wx_userid: userid, 
            amount : amount/100, 
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

let test = () =>{
    let now_time = new Date('2020-02-16 15:00:03').getTime();
    let end = new Date(now_time).setSeconds(0,0);
    let last_time = end -4*60*1000;
    let start = new Date(last_time).setSeconds(0,0);
    exec_user_req({seruid:'22327'}, parseInt(start/1000), parseInt(end/1000), parseInt(Date.now()/1000))
    //exec_order_req({seruid:'22327'}, parseInt(start/1000), parseInt(end/1000), parseInt(Date.now()/1000))
}

test()
