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

app.get('/example',(req,res)=>{
  // console.log(req.query);
  res.send(`<div>
    <h2>URL:${req.url}</h2>
    <h2>method:${req.method}</h2>
    <h2>query:${JSON.stringify(req.query)}</h2>
    <h2>params:${JSON.stringify(req.params)}</h2>
    <h2>body:${JSON.stringify(req.body)}</h2>
    </div>`)
})

app.get('/example/:param',(req,res)=>{
  // console.log(req.query);
  res.send(`<div>
    <h2>URL:${req.url}</h2>
    <h2>method:${req.method}</h2>
    <h2>query:${JSON.stringify(req.query)}</h2>
    <h2>params:${JSON.stringify(req.params)}</h2>
    <h2>body:${JSON.stringify(req.body)}</h2>
    </div>`)
})

app.post('/example', (req,res)=>{
  // console.log(req.body);
  res.send(`<div>
    <h2>URL:${req.url}</h2>
    <h2>method:${req.method}</h2>
    <h2>query:${JSON.stringify(req.query)}</h2>
    <h2>params:${JSON.stringify(req.params)}</h2>
    <h2>body:${JSON.stringify(req.body)}</h2>
    </div>`)
})
