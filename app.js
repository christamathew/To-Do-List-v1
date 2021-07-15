const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
var app=express();
app.set('view engine', 'ejs');
var next=[];
var workList=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res){
    const day = date.getDate();

    res.render("list",{
        listTitle:day,
        nextItem:next
    });
    }
);
app.post("/",function(req,res){
    const newItem=req.body.next;
    if(req.body.list==="Work"){
        workList.push(newItem); 
        res.redirect("/work");
    }
    else{
        next.push(newItem);
        res.redirect("/");
    }
});
app.get("/work", function(req,res){
    res.render("list",{
        listTitle:"Work List",
        nextItem:workList,
    })
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
}); 
