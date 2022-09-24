const express = require('express');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const notes = require('./db/notes');


const app = express();


const PORT = process.env.PORT || 3001;


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});