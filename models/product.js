
const mongooose = require('mongoose');

const productSchema = new mongooose.Schema({
product_id:{
    type:String,
    
},

product_type:{
    type: String,
},
product_name:{
    type: String,
},
product_price:{
    type:Number
},
available_quantity:{
    type:Number
}

})

const product = mongooose.model('product',productSchema );

module.exports = product;