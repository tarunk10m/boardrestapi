const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

//Post
router.post('/', (req,res) => {

    task = new Task({
        task_name:req.body.task_name,
        task_description:req.body.task_description,
        creator:req.body.creator,
        duration:req.body.duration,
        createdAt:req.body.createdAt,

    });

    task.save().then(book =>{
        res.send(book);
    }).catch(error => {
        res.status(500).send("unsuccessful");

    });

});

//GET
router.get("/",(req,res) => {
    Task.find()
    .then((tasks) => res.send(tasks))
    .catch((error) =>{
        res.status(500).send("something went wrong");
    });
});

//BY ID

router.get("/:taskId",(req,res) => {
    Task.findById(req.params.taskId)
    .then((task) =>{
        if(task) res.send(task);
        res.status(404).send("not found");

    })
    .catch((error) => {
        res.status(500).send(error.message);
    });
});





module.exports = router;