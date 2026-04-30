import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.use(express.static("public"));

app.get("/",async (req,res)=>{
    res.render("home.ejs");
})

app.listen(3000,async()=>{
    console.log("running on port 3000!");
})