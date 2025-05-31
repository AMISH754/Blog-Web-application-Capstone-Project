import express from "express";
import bodyParser from "body-parser"; // we use ejs instead of sendFile because sendFile is for static File
const app=express();
const port=4000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
res.render("index.ejs");
});

app.get("/membership",(req,res)=>{
 res.render("membership.ejs");
});


let blog_title, blog_body;
app.post("/write",(req,res)=>{
res.render("write.ejs");
});



app.get("/write",(req,res)=>{
 res.render("write.ejs",{
    story_title:blog_title,
    story_body:blog_body
   });
});


app.post("/story",(req,res)=>{
   console.log(req.body["title"]);
   console.log(req.body["body-text"]);
  
    blog_title=req.body["title"];
    blog_body=req.body["body-text"];
  
  
   res.render("story.ejs",{
    
    story_title:blog_title,
    story_body:blog_body
   });



    
});

app.get("/story",(req,res)=>{
  
    res.render("story.ejs",{
    story_title:blog_title,
    story_body:blog_body
   });
});

app.get("/about",(req,res)=>{
res.render("about.ejs");
});


app.get("/login",(req,res)=>{
   res.render("login.ejs");
});
  




app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});
