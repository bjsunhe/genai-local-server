const express=require('express')
const router = express.Router()
const materialDeliveryRouter=require('./material-delivery')
const oplMaterialBindingRouter=require('./opl-material-binding')
const projectCostRouter=require('./project-cost')
const processRouter=require('./process')
const aiRouter=require('./ai')
router.use('/material-delivery',materialDeliveryRouter)
router.use('/opl',oplMaterialBindingRouter)
router.use('/project-cost',projectCostRouter)
router.use('/process',processRouter)
router.use('/ai',aiRouter)
module.exports=router