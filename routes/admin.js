const { Router } = require('express')
const adminMiddleWare = require('../middleware/admin');
const { Admin } = require('../models/admin');
const { Course } = require('../models/course');
const router = Router();

router.post("/signup", async (req, res)=>{
    const { username, password } = req.body;
    await Admin.create({
        username:username,
        password:password
    })

    res.json({
        "msg":"User created Successfully"
    })
})

router.post("/courses", adminMiddleWare, async (req, res) => {
    const { title, description, price, imageLink } = req.body;
    const newCourse = await Course.create({
        title,
        description,
        price, 
        imageLink
    })
    
    res.json({
        "msg": "Course created successfully",
        "CourseId": newCourse._id
    })
})

router.get('/courses', adminMiddleWare, async (req, res) => {
    const response = await Course.find({})
    res.json(response);
    
})

module.exports = router;