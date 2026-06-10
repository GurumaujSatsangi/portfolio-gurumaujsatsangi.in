import express from 'express'
import bodyParser from 'body-parser'
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.static("public"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));



app.get("/",async (req,res)=>{
    res.render("home.ejs");
})

app.listen(5000,async()=>{
    console.log("running on port 5000!");
})


module.exports = app;