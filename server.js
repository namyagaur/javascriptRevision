import http from "node:http";

const server = http.createServer((req,res)=>{
    console.log("Request Method",req.method);
    console.log("Request Header",req.header);
    console.log("Request URL",req.url);
    
    res.statusCode = 200;
    res.setHeader('Content-type',"application/json");
    res.end(JSON.stringify({
        message : "HEY THERE IS YOUR RESPONSE"
}))
})

server.listen(3000,()=>{
    console.log("Listening on 3000");
})


