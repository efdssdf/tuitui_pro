var express = require('express');
var router = express.Router();
var TuiGuangModel = require('../model/TuiGuang.js');
var StaticsTuiGuangModel = require('../model/StaticsTuiGuang.js');
var TransferModel = require('../model/Transfer.js');
var DomainModel = require('../model/Domain.js');
var TokenArrModel = require('../model/TokenArr.js');
var BannerModel = require('../model/Banner.js');
var PlatformDataModel = require('../model/PlatformData.js');
var TCPlatformModel = require('../model/TCPlatform.js');
var TCPlatformDataModel = require('../model/TCPlatformData.js');
var TCPlatformUserModel = require('../model/TCPlatformUser.js');
var multer = require('multer');
var fs = require('fs')
var mem = require('../util/mem.js')
const asyncRedis = require("async-redis");
const redis_client = asyncRedis.createClient();
const rp = require('request-promise');

//线上
var juedui_lujing = '/home/work/tuitui_program/project/public/images/website'

//线下
//var juedui_lujing ='../public/images/tuiguan'

var upload = multer({
  dest: juedui_lujing
});

router.post('/novel/upload', upload.single('imageFile'), function (req, res, next) {
  fs.rename(req.file.path, juedui_lujing + "/" + req.file.filename + '.jpg', function (err) {
    if (err) {
      throw err;
    }
    console.log('上传成功!');
  })
  res.send({filename: req.file.filename + '.jpg'});
})

router.post('/goTop', async(req, res, next) => {
  let message = await TuiGuangModel.findOne().sort({zIndex: -1});
  let zIndex = message.zIndex + 1;
  let result = await TuiGuangModel.findByIdAndUpdate(req.body.id, {zIndex}, {new: true});
  if(result) {
    res.send({result: result, success: "置顶成功"})
  }
});

router.post('/cancelGoTop', async(req, res, next) => {
  let result = await TuiGuangModel.findByIdAndUpdate(req.body.id, {zIndex: 0}, {new: true});
  if(result) {
    res.send({result: result, success: "已取消置顶"})
  }
});

router.post('/update', async (req, res, next) => {
  let id = '5e565b917cd41712fa98032d';
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
  TuiGuangModel.find({id: req.body.id}, function (err, data) {
    if (err) {
      console.log("Error:" + err);
    } else {
      if (data != '') {
        res.send({err: '此id已存在'})
      } else {
        var novelInfo = {
          type: req.body.type,
          id: req.body.id,
          gonghao_id: req.body.gonghao_id,
          pageTitle: req.body.pageTitle || "",
          articleTit: req.body.articleTit || "",
          name: req.body.name,
          desc: req.body.desc,
          picurl: req.body.picurl || "",
          capter1: req.body.capter1 || "",
          capter2: req.body.capter2 || '',
          linkUrl: req.body.linkUrl || '',
          statisticsUrl1: req.body.statisticsUrl1 || '',
          statisticsUrl2: req.body.statisticsUrl2 || '',
          tokenCodes: req.body.tokenCodes || '',
          channel: req.body.channel || "",
          remarks: req.body.remarks || "",
          domain_name: req.body.domain_name || "http://novel.jtjsmp.top",
          gonghaoLogo: req.body.gonghaoLogo || "",
          finalImg: req.body.finalImg || "",
          company: req.body.company || "",
          suffix : req.body.suffix,
          isClick : req.body.isClick,
          jumpUrl : req.body.jumpUrl || "",
          isJump : req.body.isJump,
          creator: req.body.creator || "",
          bgcolor: req.body.bgcolor || "#fff"
        };
        var user = new TuiGuangModel(novelInfo)
        user.save(function (err, data) {
          if (err) {
            console.log("Error:" + err);
          } else {
            res.send({message: '创建成功'})
          }
        });
      }
    }
  })

});

