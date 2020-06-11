var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb_tuitui_cms;
var db = mongoose.createConnection(connect_url);

var TCPlatformUserSchema = new Schema({
    id_regtime:Number,
    regtime: Number,  //关注时间
    wx_openid: String,
    seruid: String,
    wx_platfrom: Number,
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
},{
    _id: false,
    timestamps: {createdAt: 'createAt', updatedAt: 'updateAt'}
});

var TCPlatformUserModel = db.model('PlatformUser', TCPlatformUserSchema);
module.exports = TCPlatformUserModel;