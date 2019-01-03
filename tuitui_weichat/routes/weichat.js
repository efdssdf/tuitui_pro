var express = require('express');
var router = express.Router();
var wechat = require('wechat');
var crypto = require('crypto');
var ConfigModel = require('../model/Config');
var ReplyModel = require('../model/Reply');
var MsgModel = require('../model/Msg');
var wechat_util = require('../util/get_weichat_client.js')
var async = require('async');
var mem = require('../util/mem.js');
var UserconfModel = require('../model/Userconf');
var QRcodeModel = require('../model/QRcode');


router.use('/:code', async function (request, response, next_fun) {
    //console.log(request.query)
    var config = await mem.get("configure_" + request.params.code);
    if (!config) {
        config = await ConfigModel.findOne({code: request.params.code})
        if (config) {
            await mem.set("configure_" + request.params.code, config, 30)
        }
    }
    if (!request.query.openid) {
        validate(request, response);
    } else {
        wechat(config, async function (req, res, next) {
            let jieguan = await mem.get("jieguan_" + request.params.code)
            if (!jieguan) {
                jieguan = await ConfigModel.findOne({code: request.params.code})
                if(jieguan){
                    jieguan = jieguan.status
                    if (jieguan == 1) {
                        await mem.set("jieguan_" + request.params.code, 1, 30)
                    }
                }
            }
            if (jieguan == 1) {
                var message = req.weixin;
                var openid = message.FromUserName;
                getUserInfo(openid, config, message, request, req, res, function (openid, config, message, request, req, res) {
                    console.log(message.MsgType, '--------MsgType---------')
                    if (message.MsgType === 'text') {
                        var text = message.Content.trim();
                        reply(request.params.code, res, 0, text, openid)
                    } else if (message.MsgType === 'event') {
                        console.log(message.Event, '--------Event---------')
                        if (message.Event === 'subscribe') {
                            //var client = wechat_util.getClient(request.params.code);
                            reply(request.params.code, res, 2, 'subscribe', openid)
                            subscribe(openid, config, message, res);
                        } else if (message.Event === 'SCAN') {
                            scan(openid, message, res)
                        } else if (message.Event.toLowerCase() == 'click') {
                            reply(request.params.code, res, 1, message.EventKey, openid)
                        } else if(message.Event.toLowerCase() == 'location'){
                            reply(request.params.code, res, 3, 'location', openid);
                        }else{
                            res.reply('');
                        }
                    } else {
                        res.reply('');
                    }
                });
            } else {
                res.reply('');
            }
        })(request, response, next_fun);
    }
});

async function scan(openid, message, res) {
    if (message.EventKey.indexOf("replay") != -1) {
        console.log('---------message.EventKey---------')
        console.log(message.EventKey)
        var id = JSON.parse(message.EventKey).replay;
        let user = await mem.get("user_" + openid)
        if (!user) {
            user = await UserconfModel.findOne({"openid": openid})
            user = user.sign
            if (user) {
                await mem.set("user_" + openid, 1, 30)
            }
        }
        if (user) {
            QRcodeModel.findById(id, function (err, doc) {
                if (doc) {
                    UserconfModel.findOneAndUpdate({"openid": openid}, {$addToSet: {tagIds: doc.tagId}}, function (data) {
                    })
                    return res.reply(doc.content)
                } else {
                    return res.reply('')
                }
            })
        } else {
            return res.reply('')
        }
    } else {
        return res.reply('')
    }
}

async function subscribe(openid, config, message, res) {
    //console.log('--------subscribe------- ', config);
    if (message.EventKey.indexOf("replay") != -1) {
        var id = JSON.parse(message.EventKey.split('_')[1]).replay;
        console.log('======subscribe send text ===========')
        QRcodeModel.findById(id, function (err, doc) {
            if (doc) {
                UserconfModel.findOneAndUpdate({"openid": openid}, {$addToSet: {tagIds: doc.tagId}}, function (data) {
                })
                console.log('-----sendText------')
                console.log(openid,'============',doc.content)
                setTimeout((function (config,openid,doc) {
                     return async function(){
                        console.log('----消息-------')
                        //console.log(config,openid,doc)
                        var client = await wechat_util.getClient(config.code);
                        client.sendText(openid, doc.content, function (error, result) {
                              console.log(error,result);
                        })
                     }    
                })(config,openid,doc), 200)
                
            } else {
                return;
            }
        })
    } else {
        return;
    }
}

