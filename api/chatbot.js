export default async function handler(req, res) {
  try {
    const { message, data } = req.body;

    if (!message || !data) {
      return res.status(400).json({ reply: "Bad request" });
    }

    const prompt = `
You are Zeeshan's personal assistant. Answer using only this data:
${JSON.stringify(data)}

User question: "${message}"
`;

    const response = await fetch("https://api.groq.ai/v1/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.VITE_GROQ_MODEL,
        prompt,
        max_tokens: 150,
      }),
    });

    const resultText = await response.text(); // first get raw text
    console.log("Raw Groq API response:", resultText);

    let resultJson;
    try {
      resultJson = JSON.parse(resultText);
    } catch (e) {
      console.error("JSON parse error:", e);
      return res.status(500).json({ reply: "Groq API returned invalid JSON" });
    }

    res.status(200).json({ reply: resultJson.choices?.[0]?.text?.trim() || "Sorry, I didn't get that." });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ reply: "Oops! Something went wrong." });
  }
}
