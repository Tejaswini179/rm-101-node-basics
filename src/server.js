// install and import express

const express = require("express");
const path = require("path");
const data = require("./assets/user.json");
let app = express();

// Code here

app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname + "/assets/users.html"));
  } catch (error) {
    return res.send({ message: error.message });
  }
});

app.get("/users",  (req, res) => {
  try {

    return res.json({ data: data });
  } catch (error) {
    return res.send({ message: error.message });
  }
});

app.get("/users/:id",async (req, res) => {
  try {
    const Data = await data.filter((data) => data.id == req.params.id);

    return res.json({ id: Data });
  } catch (error) {
    return res.send({ message: error.message });
  }
});

app.post("/users", async(req, res) => {
  try {
    const Data = await req.body;
    data.push(Data);
    return res.send({data:data})
  } catch (error) {
    return res.send({ message: error.message });
  }
});

app.listen(8000, async () => {
  try {
    console.log("connected to the port 8000!!!!!!!");
  } catch (error) {
    console.log("error", error);
  }
});

// Note: Do not remove this export statement
module.exports = app;
