import express from "express";
import { User } from "../models/user";


let users: User[] = [];

export const usersRouter = express.Router();

usersRouter.get('/allusers', (req, res) => {
    res.status(200).json(users);
});

usersRouter.post('/createuser', (req, res) => {
    let newUsers = [...users, req.body]
    res.json({
        status: 200,
        return: newUsers,
        message: "usuário criado com sucesso!"
    });
});

usersRouter.delete('/deleteuser:id', (req, res) => {
    let newUsers = users.filter((id)=>{return id.id != parseInt(req.params.id)});
    res.json({
        status: 200,
        return: newUsers,
        message: "usuário deletado com sucesso!"
    });
});

usersRouter.put('/updateuser:id', (req, res) => {
    console.log(req.params)
    res.status(200).send('update selected user');
});