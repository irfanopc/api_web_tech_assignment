
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");
const app = express()
const port = 3000
const customer = require("./routes/customer");
const product = require("./routes/product");
const order = require("./routes/order");

app.use(express.json());

app.use('/', customer)
app.use('/', product)
app.use('/', order)

dotenv.config();
mongoose.set('strictQuery', false)
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(port, () => console.log('Server running......'));

