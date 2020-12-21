const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose")
require('dotenv').config({ silent: true })



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//need to connect to Mongo DB here
mongoose.connect(process.env.ATLAS_URI , {useNewUrlParser:true, 
useUnifiedTopology:true});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});