const express=require('express')
const router=express.Router()
const {body, validationResult} = require('express-validator')
const {runMySql} = require('../controller/ai')




router.post('/run-mysql',[],(req,res,next)=>{
    next()
},runMySql)



module.exports=router