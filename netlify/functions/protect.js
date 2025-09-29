// netlify/functions/protect.js
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

  // 認証OKなら、実際のトップページにリダイレクトする
  return {
    statusCode: 302,
    headers: {
      Location: "/index.html",
    },
    body: "Redirecting...",
  };
};
