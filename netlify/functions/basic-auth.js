const auth = require('basic-auth');
const fs = require('fs').promises;
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
  let requestPath = event.path.endsWith('/') ? event.path + 'index.html' : event.path;
  
  const filePath = path.join(process.env.NETLIFY_BUILD_BASE, 'repo', 'public', requestPath);
  let fileContent;
  
  try {
    fileContent = await fs.readFile(filePath, 'utf8');
  } catch (error) {
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