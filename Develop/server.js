const express = require('express');
const app = express();
const htmlRoutes = require('./htmlRoutes')
const apiRoutes = require("./apiRoutes")

const PORT = process.env.PORT || 3001;

//Connect to Json,Port, and public
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api",apiRoutes)
app.use("/",htmlRoutes)



//Listener
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});