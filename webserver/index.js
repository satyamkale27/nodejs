const http = require("http");
const PORT = 3000;
const { type } = require("os");
const { text } = require("stream/consumers");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // "Content-type": "text/plain",
    "content-type": "application/json",
  });
  res.end(
    JSON.stringify({
      id: 1,
      name: "sir Isaac newton",
    })
  );
});
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
