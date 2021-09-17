const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");   

const notesSchema = new mongoose.Schema({
    title:String,
    content:String
});

const Note = mongoose.model("Note",notesSchema);

router.route("/save").post((req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title:title,
        content:content
    });   
    newNote.save();
})

router.route("/receive").get((req,res)=>{
    Note.find()
        .then(foundNotes=>res.json(foundNotes))
})

module.exports = router;