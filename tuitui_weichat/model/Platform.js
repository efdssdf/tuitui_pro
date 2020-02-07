var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var PlatformSchema = new Schema({
    platform: String,   // 平台名称
    gonghao_name: String,  // 公号名称,
    seruid: String  // 公号id
});

var PlatformModel = db.model('Platform', PlatformSchema);
module.exports = PlatformModel;
