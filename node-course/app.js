// const helpers = require("./helpers");


// --------------------Crear server con http module-----------------


// const {sum,add} = require("./helpers");
// const http=require('http');
// const serv=http.createServer((req,res)=>{
//  res.end("<h1>hello word nodejs</h1><strong>Updated</strong>")
// });

// serv.listen(3000);

// const total=sum(150,20);
// console.log("Total: ",total);



// -------------------Crear server con express module---------------

// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send("whas up from express")
// })

// app.listen(3000)






// --------------------------Revisa si el documento cambia, saca los datos, async y sync programming -----------------


// const fs=require('fs')
// const fileName="target.txt"

// const data=fs.readFileSync(fileName)

// console.log(data.toString());

// fs.watchFile(fileName,()=> console.log('File changed'))
// fs.readFile(fileName,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());

// })
// console.log('Node JS async programming');





// Functional approach

 const fs=require('fs')
 const fileName="target.txt"

const errHandler=(err)=>console.log(err);

const dataHandler=(data)=>console.log(data.toString());
 fs.readFile(fileName,(err,data)=>{
     if(err) errHandler(err);
     dataHandler(data);
 });
 console.log('Node JS async programming');