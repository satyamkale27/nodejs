const request = require("./request");
const response = require("./response");
function makerequest(url, data) {
  request.send(url, data);
  return response.read();
}
const responsedata = makerequest("https://google.com", "hello");
console.log(responsedata);
