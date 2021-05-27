export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // TODO: Call Login API

    if (username === 'huylhd' && password === '123456') {
      req.session.accessToken = '654321';
      req.session.authInfo = {
        accountId: 1,
        fullname: 'Huy',
        scopes: ['default', 'test']
      }
      await req.session.save();
      return res.status(200).json({
        code: 1,
        message: 'Login success',
      });
    }
    return res.status(200).json({
      code: 0,
      message: 'Login failed. Incorrect credentials',
    });
  }
}