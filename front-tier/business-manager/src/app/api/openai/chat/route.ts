import OpenAI from "openai";
const openai = new OpenAI();

export async function POST(req: Request) {
    var { prompt } = await req.json();

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      });

    var data = completion.choices[0].message.content;

    return new Response(JSON.stringify(data), { status: 200});
}