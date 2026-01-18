export default async (request, context) => {
  // ▼ ここを好きなユーザー名とパスワードに変えてください ▼
  const BASIC_AUTH_USER = "7878";
  const BASIC_AUTH_PASS = "kodooji";
  // ▲ ここまで ▲

  const auth = request.headers.get("Authorization");

  const isValid = (authHeader) => {
    if (!authHeader) return false;
    const [scheme, encoded] = authHeader.split(" ");
    if (!scheme || scheme !== "Basic") return false;
    try {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      return user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS;
    } catch (e) {
      return false;
    }
  };

  if (!isValid(auth)) {
    return new Response("Access Denied", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Private Area"',
      },
    });
  }

  return context.next();
};