router.post('/novel/delete_one', (req, res, next) => {
  var selector = {
    id: req.body.id
  }
  TuiGuangModel.find(selector, function (err, data) {
    if (err) {
      console.log("Error:" + err);
    } else {
      if (data != '') {
        TuiGuangModel.remove(selector, function (err, result) {
          res.send({message: '删除成功'})
        })
      } else {
        res.send({message: '没有此项数据'})
      }
    }
  })
})

router.get('/novel/show', async (req, res, next) => {
  let count, messages, domain_names = await DomainModel.find();
  let {page = 1, channel, creator} = req.query;
  if(creator) {
    if (channel) {
      messages = await TuiGuangModel.find({channel, creator}, {
        capter1: 0,
        capter2: 0
      }).skip((page - 1) * 20).limit(20).sort({zIndex: -1, _id: -1});
      count = await TuiGuangModel.count({channel});
    } else {
      count = await TuiGuangModel.count({});
      messages = await TuiGuangModel.find({creator}, {capter1: 0, capter2: 0}).skip((page - 1) * 20).limit(20).sort({zIndex: -1, _id: -1});
    }
  } else {
    if (channel) {
      messages = await TuiGuangModel.find({channel}, {
        capter1: 0,
        capter2: 0
      }).skip((page - 1) * 20).limit(20).sort({zIndex: -1, _id: -1});
      count = await TuiGuangModel.count({channel});
    } else {
      count = await TuiGuangModel.count({});
      messages = await TuiGuangModel.find({}, {capter1: 0, capter2: 0}).skip((page - 1) * 20).limit(20).sort({zIndex: -1, _id: -1});
    }
  }
  if(messages.length > 0) {
    res.send({code: 1, data: messages, domain_names: domain_names, count: count, msg: "查询成功"})
  } else {
    messages = await TuiGuangModel.find({creator: creator || ""}, {capter1: 0, capter2: 0}).skip((page - 1) * 20).limit(20).sort({zIndex: -1, _id: -1});
    messages.length === 0 && (messages = await TuiGuangModel.find({}, {capter1: 0, capter2: 0}).skip((page - 1) * 20).limit(20).sort({zIndex: -1, _id: -1}));
    res.send({code: -1, data: messages, domain_names: domain_names, count: count, msg: "暂时没有相关数据"})
  }
});

router.get('/novel/get_content', async (req, res, next) => {
  var id = req.query._id
  var messages = await TuiGuangModel.findById(id);
  res.send({data: messages})
})

router.post('/novel/update', async (req, res, next) => {
  var {_id, id, type, gonghao_id, pageTitle, articleTit, name, picurl, capter1, capter2, linkUrl, statisticsUrl1, statisticsUrl2, tokenCodes, channel, remarks, domain_name = "http://novel.jtjsmp.top", gonghaoLogo, finalImg, company, suffix, isClick, creator, jumpUrl, isJump, bgcolor = "#fff"} = req.body;
  var message = {id, type, gonghao_id, pageTitle, articleTit, name, picurl, capter1, capter2, linkUrl, statisticsUrl1, statisticsUrl2, tokenCodes, channel, remarks, domain_name, gonghaoLogo, finalImg, company, suffix, isClick, creator, jumpUrl, isJump, bgcolor, finalImg_ali: "", picurl_ali: ""};
  if (capter1) {
    message.capter1 = capter1
  }
  if (capter2) {
    message.capter2 = capter2
  }
  var docs = await TuiGuangModel.findByIdAndUpdate(_id, message)
  if (docs) {
    mem.set('weitiao_' + id, '', 60).then(function () {
      console.log('---------set weitiao value---------')
    });
    mem.set('singlepage_' + id, '', 60).then(function () {
      console.log('---------set singlepage value---------')
    });
    mem.set('multipage_' + id, '', 60).then(function () {
      console.log('---------set multipage value---------')
    });
    mem.set('capter_' + id, '', 60).then(function () {
      console.log('---------set capter value---------')
    });
    mem.set('toutiao_' + id, '', 60).then(function () {
      console.log('---------set toutiao value---------')
    });
    mem.set('data_' + id, '', 60).then(function () {
      console.log('---------set data value---------')
    });
    res.send({success: '修改成功'})
  } else {
    res.send({err: '修改失败'})
  }
})

