const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var arr =[];
var page;

app.set('view engine', 'ejs');

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(express.static("static"));

app.get("/" , (req , res)=>{
    res.sendFile(__dirname + "/public/index.html")
    
})

app.get('/download', function(req, res){
    res.download('My-CV');
});

app.get("/education" , (req , res)=>{
    res.sendFile(__dirname + "/public/education.html")
})

app.get("/hobby" , (req , res)=>{
    res.sendFile(__dirname + "/public/hobby.html")
})

app.get("/projects" , (req , res)=>{
    res.sendFile(__dirname + "/public/projects.html")
})

app.get("/service" , (req , res) =>{
    res.render("login");
})

app.post("/service" , (req , res)=>{
    page = req.body.namef;
    res.redirect("/service/:" + page)
})

app.get("/service/:" + page , (req , res)=>{
    res.render("todo2" , {hehe: page});
})

// app.post("/service/:" + page , (req , res)=>{
//     item = req.body.todo;
//      arr.push(item);
//      res.redirect("/service/:" + page);
// })
// app.get("/service" , (req , res)=>{
//     res.render("todo" , {listItems: arr});
// })

// app.post("/service" , (req , res)=>{
//     item = req.body.todo;
//     arr.push(item);
//     res.redirect("/service");
// })

app.post("/thankyou" , (req , res)=>{
        res.render("thankyou");    
})

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/error.html');
})

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Port running on localhost: 3000');
})