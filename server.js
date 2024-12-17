// project self files
const config = require('./config');
const db = require ('./db');


// internal moudles
const express = require('express');
const path = require('path')


const app = express();

app.use(express.static(path.join(__dirname, 'view')));



app.get('/category' , async(req ,res)=>{
    const  query =  await 'SELECT * from category';
    db.query(query , (err , results)=>{
        if (err){
            
            console.log('Error fething data : ' , err.message);
            res.status(500).json({message : 'Error fetcing data'});

        }else{
            
            res.sendFile(path.join(__dirname, 'view', 'html', 'index.html'));
        };
    });
});







app.listen(config.port , ()=>
    {
    console.log('server is running on ');
});














