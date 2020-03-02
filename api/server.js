require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");


const studyRouter = require("../study/study_router.js"); 
const timeRouter = require("../time/time_router.js"); 


const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use("/api/time", timeRouter); 
server.use("/api/study", studyRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;