const TuiGuangModel = require('../model/TuiGuang.js');
const async = require('async');
const ali_oss_util = require('../util/ali_oss_util');

let get = async () => {
	let tuiguangs = await TuiGuangModel.find();
	async.eachLimit(tuiguangs,20,async (item)=>{
		let change =false;
		if(!item.picurl_ali && item.picurl){
			change =true;
			let picurl = item.picurl;
			let file_name = pic_url.substring(pic_url.lastIndexOf('/')+1)
			item.picurl_ali = await ali_oss_util.upload(file_name,__dirname+'/../public'+item.picurl)
			console.log('---------picurl_ali---------')
			console.log(item.picurl_ali)
		}
		if(!item.finalImg_ali && item.finalImg){
			change =true;
			let finalImg = item.finalImg;
			let file_name = finalImg.substring(finalImg.lastIndexOf('/')+1)
			item.finalImg_ali = await ali_oss_util.upload(file_name,__dirname+'/../public'+item.finalImg)
			console.log('---------finalImg_ali---------')
			console.log(item.finalImg_ali)
		}
		if(change){
			await item.save()
		}
	},(err,reslut)=>{
		console.log(err,reslut)
	})
}


get()