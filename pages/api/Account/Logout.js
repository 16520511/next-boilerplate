export default async function handler(req, res) {
  if (req.method === 'POST') {
    delete req.session?.authInfo;
    await req.session.save();

    return res.status(200).json({
      code: 1,
      message: 'Thành công'
    })
  }
}