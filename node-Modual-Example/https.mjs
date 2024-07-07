import { send } from "./request.mjs";
import { read } from "./response.mjs";
function makerequest(url, data) {
  send(url, data);
  return read();
}
const responsedata = makerequest("https://google.com", "hello");
console.log(responsedata);
