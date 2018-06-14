let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
  'userId': Number,
  'userName': String,
  'userPwd': String,
  'orderList': [
    {
      'orderId': String,
      'orderTotal': Number,
      'orderStatus': String,
      'createDate': Date
    }
  ],
  'cartList': [
    {
      'productId': String,
      'productName': String,
      'productImg': String,
      'salePrice': Number,
      'oldPrice': Number,
      'productNum': Number,
      'checked': String
    }
  ],
  'addressList': [
    {
      'addressId': String,
      'userName': String,
      'streetName': String,
      'postCode': Number,
      'tel': Number,
      'isDefault': Boolean
    }
  ]
})

module.exports = mongoose.model('Users', userSchema)
