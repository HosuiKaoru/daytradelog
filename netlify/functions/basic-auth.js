const auth = require('basic-auth');

exports.handler = async (event) => {
  const credentials = auth({ headers: event.headers });
  const validUser = process.env.BASIC_AUTH_USER;
  const validPassword = process.env.BASIC_AUTH_PASSWORD;

  if (!credentials || credentials.name !== validUser || credentials.pass !== validPassword) {
    return {
      statusCode: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Private Area"',
      },
      body: 'Authentication is required.',
    };
  }

  // 認証が成功した場合、以下のヘッダーを追加してサイトコンテンツを返す
  return {
    statusCode: 200,
    headers: {
      'X-Netlify-Auth-Success': 'true',
    },
    body: 'Authenticated successfully.' // このメッセージは通常表示されません
  };
};