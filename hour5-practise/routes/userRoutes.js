import { Router } from "express";
import { users } from "../users.js";
import { checkapi } from "../middleware/auth.js";
const router = Router();

router.use(checkapi);
router.get('/',(req,res)=>{
    res.status(200).json({
       users
    })
})
router.get('/:id',(req,res)=>{
    const id = Number(req.params.id);
    const u = users.find(user => user.id === id);
    res.status(200).json({
       u
    })
})
router.post('/',(req,res)=>{
    users.push({
        id : req.body.id,
        name : req.body.name
    })
    res.status(201).json({
        message:"Created all users"
    })
})

export default router;