router.get('/token_arr', async (req, res, next) => {
  var tokenArr = req.query.tokenArr;
  var docs = await TokenArrModel.findByIdAndUpdate('5bc06e2e2f6ed40b684421a4', {tokenArr: tokenArr})
  res.send({success: '修改成功', data: docs})
})


router.get('/data', async (req, res, next) => {
  let tid = req.query.tid
  if (!tid) {
    return res.send('请输入transfer id')
  }
  let transfer = await TransferModel.findOne({id: tid})
  if (!transfer) {
    return res.send('没有找到相关的transfer')
  }
  //console.log(transfer)

  var data = {
    tuiguang: [],
    duibi: []
  }

  let links = transfer.links.concat(transfer.back_urls)
  for (var i = 0; i < links.length; i++) {
    var link = links[i]
    var params = link.substr(link.lastIndexOf('/') + 1)
    var index = params.split('?')[0]
    var channel = params.split('channel=')[1]
    let uv = await redis_client.pfcount('website_tuiguang_' + channel + '_' + index);
    let cv = await redis_client.pfcount('website_tuiguang_copy_' + channel + '_' + index);
    let ip = await redis_client.pfcount('website_tuiguang_ip_' + channel + '_' + index);
    let wv = await redis_client.pfcount('website_tuiguang_wechat_' + channel + '_' + index);

    data.tuiguang.push({
      index: index,
      uv: uv,
      cv: cv,
      wv: wv,
      ip: ip
    })
    data.duibi.push({
      index: index,
      copy_uv: (cv / uv * 100).toFixed(2) + '%',
      wechat_uv: (wv / uv * 100).toFixed(2) + '%',
    })
  }
  return res.send(data)
})

router.get('/data/del', async (req, res, next) => {
  let tid = req.query.tid
  if (!tid) {
    return res.send('请输入transfer id')
  }
  let transfer = await TransferModel.findOne({id: tid})
  if (!transfer) {
    return res.send('没有找到相关的transfer')
  }

  for (var i = 0; i < transfer.links.length; i++) {
    var link = transfer.links[i]
    var params = link.substr(link.lastIndexOf('/') + 1)
    var index = params.split('?')[0]
    var channel = params.split('channel=')[1]
    let uv = await redis_client.del('website_tuiguang_' + channel + '_' + index);
    let cv = await redis_client.del('website_tuiguang_copy_' + channel + '_' + index);
    let ip = await redis_client.del('website_tuiguang_ip_' + channel + '_' + index);
    let wv = await redis_client.del('website_tuiguang_wechat_' + channel + '_' + index);

  }
  return res.send('删除成功')
})


router.get('/statics/zeng', async (req, res, next) => {
  var tid = req.query.tgid;
  var datas = await StaticsTuiGuangModel.find({tuiguang_id: tid, type: 0}).sort({date: -1}).limit(24)
  return res.render('statics/zeng', {
    data: JSON.stringify(datas)
  })
})

