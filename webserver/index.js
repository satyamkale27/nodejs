const http = require("http");
const { request } = require("https");
const PORT = 3000;
const { type } = require("os");
const { text } = require("stream/consumers");
const server = http.createServer();
const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "sir Albert einstein",
  },
  {
    id: 2,
    name: "sir Isaac newton",
  },
];
server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (items.length === 3) {
      const FriendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[FriendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
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
