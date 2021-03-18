const UserModule = require('./user.entity');

const findUser = (usernameParam) =>{
    return new Promise((resolve,reject)=>{
        UserModule.find({username:usernameParam}, function(err,userList){
            if(err){
                reject({message:"Internal Server Error",status:500});
            }
            else{
                resolve({message:"List Obtained",users:userList,status:200})
            }
        })
    })
}

const findPassword = (usernameParam) =>{
    return new Promise((resolve,reject)=>{
        UserModule.find({password:usernameParam}, function(err,userList){
            if(err){
                reject({message:"Internal Server Error",status:500});
            }
            else{
                resolve({message:"List Obtained",users:userList,status:200})
            }
        })
    })
}

const addUser = (user) => {

    return new Promise((resolve,reject)=>{
        let newUser = new UserModule;
        newUser.username = user.username;
        newUser.password = user.password;
        newUser.save(function (err, retrunUser){
            if(err){
                reject({message:"Internal Server Error"})
            }
            else{
                resolve({message:"Added",userInfo:retrunUser.username,status:201})
            }
        })
    })
}


const login = (user) =>{

    return new Promise((resolve,reject)=>{
        
        UserModule.find({username:user.username,password:user.password},function(err,returnUser){
            if(err){
                reject({message:"error faced",status:500})
            }
            else{
                if(returnUser.length == 0){
                    reject({message:"You are not registered user"});
                }
                else{ 
                    resolve({message:"LoggedIn",user:returnUser[0],status:200})
                }



            }
        })
    })
}

module.exports = {
    findUser,
    addUser,
    login,
    findPassword
}