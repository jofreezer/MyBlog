// jshint esversion:6
const express= require("express");
const bodyP= require("body-parser");
const ejs = require('ejs');
const bodyParser = require("body-parser");
const _ = require("lodash");

const app=express();

const homestart= "home page";
const blogstart= "blog page";
const aboutstart= "about page";

app.set('view engine', 'ejs');
app.use(bodyP.urlencoded({extended: true}));
app.use(express.static("public"));


let posts= [];



app.get("/",function(req,res){
   res.render("home", {
       starting: homestart,
       posts: posts
    });
    
});

app.get("/blog",function(req,res){
    res.render("blog", {blogcontent: blogstart});
     
 });
 app.get("/blog",function(req,res){
   //  res.render("blog", {blogcontent: blogstart});
     
 });
 app.get("/about",function(req,res){
    res.render("about", {aboutcontent: blogstart});
     
 });

 app.get("/compose",function(req,res){
    res.render("compose");
     
 });
 app.post("/compose",function(req,res){
    
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    };
     posts.push(post);
     res.redirect("/");
 });


app.get("/post/:postName", function(req,res){
   const requestedTitle = _.lowerCase(req.params.postName);

   posts.forEach(function(post){
      const storedTitle = _.lowerCase(post.title);

      if(storedTitle == requestedTitle){
         res.render("post", {
            title:post.title,
            content:post.content
         });
      }else{
         
      }
   });
});







app.listen(3000,function(){
    console.log("port 3000");
});