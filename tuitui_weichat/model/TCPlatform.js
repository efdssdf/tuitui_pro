var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb_tuitui_cms;
var db = mongoose.createConnection(connect_url);

var TCPlatformSchema = new Schema({
    account_id : String,
    platform: Number,   // 平台名称  1 阅文 2 腾文 3 有书阁 4 掌读   11.阅文快应用  12.阅文抖音号
    gonghao_name: String,  // 公号名称,
    seruid: String,  // 公号id
    appid: String,
    gonghaoid: String,
    type: { // 回传方式 0 API 回传 1 IP/ua回传 
        type: Number,
        default: 0
    },
    secret: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    payBackType: { // 付费回传时间 0 注册后24小时内回传 1 注册当天自然日回传 
        type: Number,
        default: 0
    }
});

var TCPlatformModel = db.model('Platform', TCPlatformSchema);
module.exports = TCPlatformModel;