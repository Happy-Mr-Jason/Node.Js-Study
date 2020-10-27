const express = require("express");
var app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static('./'));

var dataList = [{
    id: "1",
    content: "table data 1",
    author: "sjlee",
  },
  {
    id: "2",
    content: "table data 2",
    author: "sjlee",
  },
  {
    id: "3",
    content: "table data 3",
    author: "sjlee",
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    title: "Express Server",
    list: dataList,
  });
});

app.listen(3000);