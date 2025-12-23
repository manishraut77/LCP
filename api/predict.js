export default async function handler(req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "Use POST" }); return; }

  const { imageUrl } = req.body || {};
  if (!imageUrl) { res.status(400).json({ error: "Missing imageUrl" }); return; }

  // STUB prediction (so frontend integration is testable)
  res.status(200).json({
    ok: true,
    imageUrl,
    label: "No cancer detected",
    confidence: 0.87,
    explanation: "Stub result. Real model comes next."
  });
}
