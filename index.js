const express = require("express");
const axios = require("axios");
const cors = require("cors");
const getCatsByFriendliness = require("./endpoints");
const server = express();
server.use(express.json());
server.use(cors());

server.get("/", async (req, res) => {
  await fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((response) => res.send(getCatsByFriendliness(response, req.query)));
});

server.listen(3500, () => console.log("running port 3500..."));
