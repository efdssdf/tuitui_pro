const rp = require('request-promise');
const crypto = require('crypto');
const email = "mingxingshuo1@aliyun.com";
const appsecret = "0ec0806b3009a10e2f4c69f34630bb99";
const PlatformDataModel = require('../model/PlatformData.js');
const PlatformModel = require('../model/Platform.js');
const schedule = require("node-schedule");

let sign = (params) =>{
	let args = {
		"email" : email,
		"version":1,
		"timestamp":parseInt(Date.now()/1000)
	}
	let keys = ["email","version","timestamp"]
	for (let key in params ) {
		args[key] = params[key];
		keys.push(key)
	}
	keys = keys.sort()
	let splicedString = appsecret;
	for (let key of keys) {
		splicedString +=key+args[key]
	}
	let sign = crypto.createHash('md5').update(splicedString).digest("hex")
	args.sign = sign.toUpperCase();
	return args
	
}

let handle = async (data,params) =>{
	for(let item of data.list){
		//console.log(item)
		let temp = await PlatformDataModel.findOneAndUpdate({
			wx_openid : item.openid
		},{
			ispay : 1,
			amount : Number(item.amount),
			order_time : new Date(item.order_time).getTime()
		})
		if(temp && temp.td_url){
			let ad_cb_url = 'https://ad.toutiao.com/track/activate/?link='
							+temp.td_url+'&event_type=2'
			await rp(ad_cb_url)
			await PlatformDataModel.findOneAndUpdate({
				wx_openid : item.openid
			},{
				td_cb_flag :1
			})
		}
	}
	if(data.list.length == 100){
		params.total_count = data.total_count;
		params.last_min_id = data.last_min_id;
		params.last_max_id = data.last_max_id;
		params.last_page = data.page;
		params.page = data.page+1;
		get_order(params)
	}
}

let get_order = async (params) =>{
	let url = "https://open.yuewen.com/cpapi/wxRecharge/querychargelog";
	params = sign(params)
	let args = []
	for (let key in params) {
		args.push(key+'='+params[key])
	}
	//console.log(params)
	url += '?'+args.join('&')
	let y_res = await rp(url)
	//console.log(y_res)
	y_res = JSON.parse(y_res)
	if(y_res.code == 0){
		handle(y_res.data,params)
	}else{
		console.error(y_res.msg)
	}
}

let start = (appflag)=>{
	var now_time = new Date().getTime()
	var end = new Date(now_time).setSeconds(0,0)
	var last_time = end-4*60*1000
	var start = new Date(last_time).setSeconds(0,0)
	let params = {
		start_time : parseInt(start/1000),
		end_time : parseInt(end/1000),
		page : 1,
		order_status : 2,
		appflags : appflag
		//last_min_id : '',
		//last_max_id : '',
		//total_count : '',
		//last_page : ''
	}
	get_order(params)
}

let get = async () =>{
	let plats = await PlatformModel.find({platform : 1})
	for (let i =0; i<plats.length; i++ ) {
		(function(seruid){
			setTimeout(function(){
				start(seruid)
			},i*1000)
		})(plats[i].seruid,i)
	}
}

//start('wxfxmswl1200')

let test =() => {
	var now_time = new Date('2020-02-15 18:17:48').getTime()
	var end = new Date(now_time).setSeconds(0,0)
	var last_time = now_time-60*1000
	var start_temp = new Date(last_time).setSeconds(0,0)
	let params = {
		start_time : parseInt(start_temp/1000),
		end_time : parseInt(end/1000),
		page : 1,
		order_status : 2,
		appflags : 'wxfxmswl1241'
		//last_min_id : '',
		//last_max_id : '',
		//total_count : '',
		//last_page : ''
	}
	get_order(params)
}

//test()


let td_fuck =async () =>{
	//let td_url = encodeURIComponent("http://td.tyuss.com/tuiguang/data/a0fsXJnn?adid=1651830321459575&clickid=EPfiqLzLyvcCGIi45L_AifkCKISg3-a8kfkC&creativeid=1651830321459575&creativetype=1");
	let td_url = 'http%3A%2F%2Ftd.tyuss.com%2Ftuiguang%2Fdata%2Fqvo7vU8J%253Fadid%3D1654022777776581%26clickid%3DEMXT-oCzivgCGIjY0rbCifkCKIPo8J-wmfkC%26creativeid%3D1654022777776581%26creativetype%3D1%26adid%3D1658949722599479%26creativeid%3D1658950641668104%26creativetype%3D2%26clickid%3DEIigyd3omfkCGI28-ooZILGegerPATAMOAFCIjIwMjAwMjE5MTkzMTExMDEwMTQ1MDI2MDIyMUQyMTU2ODFIAQ'
	let ad_cb_url = 'https://ad.toutiao.com/track/activate/?link='
							+td_url+'&event_type=2'
	let res = await rp(ad_cb_url)
	console.log(res)
}

td_fuck()


/*
var rule = new schedule.RecurrenceRule();
rule.second = 10;
var j = schedule.scheduleJob(rule, function () {
    get()
});*/


