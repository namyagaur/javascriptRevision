import http from "node:http";
/*
GET /api/users → Return an array of three sample users.
GET /api/orders → Return an array of two sample orders.
Any unknown route → Return status 404 and an error message.*/ 

const users = ["Namya Gaur", "Veronica Pelt", "May Flower"]
const orders = ["Ruffled Dress", "Guitar"]

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "application/json");
    const method = req.method;
    const url = req.url;
    if(method === "GET" && url ==="/api/users"){
        res.statusCode = 200;
        res.end(JSON.stringify(users));
    }
    else if(method === "GET" && url ==="/api/orders"){
        res.statusCode = 200;
        res.end(JSON.stringify(orders));
    }else{
        res.statusCode = 404;
        res.end(JSON.stringify({
            message : "THIS IS ERROR"
    }));
    }
})

server.listen(3000, ()=>{
    console.log("Listening on 3000...")
})