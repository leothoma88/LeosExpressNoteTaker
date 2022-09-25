//Loads all data
// brought db in just for incremental id
const db = require('./db/db.json');
const fs = require('fs');

let id = db.length + 1;

module.exports= function(app){

    
    //Get
    app.get("/api/notes",function(req,res){
        fs.readFile("./db/db.json", function(data){
            
            res.json(JSON.parse(data))
        })
    })

    //Post
    app.post("/api/notes", function(req,res){
        var addNote= req.body;
        //Incremental id for each stored note
        addNote.id = notes.length.toString()
        addNote.id = id++;

        fs.readFile("./db/db.json", function(data){
            
            var note =JSON.parse(data);
            //New note pushed to the body
            note.push(addNote);

            fs.writeFile("./db/db.json", JSON.stringify(note), function(err){
                if (err) {
                    return console.log(err);
                }
                console.log("Your note was saved!");
            })

            
        })
        res.json(addNote)
    })
}


