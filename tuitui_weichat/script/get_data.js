var wechat_util = require('../util/get_weichat_client.js')


async function getData(code) {
	var client = await wechat_util.getClient(code)
	client.getUserRead('2019-07-31','2019-07-31',function(err,res){
		console.log(err,res)
	})
}

getData(226)