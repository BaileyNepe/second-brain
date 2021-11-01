const express = require("express");
const cors = require("cors");
const PORT = 5000;

const appServer = express();
appServer.use(cors());

appServer.get("/", (req, res) => {
  res.send("Api is running ...");
});

appServer.listen(PORT, console.log(`Server is listening on port ${PORT}`));
