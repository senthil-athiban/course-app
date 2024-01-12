const { Admin } = require("../models/admin")

function adminMiddleWare(req, res, next){
    const { username , password } = req.headers;
    Admin.findOne({
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

module.exports = adminMiddleWare