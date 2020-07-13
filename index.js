const fetch = require("node-fetch");

handler = async function (event, context) {
  console.log("start");
  return await fetch("http://url.com")
    .then((res) => res.text())
    .then((body) => {
      console.log(body);
      return "ok";
    });
};

exports.handler = handler;
