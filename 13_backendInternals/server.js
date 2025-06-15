const express =require('express')

const app=express() //handler function
app.get('/',(req,res)=> res.end("Homapage"))
