// Vercel serverless function to proxy Gemini API requests
// Save your Gemini API key in Vercel environment variable GEMINI_API_KEY

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { model, systemInstruction, contents, generationConfig } = req.body || {};
  if (!model || !systemInstruction || !contents) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY not set in environment');
    res.status(500).json({ error: 'Server configuration error' });
    return;
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction,
        contents,
        generationConfig,
      }),
    });

    const data = await response.json();
    // Forward the exact status code from Gemini API
    res.status(response.status).json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy request failed', details: err?.message });
  }
}
