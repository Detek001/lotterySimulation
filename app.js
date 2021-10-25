const http = require("http");
const express = require("express");
const path = require("path");
const exp = require("constants");
const app = express();

app.use(express.static(path.join(__dirname, "/")))

const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Server Listening on port 3000.");
});