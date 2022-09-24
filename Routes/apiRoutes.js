//Loads all data
// brought db in just for incremental id
const db = require('../db/db.json');
const fs = require('fs');

let id = db.length + 1;

module.exports= function(app){
    //Get
    app.get("/api/notes",function(res,res){
        fs.readFile("./db/db.json", function(req,res){
            if(err) throw err;
            // Parse retrived data
            res.toJSON(JSON.parse(data))
        })
    })

    //Post
    app.post("/api/notes", function(req,res){
        var addNote= req.body;
        //Incremental id for each stored note
        addNote.id = id++;

        fs.readFile("./db/bd.json", function(err, data){
            if (err) throw err;
            var note =JSON.parse(data);
            //New note pushed to the body
            note.push(addNote);

            fs.writeFile("./db/db.json", JSON.stringify(note), function(err){
                if(err) throw err;
            })

            
        })
        res.json(addNote)
    })
}


