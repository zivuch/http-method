const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
// to extrat the data form the body
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT||5000,()=>{
  console.log('server is running on port 5000');
});

app.get('/login',(req,res)=>{
  // console.log(req.query);
  res.json({method:'GET',query:req.query})
})

app.post('/login', (req,res)=>{
  // console.log(req.body);
  res.json({method:'POST',body:req.body})
})
