//Loads all data
// brought db in just for incremental id
const db = require('./db/db.json');
const fs = require('fs');
const router = require('express').Router();

let id = db.length + 1;



    
    //Get
    router.get("/notes",function(req, res){
        
        fs.readFile("./db/db.json", function(err,data){
            //Make err statement
            if(err){
                console.log("error")
            } 
            console.log("no error")
            res.status(200).send(JSON.parse(data))
        })
    })

    //Post
    router.post("/notes", function(req,res){
        var addNote= req.body;
        
        

        fs.readFile("./db/db.json", function(err, data){
            //Incremental id for each stored note
            var note =JSON.parse(data);

            addNote.id = note.length.toString()
            addNote.id = id++;
            //New note pushed to the body

            note.push(addNote);

            fs.writeFile("./db/db.json", JSON.stringify(note, null, '  '), function(err){
                if (err) {
                    return console.log(err);
                }
                console.log("Your note was saved!");
            })

            
        })
        res.json(addNote)
    })



module.exports= router