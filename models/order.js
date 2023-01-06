const mongooose = require('mongoose');

const orderSchema = new mongooose.Schema({
customer_id:{
    type:String,
    
},

product_id:{
    type: String,
},
product_name:{
    type: String,
},
quantity:{
    type : Number
}

})

const order = mongooose.model('order', orderSchema);

module.exports = order;