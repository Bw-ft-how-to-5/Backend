require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../users/users_router.js");
const studyRouter = require("../study/study_router.js"); 
const timeRouter = require("../time/time_router.js"); 


const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use("/api/users", usersRouter);
server.use("/api/time", timeRouter); 
server.use("/api/study", studyRouter);

server.get("/", (req, res) => {
  res.json({ api: "is up and runnning" });
});

module.exports = server;