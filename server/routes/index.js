const express = require("express");
const router = express.Router();
const Todo = require('../models/todo')

router.get('/', async(req,res)=>{
  try {
    const allTodo= await Todo.find()
    res.status(200).json({sucsess:true, allTodo})
  } catch (err) {
    res.status(404).json({ succes: false, msg: err.message });
  }
  
})

router.post('/add', async(req,res)=>{
  const{input} = req.body
  console.log("input",input);
  console.log(Todo);
  try {
    const newTodo = await Todo.create({
      title: input
    })
    res.status(200).json({sucsess:true, newTodo})
  } catch (err) {
    res.status(404).json({ succes: false, msg: err.message });
  }
  
})

router.delete('/del', async(req,res)=>{
  try {
    const{id}=req.body
    await Todo.findByIdAndDelete(id)
    res.status(200).json({sucsess:true, id})
  } catch (err) {
    res.status(404).json({ succes: false, msg: err.message });
  }
})

router.put('/check', async(req,res)=>{
  try {
    const{id}=req.body
    let todo = await Todo.findById(id)
    todo.isDone = !todo.isDone
    await todo.save()
    res.status(200).json({sucsess:true, id: todo._id})
  } catch (err) {
    res.status(404).json({ succes: false, msg: err.message });

  }
})

router.put('/udate' , async(req,res)=>{
  try {
    const{title, id}= req.body
    await Todo.findByIdAndUpdate(id, {title:title})
    res.status(200).json({ succes: true, title, id });
  } catch (err) {
    res.status(404).json({ succes: false, msg: err.message });

  }
})

module.exports = router;
