const auth = require('basic-auth');

exports.handler = async (event, context) => {
  const credentials = auth(event.headers.authorization);

  // 環境変数からユーザー名とパスワードを取得
  const validUser = process.env.BASIC_AUTH_USER;
  const validPassword = process.env.BASIC_AUTH_PASSWORD;

  if (!credentials || credentials.name !== validUser || credentials.pass !== validPassword) {
    return {
      statusCode: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Private Area"',
      },
      body: '認証が必要です。',
    };
  }

  // 認証が成功した場合、次のリクエストを許可する
  return {
    statusCode: 200,
    body: '認証に成功しました。' // 実際には、このメッセージは表示されません
  };
};