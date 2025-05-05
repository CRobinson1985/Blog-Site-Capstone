import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogPosts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create", (req, res) => {
  res.render('create.ejs');
});

app.post("/", (req, res) => {
  const date = new Date();
  
  const blogTitle = req.body["blog-title"];
  const blogBody = req.body["blog-body"];
  blogPosts.unshift({ title: blogTitle, body: blogBody, date: date});
  res.render("index.ejs", { blogposts: blogPosts});
});
app.delete(, (req, res) => {
  console.log(req);
  
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});