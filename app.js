const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")

const app = express();

// to create a template using ejs
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({extended : true}));

var items = ["Complete EJS","Complete git,github,version control","Complete Api"];
var workItems = [];
app.get("/",(req,res) => {

    let day = date();
    res.render("list",
    {
        listTitle : day,
        newlistitems : items,
    });
//     var currentDay = today.getDay();
//     var day = "";

//    switch (currentDay) {
//        case 0:
//            day = "Sunday";
//            break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//                 day = "Tuesday";
//                 break;
//         case 3:
//              day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;
   
//        default:
//            break;
//    }
        // res.render("list",{Kindofday : day});
});

app.post("/",(req,res) => {
    console.log(req.body)
    let item = req.body.newitem ;
    
    if(req.body.list === "Work List "){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/") ;

    };
});

// creating work route
app.get("/work",(req,res) => {
    res.render("list",{listTitle :"Work List",newlistitems : workItems});
});

app.get("/about",(req,res) => {
    res.render("about");
})







//          WHEN DEPLOYING ON HEROKU USE 
// app.listen(3000 || process.env,PORT,() => {
//     console.log("Server running at port 3000");
// }) INSTEAD OF 


app.listen(3000,() => {
    console.log("Server running at port 3000");
});