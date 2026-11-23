/*
Create express-api.js using the example above, run it, and test:

*/ 
import express from "express";
const users = [
    { id: 1, name: "Namya" },
    { id: 2, name: "Veronica" }
];
const app = express();
app.use(express.json());
// - GET /api/users
app.get('/api/users', (req,res)=>{
    res.status(200).json(users);
})
// - GET /api/users/1
// - GET /api/users/99
app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const userToFind = users.find(user => user.id === id);
    if(!userToFind){
        return res.status(404).json({
            error : "User not Found"
        });
    }
    res.status(200).json(userToFind);
})
// - POST /api/users with a valid name
app.post('/api/users', (req,res)=>{
    const body = req.body;
    if(!body.name || typeof body.name !== 'string'){
        return res.status(400).json({
            error : " Name is invalid"
        })
    }
    const id = users.length + 1;
    users.push({
        id : id,
        name : body.name
    });

    res.status(201).json({
        message : "User Created"
    })
    console.log(users);
})

app.listen(3000,()=>{
    console.log("WORKING ON 3000")
})


