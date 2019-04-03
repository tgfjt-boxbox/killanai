const request = require("request");
const terminalImage = require("terminal-image");

const IMG_URL =
  "https://lh3.googleusercontent.com/GHEDwSR53EQqYxmRAkqgwFUSD0dvv6n0Vxu2mS1UXlFTF-w3PioFuiIDJKONHsOzeJTP9nE=s32";

function hello() {
  request(
    { method: "GET", url: IMG_URL, encoding: null },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        terminalImage.buffer(body).then(image => {
          console.log(image);
        });
      }
    }
  );
}

module.exports = hello;
