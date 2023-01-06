
const mongooose = require('mongoose');

const customerSchema = new mongooose.Schema({
customer_id:{
    type:String,
    unique : true
    
},

customer_name:{
    type: String,
},
email:{
    type: String,
},
balance:{
    type: Number,
},

})

const customer = mongooose.model('customer', customerSchema);

module.exports = customer;