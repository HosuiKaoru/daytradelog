// netlify/functions/protect.js
const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  const auth = event.headers.authorization || "";
  const expectedAuth = "Basic " + Buffer.from("hosui:kodooji24").toString("base64");

  if (auth !== expectedAuth) {
    return {
      statusCode: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Protected"',
      },
      body: "Unauthorized",
    };
  }

  // 認証OKなら public/index.html を返す
  const indexPath = path.join(__dirname, "../../public/index.html");
  const html = fs.readFileSync(indexPath, "utf-8");

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html,
  };
};

