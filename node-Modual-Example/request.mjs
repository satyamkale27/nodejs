const REQUEST_TIMEOUT = 500;
function encrypt() {
  return "encrypted data";
}

function send(url, data) {
  const encrypteddata = encrypt(data);
  console.log(`sending ${encrypteddata} to ${url}`);
}
export { REQUEST_TIMEOUT, send };
