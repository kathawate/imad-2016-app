var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

 var articleone={
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
};
 
  var articletwo={
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
    
};
  var articlethree={
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
        ${date}
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



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleName=req.params.articleName;

app.get('/article-one',function (req,res){
    res.send(createTemplate(articleone));
});







app.get('/article-one', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
//var articleName=req.params.articleName;
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
