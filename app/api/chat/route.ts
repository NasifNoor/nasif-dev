import { buildSystemPrompt, buildUserPrompt } from "@/app/lib/promptBuilder";

export async function POST(req: Request) {
  const { message } = await req.json();

  const userPrompt = await buildUserPrompt(message);
  const systemPrompt = await buildSystemPrompt();

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
    }),
  });

  const data = await res.json();

  return Response.json({
    reply: data.choices[0].message.content,
  });
}
