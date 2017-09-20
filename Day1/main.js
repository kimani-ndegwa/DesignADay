const express = require('express');
const app = express();
const PORT = 3030


app.get('/', function(req,res){
  res.send('Hello World')
})
app.use(express.static('src'));

app.listen(PORT, function(){
  console.log('Running on port ' + PORT);
})
