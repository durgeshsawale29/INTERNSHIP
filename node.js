node js

(index.html)


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>node js</title>
</head>
<body>
    <h1>this is a static webpage</h1>
</body>
</html>



(index.js)


const express=require('express');
const app=express();

app.use(express.static('public'))

app.listen(5000,()=>{
    console.log("server is started");
})




-----commands of terminal------

npm init

npm install express --save

node index.js















