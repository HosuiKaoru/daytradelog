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

  // 認証成功時はリダイレクトする
  return {
    statusCode: 302,
    headers: {
      Location: '/',  // 認証後にサイトのトップページへ
    },
    body: '',
  };
};