router.post('/data/yuewen', async (req, res, next) => {
  //console.log('-----阅文请求body-----')
  //console.log(req.body)
  let ua= req.body.ua;
  ua = new Buffer(ua,'base64').toString();
  //let h_ua = ua.substring(0,ua.indexOf(')',ua.indexOf(')')+1)+1);
  let ip = req.body.ip;
  let pd = {
    uni_ip_h_ua : handleIpAndUa(ip,ua),
    wx_ua : ua,
    ip : ip,
    regtime : req.body.time*1000,
    wx_openid : req.body.open_id,
    isfollow : 1,
    seruid : req.body.appflag,
    wx_platfrom : 1
  }
  if(!pd.regtime){
    pd.regtime = Date.now();
  }

  console.log('-----阅文回传数据-----')
  console.log(pd)
  
  //tuitui_cms 数据
  let tcpd = await TCPlatformDataModel.findOneAndUpdate(
    {
      uni_ip_h_ua : pd.uni_ip_h_ua,
      tg_seruid : pd.seruid
    },
    pd,
    {upsert:true,new:true},//这个之后考虑要不要加
  )

  res.send({"code": 0});


  await TCPlatformUserModel.findOneAndUpdate({
    wx_openid:pd.wx_openid
  },
  {
    id_regtime:new Date(pd.regtime).setHours(0,0,0,0),
    regtime: pd.regtime,
    wx_openid: pd.wx_openid,
    seruid: pd.seruid,
    wx_platfrom: 1,
  },
  {upsert:true}
  );

  let tcp = await mem.get('tcp_td_seruid_' + pd.seruid);
  if(tcp){
    tcp = JSON.parse(tcp)
  }else{
    tcp = await TCPlatformModel.findOne({seruid:pd.seruid})
    await mem.set('tcp_td_seruid_' + pd.seruid,JSON.stringify(tcp),5*60)
  }
  if(tcp && tcp.type==1){
    up_ipua(pd,tcp);
  }
  

  //上传头条
  if( (!tcpd.tg_platform || tcpd.tg_platform ==1 ) && tcpd.td_url ){
    up_td(tcpd)
  }else if(tcpd.seruid =='wxfxmsdyh1'){
    up_dy(tcpd)
  }

  //console.log('-----send yuewen------')
  
});

let up_ipua = async (pd,platform) =>{
   console.log('-----上传巨量引擎加粉ipua------')
   let formData = {
              "_legacy_event_type": "in_wechat_login", //事件类型，必传
              "properties": {
                      "we_chat_official_account_id": platform.gonghaoid, //微信号，必传
                      "we_chat_app_id": platform.appid,//微信appid，必传
                      //"amount": parseInt(temp.amount*100), //付费金额 单位分
                      //"book_id": "书id", //书id，选传
                      "source": "阅文",//来源，必传
              },
              "context": {
                      "ip": pd.ip, //注册/付费时用户的ip，必传
                      "userAgent": pd.wx_ua, //注册/付费时用户的ua，必传
                      "ad": {
                              "attributed": "false" //直接传fasle，必传
                      },
                      "device": {
                              "open_id": pd.wx_openid //注册/付费时用户的open id，必传
                      }
              },
              "timestamp": parseInt(pd.regtime/1000) //注册/付费发生的时间，必传,
          };
      console.log('------头条归因------')
      console.log(formData);
      let res = await rp({
        method : "POST",
        headers: {
              "content-type": "application/json",
          },
            uri : "https://analytics.oceanengine.com/api/v1/track",
            body : formData,
            json :true
      });
      console.log('------头条归因上传返回结果------')
      console.log(res)
}

let up_dy = async (temp) =>{
        console.log('-----上传抖音浅层 回传------')
        let ad_cb_url = 'https://analytics.oceanengine.com/api/v1/attribution'
        let options= {
            method: 'POST',
            uri: ad_cb_url,
            body: {
                "event_type": "in_page_click", //
                "attribute_label":"convert", //
                "biz_type": 2, //
                "context":{
                    "match_type": 0,
                    "app":{
                        "id": "1128", 
                        "from_uid": temp.wx_openid, 
                        "to_uid": "101757959485"
                    }
                    
                },
                "source": "mxs",
                "timestamp": parseInt(temp.regtime/1000)
            },
            json: true // Automatically stringifies the body to JSON
        };
        console.log(options.body);

        let res = await rp(options);
        console.log(res);

        temp.td_fellow_cb_flag = 1;
        await temp.save();

}

