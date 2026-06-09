import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.use(express.static("public"));

app.get("/send",async(req,res)=>{

    return res.json({
        success:true,
        message:"Request Succesfully sent to Backend! Response received from Backend!"
    })
})

app.get("/",async (req,res)=>{
    res.render("home.ejs");
})

app.listen(5000,async()=>{
    console.log("running on port 5000!");
})