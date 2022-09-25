const express = require('express');
const app = express();


const PORT = process.env.PORT || 3001;

//Connect to Json,Port, and public
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./apiRoutes")(app);
require("./htmlRoutes");

//Listener
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});