const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("./routers/requests");
const app = express();
const port = process.env.Port || 3000;
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
