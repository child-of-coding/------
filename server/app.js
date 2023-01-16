const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, '쇼핑몰 제작/client/build')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'));
});

app.listen(3000, ()=>{
    console.log("3000번 포트에서 대기중");
})