async function up_td(temp){
  let td_url = decodeURIComponent(temp.td_url);
  //console.log('----回传头条用户关注------',td_url);
  let event_type =0;
  
  // 融合双出价测试
  /*let chshjs= ['wxfxmswl1379']
  if( chshjs.indexOf(temp.seruid) != -1 ){
    event_type = 0
  }
  */
  if(td_url.indexOf('?')!=-1){
    let urls = td_url.split('adid')
    if(urls.length==3){
        td_url = urls[0]+'adid'+urls[2]
        let ad_cb_url = 'https://ad.toutiao.com/track/activate/?link='
                +encodeURIComponent(td_url)+'&event_type='+event_type

        console.log('-----头条关注回传-----')
        console.log(ad_cb_url)
        let res = await rp(ad_cb_url)
        console.log('-------头条返回数据--------')
        console.log(res)

        temp.td_fellow_cb_flag = 2;
        await temp.save()
    }else{
        let ad_cb_url = 'https://ad.toutiao.com/track/activate/?link='
                    +temp.td_url+'&event_type='+event_type

        console.log('-----头条关注回传-----')
        console.log(ad_cb_url)
        let res = await rp(ad_cb_url)
        console.log('-------头条返回数据--------')
        console.log(res)

        temp.td_fellow_cb_flag = 1;
        await temp.save()
    }
  }else{
      td_url = decodeURIComponent(td_url)
      let urls = td_url.split('adid')
      if(urls.length ==2){
          let ad_cb_url = 'https://ad.toutiao.com/track/activate/?link='
                  +encodeURIComponent(td_url)+'&event_type='+event_type
          
          console.log('-----头条关注回传-----')
          console.log(ad_cb_url)
          let res = await rp(ad_cb_url)
          console.log('-------头条返回数据--------')
          console.log(res)

          temp.td_fellow_cb_flag = 2;
          await temp.save()
      }else if(urls.length ==3){
          td_url = urls[0]+'adid'+urls[2]
          let ad_cb_url = 'https://ad.toutiao.com/track/activate/?link='
                  +encodeURIComponent(td_url)+'&event_type='+event_type
          
          console.log('-----头条关注回传-----')
          console.log(ad_cb_url)
          let res = await rp(ad_cb_url)
          console.log('-------头条返回数据--------')
          console.log(res)

          temp.td_fellow_cb_flag = 2;
          await temp.save()
      }
  }  
}

async function up_uc(temp){
  console.log('-----上传uc 回传用户关注------')
  let td_url = decodeURIComponent(temp.td_url)
  console.log(temp)
  if(td_url.indexOf('?')!=-1){
    console.log('----uc---- 无问题链接回传',td_url)
    let ad_cb_url = 'https://huichuan.uc.cn/callback/ct/add?link='
                        +temp.td_url+'&event_type=5'
    let c_res = await rp(ad_cb_url)
    console.log(c_res)
    //temp.td_cb_flag = 1;
    //await temp.save()
  }else{
    //td_url = decodeURIComponent(td_url)
    console.log('----uc---- 有问题链接回传',td_url)
    let ad_cb_url = 'https://huichuan.uc.cn/callback/ct/add?link='
                    +td_url+'&event_type=5'
    let c_res = await rp(ad_cb_url)
    console.log(c_res)
    //temp.td_cb_flag = 2;
    //await temp.save()
  }
}

function handleIpAndUa(ip, ua) {
    let uni_ip_h_ua = (ip + ua.substring(0, ua.indexOf(')', ua.indexOf(')') + 1) + 1));
    uni_ip_h_ua = uni_ip_h_ua.replace(' U;', '');
    uni_ip_h_ua = uni_ip_h_ua.replace('; wv', '');
    uni_ip_h_ua = uni_ip_h_ua.replace('zh-CN; ', '');
    uni_ip_h_ua = uni_ip_h_ua.replace('; zh-CN', '');
    if(uni_ip_h_ua.indexOf('iPhone')!=-1){
        // 微信头条iphone ua版本不匹配 
        //uni_ip_h_ua.replace('13_5_1','13_6');
        //uni_ip_h_ua.replace('13_4_1','13_5_1');
        uni_ip_h_ua.replace('13_6 ','13_6_1 ')
    }
    return uni_ip_h_ua;
}

module.exports = router;