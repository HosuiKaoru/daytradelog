const auth = require('basic-auth');
const fs = require('fs').promises; // ファイルシステムを操作するためのモジュールを追加
const path = require('path');

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

  // 認証に成功したら、サイトのコンテンツを返す
  const filePath = path.join(__dirname, '..', '..', 'public', event.path);
  let fileContent;
  
  try {
    fileContent = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    // ファイルが存在しない場合、404エラーを返す
    return {
      statusCode: 404,
      body: 'Page not found.',
    };
  }

  return {
    statusCode: 200,
    body: fileContent,
  };
};