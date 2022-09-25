const path = require('path');
const router = require('express').Router();

//Sending the information to notes.
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//The other routes get sent to index.html file
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = router;

console.log(router,"HERE")