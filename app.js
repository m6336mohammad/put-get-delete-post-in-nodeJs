import 'dotenv/config';
import express from 'express';
import  country  from './country.js';

const app =express();

const port = process.env.PORT || 3000; // if not font port number on the .env file assign default port 3000



//added get function for root get '/'
app.get('/', (req, res)=>{
  console.log(req.body);
  // res.send("welcom to home page" )
  res.json(country)
})

//added get function for get by id '/:id'
app.get('/api/user/:id', (req, res)=>{
  const cont = country.find((c)=> c.id === parseInt(req.params.id));
  if(!cont){return res.send('this counmter not find');}
  res.send({data:cont , massege: 'ok'});
  console.log(req.params.id);
  // res.send('your request ID ==>: ' +req.params.id )
})



app.listen(port, ()=>{
  console.log(`server run on port: ${port}`);
})
