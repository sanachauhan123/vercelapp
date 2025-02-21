const express = require("express");
const cors = require("cors");
const app = express();

  app.use(cors());
  
  app.use(express.json());

app.get("/api", (req, res) => {
    res.send({ message: "Server deployed and running on Vercel." });
});

app.get("/api/login", (req, res) => {
    res.send({
        username: "sana",
        password: "1234"
    });
});

module.exports = app;
