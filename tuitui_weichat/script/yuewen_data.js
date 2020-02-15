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
		console.log(item)
		let temp = await PlatformDataModel.findOneAndUpdate({
			wx_openid : item.openid
		},{
			ispay : true,
			amount : Number(item.amount),
			order_time : new Date(item.order_time).getTime()
		})
		if(temp.td_url){
			let ad_cb_url = 'https://ad.toutiao.com/track/activate/?link='
							+temp.td_url+'&event_type=2'
			await rp(ad_cb_url)
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
	console.log(params)
	url += '?'+args.join('&')
	let y_res = await rp(url)
	console.log(y_res)
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
	var last_time = now_time-60*1000
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
	for (let plat of plats) {
		start(plat.seruid)
	}
}

//start('wxfxmswl1200')

var rule = new schedule.RecurrenceRule();
rule.second = 10;
var j = schedule.scheduleJob(rule, function () {
    get()
});
