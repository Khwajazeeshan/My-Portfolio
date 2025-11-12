import fetch from "node-fetch"; // fetch in Node environment

export default async function handler(req, res) {
  const { message, data } = req.body;

  const prompt = `
You are Zeeshan's personal assistant. Answer user questions **only using the following data**:
${JSON.stringify(data)}

Rules:
- Answer in **one line**.
- If the data doesn't have the info, reply: "I don't have specific information about this."
- If the question is irrelevant or out of context, reply: "Sorry, I can't assist with that."

User question: "${message}"
`;

  try {
    const response = await fetch("https://api.groq.ai/v1/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.VITE_GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.VITE_GROQ_MODEL,
        prompt,
        max_tokens: 150
      })
    });

    const result = await response.json();
    res.status(200).json({ reply: result.choices?.[0]?.text?.trim() || "Sorry, I didn't get that." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Oops! Something went wrong." });
  }
}
