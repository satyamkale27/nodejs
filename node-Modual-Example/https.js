const { send } = require("./request");
const { read } = require("./response");
function makerequest(url, data) {
  send(url, data);
  return read();
}
const responsedata = makerequest("https://google.com", "hello");
console.log(responsedata);
