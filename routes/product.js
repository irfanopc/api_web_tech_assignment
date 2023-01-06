const router = require('express').Router();
const Product = require('../models/product');


// routing code goes here



router.post('/product',async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json({product})
    } catch (error) {
        res.status(400).json({message:error })
    }
}) 

router.get("/product/:productID",async(req,res)=>{
    try {
        const {productID} = req.params;
        
        const product = await Product.findOne({_id : productID})
        if(!product){
            return res.status(202).json({message : 'product doestnot exist with order id'})
        }
        res.status(200).json({product})
    } catch (error) {
        res.status(400).json({message:error })
    }
})

router.put("/productName/availableQuantity",async(req,res)=>{
    try {
        const productnama = req.params;
        const {available_quantity} = req.body
        const product = await Product.findOneAndUpdate({product_name: productnama},{available_quantity})
        if(!product){
            return res.status(202).json({message : 'product doestnot exist with product name'})
        }
        res.status(200).json({product})
    } catch (error) {
        res.status(400).json({message:error })
    }
})

router.get('/product/:productType',async(req,res)=>{
    try {
        const {productType} = req.params;
        
        const product = await Product.findOne({product_type : productType})
        if(!product){
            return res.status(202).json({message : 'product doestnot exist '})
        }
        res.status(200).json({product})
    } catch (error) {
        res.status(400).json({message:error })
    }
})

module.exports = router;