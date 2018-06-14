var mongoose = require('mongoose')
// 用于创建实例模板
var Schema = mongoose.Schema

// 创建 商品数据模型
var productSchema = new Schema({
  'productId': String,
  'productName': String,
  'productImg': String,
  'salePrice': Number,
  'oldPrice': Number,
  'productNum': Number,
  'checked': String
})

// 导出数据模型
module.exports = mongoose.model('Goods', productSchema)
