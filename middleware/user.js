const {User} = require("../models/user")

function userMiddleWare(req, res, next){
    const { username , password } = req.headers;
    User.findOne({
        username:username,
        password:password
    })
    .then(function (value){
        if(value){
            next()
        }else{
            res.status(403).json({ msg : "Invalid Username"})
        }
    })
}

module.exports = userMiddleWare