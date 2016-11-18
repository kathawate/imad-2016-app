var express = require('express');
var morgan = require('morgan');
var path = require('path');


var Pool = require('pg').Pool;
var config = {
  user :'kathawate',
  database:'kathawate',
  host:'db.imad.hasura-app.io',
  port:'5432',
  password: process.env.DB_PASSWORD,
};




var app = express();
app.use(morgan('combined'));
var articles={
  'article-one':{
    title:' article-one |kathawate',
    heading:'article-one',
    date:'nov 6, 2016',
    content: `<p>
         My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming...
          My name is shubham kathawate.i'm 21 years old and i love the programming...
        </p>
        <p>
             My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming...
            </p>`
},
  'article-two':{
     title:' article-two |kathawate',
    heading:'article-two',
    date:'nov 6, 2016',
    content: `<p>
         My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming...
          My name is shubham kathawate.i'm 21 years old and i love the programming...
        </p>
        <p>
             My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming...
            </p>`
    
},
   'article-three':{
     title:' article-three |kathawate',
    heading:'article-three',
    date:'nov 6, 2016',
    content: `<p>
         My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming...
          My name is shubham kathawate.i'm 21 years old and i love the programming...
        </p>
        <p>
             My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming... My name is shubham kathawate.i'm 21 years old and i love the programming...
            </p>`
}
    
};
function createTemplate(data){
    var title=data.title;
     var heading=data.heading;
    var date=data.date;
    var content=data.content;
   

var htmlTemplate=`
<html>
 <head>
     <title>
         ${title}
     </title>     
     <meta name="viewport" content="width=device-width ,initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
    
 </head>
 <body>
     <div class ="container">
     <div>
         <a href="/">Home</a>
     </div>  
     <hr/>
     <h1>
         ${heading}
        </h1>
    <div>
        ${date.toDateString()}
    </div>
    <div>
         ${content}
    </div>
    </div>
 </body>     
</html>
`;
    return htmlTemplate;
}
app.get('/articles/:articleName',function (req,res){
    
   pool.query("SELECT * FROM article WHERE title=$1" ,[req.params.articleName],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           if(result.rows.lenght ===0){
               res.status(404).send('Article not found');
           }else{
               var articleData =result.rows[0];
                 res.send(createTemplate(articleData));
           }
       }
   });
  
});









app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about'));
});




var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM article',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           res.send(JSON.stringify(result.rows));
       }
    });
});







var counter=0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});
var names=[];
app.get('/submit-name',function(req,res){
    var name= req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});