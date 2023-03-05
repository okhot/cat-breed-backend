const express = require("express");
const cors = require("cors");
const getCatsByFriendliness = require("./endpoints");
const { config } = require('dotenv');

config()

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", async (req, res) => {
  await fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((response) => res.send(getCatsByFriendliness(response, req.query)));
});

server.listen(process.env.PORT, () => console.log(`running port ${process.env.PORT}...`));
