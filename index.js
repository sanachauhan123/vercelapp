const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: "https://reactapp-green-theta.vercel.app", // Your frontend URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
  };
  app.use(cors(corsOptions));
  
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
