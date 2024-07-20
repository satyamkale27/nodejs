const http = require("http");
const PORT = 3000;
const { type } = require("os");
const { text } = require("stream/consumers");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "text/plain",
  });
  res.end("Hello! Sir Newton is your friend");
});
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
