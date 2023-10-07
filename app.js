import 'dotenv/config';
import express from 'express';
const app =express();

const port = process.env.PORT || 3000; // if not font port number on the .env file assign default port 3000


app.listen(port, ()=>{
  console.log(`server run on port: ${port}`);
})