async function validate(req, res) {
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;
    var echostr = req.query.echostr;
    //1. 将token、timestamp、nonce三个参数进行字典序排序
    var config = await mem.get("configure_" + req.params.code);
    if (!config) {
        config = await ConfigModel.findOne({code: req.params.code})
        console.log(config, '--------------------------config')
        await mem.set("configure_" + req.params.code, config, 30)
    }
    var token = config.token;

    var array = new Array(token, timestamp, nonce);
    array.sort();
    var str = array.toString().replace(/,/g, "");

    //2. 将三个参数字符串拼接成一个字符串进行sha1加密
    var sha1Code = crypto.createHash("sha1");
    var code = sha1Code.update(str, 'utf-8').digest("hex");

    console.log(echostr);
    //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if (code === signature) {
        res.send(echostr);
    } else {
        res.send("error");
    }
}

async function getUserInfo(openid, config, message, request, w_req, w_res, next) {
    async.waterfall([
        function (callback) {
            UserconfModel.findOneAndUpdate({
                openid: openid,
                code: config.code
            }, {action_time: Date.now()}, function (err, user) {
                callback(null, user);
            });
        },
        function (user, callback) {
            if (!user) {
                user = new UserconfModel();
                user.nickname = '';
                user.sex = '0';
                user.openid = openid;
                user.code = config.code;
                user.current_balance = 0;
                user.action_time = Date.now();
                user.save(function () {
                    callback(null, user);
                })
            } else {
                callback(null, user)
            }

        }
    ], function (err, user) {
        if (err) {
            //console.log(err);
        }
        if (message.MsgType === 'event') {
            if (message.Event === 'subscribe') {
                user.subscribe_time = Date.now();
                user.subscribe_flag = true;
                console.log(user, '--------------user')
                user.save(function () {
                })
            } else if (message.Event === 'unsubscribe') {
                user.unsubscribe_time = Date.now();
                user.subscribe_flag = false;
                user.save(function () {
                })
            }
        }
        next(openid, config, message, request, w_req, w_res);
    });
}

async function reply(code, res, type, param, openid) {
    var reply = await mem.get("reply_" + code + "_" + param);
    // var reply = ''
    console.log(reply, '--------reply---------1')
    if (!reply) {
        console.log(code, type, param, reply, '--------reply---------a')
        if (type == 0) {
            reply = await ReplyModel.find({code: code, type: type, text: param})
        } else if (type == 1) {
            reply = await ReplyModel.find({code: code, type: type, key: param})
        } else if (type == 2) {
            reply = await ReplyModel.find({code: code, type: type})
        }else if (type == 3) {
            reply = await ReplyModel.find({code: code, type: type})
        }
        console.log(reply, '--------reply---------2')
        if (reply[0] && reply[0].replyType == 0) {
            reply = {type: 0, msg: reply[0].msgId}
        } else if (reply[0] && reply[0].replyType == 1) {
            reply = {type: 1, msg: reply[0].media}
        } else {
            return res.reply('')
        }
        await mem.set("reply_" + code + "_" + param, reply, 30)
    }

    console.log(reply, '--------lllreply---------')
    if (reply.type == 1) {
        return res.reply(reply.msg)
    } else {
        var content = await mem.get("msg_" + reply.msg);
        if (!content) {
            content = await MsgModel.find({msgId: reply.msg})
            console.log(content, '------------------------content')
            if (content) {
                content = content[0]
                console.log(reply.msg, content, '------------------------cm')
                await mem.set("msg_" + reply.msg, content, 30);
                console.log(content, '--------content1---------')
                replyMsg(res, content, code, openid)
            } else {
                return res.replay('')
            }
        } else {
            console.log(content, '--------content2---------')
            replyMsg(res, content, code, openid)
        }
    }
}

async function replyMsg(res, content, code, openid) {
    console.log(content, '--------content3---------')
    if (content.type == 0) {
        return res.reply(content.description)
    } else if (content.type == 1) {
        var client = await wechat_util.getClient(code);
        client.sendNews(openid, content.contents, function (err, data) {
            setTimeout(function () {
                return res.reply('')
            }, 50)
        });
    } else {
        return res.reply('')
    }
}
module.exports = router;

