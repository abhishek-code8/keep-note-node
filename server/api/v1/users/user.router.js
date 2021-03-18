const { response } = require('express');
const express = require('express');
const router = express.Router();
const UserDao = require('./user.dao');

router.get('/:userId',async(req,res)=>{
    try{
       let testUser = await UserDao.findUser(req.params.userId);
       console.log(testUser.users.length);
        await UserDao.findUser(req.params.userId).then((response)=>{
            res.status(response.status).send(response.users);
        })
    }catch(err){
        res.send({message:"Error"})
    }
})

router.post('/register', async(req,res)=>{
    try{
        let exist = await UserDao.findUser(req.body.username);
        //console.log(exist.users);
        if(exist.users.length != 0){
            res.send({message:"username is already exist"});
           

        }
        else{
            await UserDao.addUser(req.body).then((response)=>{
                res.status(201).send(response);
            })
           
        }
        
    }catch(err){
        res.send({message:"Not added"})
    }
})

router.post('/login',async(req,res)=>{
    try{
        let exist = await UserDao.findUser(req.body.username);
        //console.log(exist.users);
        if(exist.users.length != 0){
            let passExe = await UserDao.findPassword(req.body.password);
           if(passExe.users.length ==0){
               res.send({message:"Password is incorrect"});
           }
           else{
            await UserDao.login(req.body).then((response)=>{
                res.status(response.status).send(response);
            })
           }
        }
        else{
            res.send({message:"You are not registered user"})
        }
        
    }
    catch(err){
        res.send(err)
    }
})

module.exports = router;