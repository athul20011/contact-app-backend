// 1 import express
const express = require('express')

//2 import cors

const cors = require('cors')

//import logic
const logic = require('./services/logic')

 const contactServer = express()

 contactServer.use(cors({
   origin:'http://localhost:3000'
 }))

 contactServer.use(express.json())

 contactServer.listen(7000,()=>{
   console.log('contact server listening on port 7000');
 })

 contactServer.get('/get-all-Contacts',(req,res)=>{
   logic.getAllcontacts().then((response)=>{ //response - all the details
     res.status(response.statusCode).json(response);
   })
 })

contactServer.post('/add-an-contacts',(req,res)=>{
 logic.addcontacts(req.body.id,req.body.username,req.body.phone,req.body.email,req.body.street,req.body.city).then((response)=>{
   res.status(response.statusCode).json
 })
})

contactServer.delete('/delete-an-contacts/:id',(req,res)=>{
 logic.deletecontact(req.params.id).then((response)=>{
   res.status(response.statusCode).json(response);
 })
})
contactServer.get('/view-an-contacts/:id',(req,res)=>{
 logic.viewcontact(req.params.id).then((response)=>{
   res.status(response.statusCode).json(response);
 })
})

contactServer.post('/update-an-contacts/:id',(req,res)=>{
 logic.updatecontact(req.params.id,req.body.username,req.body.phone,req.body.email,req.body.street,req.body.city).then((response)=>{
     res.status(response.statusCode).json(response);
 })
})
