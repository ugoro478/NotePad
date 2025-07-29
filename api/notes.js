export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, title: "First Note", content: "This is your first note." },
      { id: 2, title: "Second Note", content: "This is your second note." }
    ]);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
