import express from 'express'
import bodyParser from 'body-parser'
import path from 'path';

const app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));



app.get("/",async (req,res)=>{
    res.render("home.ejs");
})

app.listen(5000,async()=>{
    console.log("running on port 5000!");
})


module.exports = app;