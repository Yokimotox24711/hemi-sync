import { Configuration, OpenAIApi } from "openai";

export async function chatgptQuery(
  prompt: string,
  apiKey: string,
  chatId?: string
) {
  const configuration = new Configuration({
    apiKey: apiKey, // Use the passed API key
  });

  const openai = new OpenAIApi(configuration);

  // const res = "default_prompt";
  console.log("ask for completion");

  const res = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0, //creativity,
    })
    .then((res) => {
      return res.data.choices[0].message?.content;
    })
    .catch((err) => {
      return `OpenAI was unable to find an answer for that! (Error: ${err.message})`;
    });

  return res;
}
