const auth = require('basic-auth');

exports.handler = async (event) => {
  // `basic-auth`関数はヘッダー全体を引数として受け取る
  const credentials = auth({ headers: event.headers });

  // 環境変数からユーザー名とパスワードを取得
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

  // 認証が成功した場合、次のリクエストを許可する
  return {
    statusCode: 200,
    body: 'Authenticated successfully.'
  };
};