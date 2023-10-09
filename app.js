import "dotenv/config";
import express from "express";
import country from "./country.js";

const app = express();

const port = process.env.PORT || 3000; // if not font port number on the .env file assign default port 3000

//added body parser
app.use(express.json());

//added get function for root get '/'
app.get("/", (req, res) => {
  console.log(req.body);
  // res.send("welcom to home page" )
  res.status(200).json(country);
});

//added get function for get by id '/:id'
app.get("/api/user/:id", (req, res) => {
  const cont = country.find((c) => c.id === parseInt(req.params.id));
  if (!cont) {
    return res.status(400).send("this counmter not find");
  }
  res.status(200).send({ data: cont, massege: "ok" });
  console.log(req.params.id);
});

//added post
app.post("/api/country", (req, res) => {
  country.push({ id: country.length + 1, ...req.body });
  // console.log(req.body);
  res.status(200).json({
    data: country,
    message: "ok",
  });
  console.log(country);
});

app.listen(port, () => {
  console.log(`server run on port: ${port}`);
});
