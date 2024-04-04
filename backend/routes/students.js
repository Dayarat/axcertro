const router = require("express").Router();
let Student = require("../models/Student");

router.route("/add").post((req,res)=>{

    const firstname = req.body.firstname;
    const lastname = Number(req.body.lastname);
    const email = req.body.email;

    const newStudent = new Student({
        firstname,
        lastname,
        email
    })

    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res)=> {
    let userId = req.params.id;
    const {firstname,lastname,email} = req.body;

    const updateStudent = {
        firstname,
        lastname,
        email
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(()=> {
        res.status(200).send({status: "User Updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req, res)=> {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(()=> {
        res.status(200).send({status: "User Deleted"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with delete data", error: err.message});
    })

})

router.route("/get/:id").get(async (req, res)=> {
    let userId = req.params.id;
    const user = await Student.findById(userId).then((student)=> {
        res.status(200).send({status: "User fetch", student})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with ger user", error: err.message});
    })
})
module.exports = router;