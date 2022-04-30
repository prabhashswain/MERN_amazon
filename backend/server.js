import express from 'express'
import 'dotenv/config';
import data from './data.js';

const app = express();

app.get('/api/products',(req,res)=>{
    return res.json(data)
})

const PORT = process.env.PORT || 5500

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`);
})