var express = require('express');
var router = express.Router();
var TuiGuangModel = require('../model/TuiGuang.js');
var TransferModel = require('../model/Transfer.js');
var DomainModel = require('../model/Domain.js');
var TokenArrModel = require('../model/TokenArr.js');
var BannerModel = require('../model/Banner.js');
var multer = require('multer');
var fs = require('fs')
var mem = require('../util/mem.js')
const asyncRedis = require("async-redis");
const redis_client = asyncRedis.createClient();

var juedui_lujing = '/home/work/tuitui_program/project/public/images/tuiguang'

var upload = multer({
    dest: juedui_lujing
});

router.post('/novel/upload', upload.single('imageFile'), function(req, res, next) {
    fs.rename(req.file.path, juedui_lujing+"/"+req.file.filename+'.jpg', function(err) {
        if (err) {
            throw err;
        }
        console.log('上传成功!');
    })
    res.send({filename: req.file.filename + '.jpg'});
})

router.post('/update', async (req, res, next) => {
    let id = '5b76aa2ac3ed4a4798d7045d';
    let messages = {
        image: req.body.image,
        link: req.body.link,
        position: req.body.position
    }
    let docs = await BannerModel.findByIdAndUpdate(id, messages)
    let docs1 = await BannerModel.find()
    res.send({success: 'ok', data: docs1})
})

router.post('/novel/add', (req, res, next) => {
    TuiGuangModel.find({id: req.body.id}, function(err, data){
        if (err) {
            console.log("Error:" + err);
        }else {
            if (data != '') {
                res.send({err: '此id已存在'})
            } else {
                var novelInfo = {
                    type: req.body.type,
                    id: req.body.id,
                    pageTitle: req.body.pageTitle,
                    articleTit: req.body.articleTit,
                    name: req.body.name,
                    desc: req.body.desc,
                    picurl: req.body.picurl,
                    capter1: req.body.capter1,
                    capter2: req.body.capter2 || '',
                    linkUrl: req.body.linkUrl || '',
                    statisticsUrl1: req.body.statisticsUrl1 || '',
                    statisticsUrl2: req.body.statisticsUrl2 || '',
                    tokenCodes: req.body.tokenCodes || '',
                    channel: req.body.channel,
                    remarks: req.body.remarks
                }
                var user = new TuiGuangModel(novelInfo)
                user.save(function(err, data) {
                    if(err) {
                        console.log("Error:" + err);
                    } else {
                        res.send({message: '创建成功'})
                    }
                });
            }
        }
    })
    
})

router.post('/novel/delete_one', (req, res, next) => {
    var selector = {
        id: req.body.id
    }
    TuiGuangModel.find(selector, function(err, data){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            if (data != '') {
                TuiGuangModel.remove(selector, function(err, result){
                    res.send({message: '删除成功'})
                })
            } else {
                res.send({message: '没有此项数据'})
            }
        }
    })
})

router.get('/novel/show', async(req, res, next) => {
    var messages = await TuiGuangModel.find({},{capter1:0,capter2:0});
    console.log('----------------tuiguang_messages------------')
    console.log(messages)
    console.log('----------------tuiguang_messages------------')
    var domain_names = await DomainModel.find();
    res.send({data: messages, domain_names: domain_names})
})

router.get('/novel/get_content', async(req, res, next) => {
    var id = req.query._id
    var messages = await TuiGuangModel.findById(id);
    res.send({data: messages})
})

router.post('/novel/update', async(req, res, next) => {
    var id = req.body._id
    var message = {
        type: req.body.type,
        id: req.body.id,
        pageTitle: req.body.pageTitle,
        articleTit: req.body.articleTit,
        name: req.body.name,
        desc: req.body.desc,
        picurl: req.body.picurl,
        linkUrl: req.body.linkUrl || '',
        statisticsUrl1: req.body.statisticsUrl1,
        statisticsUrl2: req.body.statisticsUrl2 || '',
        tokenCodes: req.body.tokenCodes || '',
        channel: req.body.channel,
        remarks: req.body.remarks
    }
    if(req.body.capter1) {
        message.capter1= req.body.capter1
    }
    if(req.body.capter2) {
        message.capter2= req.body.capter2
    }
    var docs = await TuiGuangModel.findByIdAndUpdate(id, message)
    if (docs) {
        mem.set('weitiao_'+req.params.index,{},60).then(function(){
             console.log('---------set weitiao value---------')
        })
        mem.set('singlepage_'+req.params.index,{},60).then(function(){
             console.log('---------set singlepage value---------')
        })
        mem.set('multipage_'+req.params.index,{},60).then(function(){
             console.log('---------set multipage value---------')
        })
        mem.set('capter_'+req.params.index,{},60).then(function(){
             console.log('---------set capter value---------')
        })
        res.send({success: '修改成功'})
    } else {
        res.send({err: '修改失败'})
    }
})

router.get('/token_arr', async(req, res, next) => {
    var tokenArr = req.query.tokenArr;
    var docs = await TokenArrModel.findByIdAndUpdate('5bc06e2e2f6ed40b684421a4', {tokenArr: tokenArr})
    res.send({success: '修改成功', data: docs})
})

