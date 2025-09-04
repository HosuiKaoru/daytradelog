const auth = require('basic-auth');

exports.handler = async (event, context) => {
  // Basic認証のチェック
  const credentials = auth({ headers: event.headers });
  
  const validUser = process.env.BASIC_AUTH_USER;
  const validPassword = process.env.BASIC_AUTH_PASSWORD;

  // 認証が失敗した場合
  if (!credentials || credentials.name !== validUser || credentials.pass !== validPassword) {
    return {
      statusCode: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Private Area"',
      },
      body: 'Unauthorized',
    };
  }

  // 認証成功時は、元のリクエストを処理
  // event.pathに基づいて適切なファイルを返す
  const requestedPath = event.path === '/' ? '/index.html' : event.path;
  
  try {
    // Netlifyの内部リダイレクトを使用
    return {
      statusCode: 200,
      headers: {
        'X-Netlify-Original-Path': requestedPath,
      },
      body: '', // 空のbodyでNetlifyに処理を委ねる
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: 'Not Found',
    };
  }
};