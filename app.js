import 'dotenv/config';
import express from 'express';
const app =express();

const port = process.env.PORT || 3000; // if not font port number on the .env file assign default port 3000

//parse for req.body 
app.use(express.json())


//added get function for root get '/'
app.get('/', (req, res)=>{
  console.log(req.body);
  res.send("welcom to home page")
})



app.listen(port, ()=>{
  console.log(`server run on port: ${port}`);
})