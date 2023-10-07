import 'dotenv/config';
import express from 'express';
const app =express();

const port = process.env.PORT || 3000; // if not font port number on the .env file assign default port 3000



//added get function for root get '/'
app.get('/', (req, res)=>{
  console.log(req.body);
  res.send("welcom to home page")
})

//added get function for get by id
app.get('/api/user/:id', (req, res)=>{
  console.log(req.params.id);
  res.send("welcom to home page")
})



app.listen(port, ()=>{
  console.log(`server run on port: ${port}`);
})