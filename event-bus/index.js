const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://post-clusterip-srv:4000/events", event);
  axios.post("http://comments-srv:4001/events", event);
  axios.post("http://query-srv:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Server listening on port 4005");
});
