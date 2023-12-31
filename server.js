const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets',express.static('assets'));

app.get("/", (req,res) => {
    res.render('index', {});
})

app.listen(8085, () => {
    console.log(`Running on port 8085`);
})