const express = require("express");
const axios = require("axios");
const cors = require("cors");
const getCatsByFriendliness = require("./endpoints");
const { config } = require('dotenv');

config()

const server = express();
server.use(express.json());
server.use(cors());

server.get("/",  (req, res) => {
   axios.get("https://api.thecatapi.com/v1/breeds")
    .then((response) => res.send(getCatsByFriendliness(response.data, req.query)));
});

server.listen(process.env.PORT, () => console.log(`running port ${process.env.PORT}...`));