router.get('/shuju',async(req,res,next)=>{
    let uv01 = await redis_client.pfcount('website_tuiguang_dianrui_2019050711')
    let uv02 = await redis_client.pfcount('website_tuiguang_dianrui_2019050712')
    let uv03 = await redis_client.pfcount('website_tuiguang_dianrui_0507_13')
    let uv04 = await redis_client.pfcount('website_tuiguang_dianrui_0507_14')
    let uv05 = await redis_client.pfcount('website_tuiguang_dianrui_0507_15')


    let cv01 = await redis_client.pfcount('website_tuiguang_copy_dianrui_2019050711')
    let cv02 = await redis_client.pfcount('website_tuiguang_copy_dianrui_2019050712')
    let cv03 = await redis_client.pfcount('website_tuiguang_copy_dianrui_0507_13')
    let cv04 = await redis_client.pfcount('website_tuiguang_copy_dianrui_0507_14')
    let cv05 = await redis_client.pfcount('website_tuiguang_copy_dianrui_0507_15')

    let ip01 = await redis_client.pfcount('website_tuiguang_ip_dianrui_2019050711')
    let ip02 = await redis_client.pfcount('website_tuiguang_ip_dianrui_2019050712')
    let ip03 = await redis_client.pfcount('website_tuiguang_ip_dianrui_0507_13')
    let ip04 = await redis_client.pfcount('website_tuiguang_ip_dianrui_0507_14')
    let ip05 = await redis_client.pfcount('website_tuiguang_ip_dianrui_0507_15')

    return res.send({"推广数据":[
            {
                index :01,
                uv : uv01,
                copy: cv01,
                ip : ip01
            },
            {
                index :02,
                uv : uv02,
                copy: cv02,
                ip : ip02
            },
            {
                index :03,
                uv : uv03,
                copy: cv03,
                ip : ip03
            },
            {
                index :04,
                uv : uv04,
                copy: cv04,
                ip : ip04
            },
            {
                index :05,
                uv : uv05,
                copy: cv05,
                ip : ip05
            }
        ],
        "比对数":[
        {
            index : 01,
            result : (cv01/uv01 * 100).toFixed(2) +'%'
        },
        {
            index : 02,
            result : (cv02/uv02 * 100).toFixed(2) +'%'
        },{
            index : 03,
            result : (cv03/uv03 * 100).toFixed(2) +'%'
        },{
            index : 04,
            result : (cv04/uv04 * 100).toFixed(2) +'%'
        },{
            index : 05,
            result : (cv05/uv05 * 100).toFixed(2) +'%'
        }  
        ]
    })
})

router.get('/shuju/del',async(req,res,next)=>{
    let uv01 = await redis_client.del('website_tuiguang_dianrui_2019050711')
    let uv02 = await redis_client.del('website_tuiguang_dianrui_2019050712')
    let uv03 = await redis_client.del('website_tuiguang_dianrui_0507_13')
    let uv04 = await redis_client.del('website_tuiguang_dianrui_0507_14')
    let uv05 = await redis_client.del('website_tuiguang_dianrui_0507_15')


    let cv01 = await redis_client.del('website_tuiguang_copy_dianrui_2019050711')
    let cv02 = await redis_client.del('website_tuiguang_copy_dianrui_2019050712')
    let cv03 = await redis_client.del('website_tuiguang_copy_dianrui_0507_13')
    let cv04 = await redis_client.del('website_tuiguang_copy_dianrui_0507_14')
    let cv05 = await redis_client.del('website_tuiguang_copy_dianrui_0507_15')

    let ip01 = await redis_client.del('website_tuiguang_ip_dianrui_2019050711')
    let ip02 = await redis_client.del('website_tuiguang_ip_dianrui_2019050712')
    let ip03 = await redis_client.del('website_tuiguang_ip_dianrui_0507_13')
    let ip04 = await redis_client.del('website_tuiguang_ip_dianrui_0507_14')
    let ip05 = await redis_client.del('website_tuiguang_ip_dianrui_0507_15')


    return res.send('删除成功')
})

router.get('/data',async(req,res,next)=>{
    let tid= req.query.tid
    if(!tid){
        return res.send('请输入transfer id')
    }
    let transfer = TransferModel.findOne({id:tid})
    if(!transfer){
        return res.send('没有找到相关的transfer')
    }
    
    var data={
        tuiguang:[],
        duibi:[]
    }

    for (var i = 0; i < transfer.links.length; i++) {
        var link = transfer.links[i]
        var params = link.substr(link.lastIndexOf('/')+1)
        var index = params.split('?')[0]
        var channel = params.split('channel=')[1]
        let uv = redis_client.pfcount('website_tuiguang_'+channel+'_'+index);
        let cv = redis_client.pfcount('website_tuiguang_copy_'+channel+'_'+index);
        let ip = redis_client.pfcount('website_tuiguang_ip_'+channel+'_'+index);

        data.tuiguang.push({
            index : index,
            uv : uv,
            cv : cv,
            ip : ip
        })
        data.duibi.push({
            index : index,
            result : (cv/uv * 100).toFixed(2) +'%'
        })
    }
    return res.send(data)
})

router.get('/data/del',async(req,res,next)=>{
    let tid= req.query.tid
    if(!tid){
        return res.send('请输入transfer id')
    }
    let transfer = TransferModel.findOne({id:tid})
    if(!transfer){
        return res.send('没有找到相关的transfer')
    }

    for (var i = 0; i < transfer.links.length; i++) {
        var link = transfer.links[i]
        var params = link.substr(link.lastIndexOf('/')+1)
        var index = params.split('?')[0]
        var channel = params.split('channel=')[1]
        let uv = redis_client.del('website_tuiguang_'+channel+'_'+index);
        let cv = redis_client.del('website_tuiguang_copy_'+channel+'_'+index);
        let ip = redis_client.del('website_tuiguang_ip_'+channel+'_'+index);

    }
    return res.send('删除成功')
})


module.exports = router;