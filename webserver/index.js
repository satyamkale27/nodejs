const http = require("http");
const { request } = require("https");
const PORT = 3000;
const { type } = require("os");
const { text } = require("stream/consumers");
const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url === "/friends") {
    // res.writeHead(200, {
    //   // "Content-type": "text/plain",
    //   "content-type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        id: 1,
        name: "sir Isaac newton",
      })
    );
  } else if (req.url === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello</li>");
    res.write("<li>what are your thoughts on astronomy ? </li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
