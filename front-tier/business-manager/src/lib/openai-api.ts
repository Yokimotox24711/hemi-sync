import { Configuration, OpenAIApi } from "openai";

// export async function textCompletion(
//   prompt: string,
//   model: string,
//   chatId?: string
// ) {
//   // Retrieve apiKey from the session
//   const session = req.getSession();
//   const apiKey = session.apiKey; // Assuming you have a "session" object here

//   const configuration = new Configuration({
//     apiKey: apiKey, // Use the passed API key
//   });

//   const openai = new OpenAIApi(configuration);

//   const res = await openai
//     .createCompletion({
//       model: model,
//       prompt: prompt,
//       max_tokens: 750,
//       temperature: 0, //creativity
//       // top_p: 1, //?
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     })
//     .then((res) => {
//       return res.data.choices[0].text;
//     })
//     .catch((err) => {
//       return `OpenAI was unable to find an answer for that! (Error: ${err.message})`;
//     });

//   return res;
// }

export async function createEmbedding(message: string, apiKey: string, chatId?: string) {
  
  const configuration = new Configuration({
    apiKey: apiKey, // Use the passed API key
  });

  const openai = new OpenAIApi(configuration);

  const res = await openai
    .createEmbedding({
      model: "text-embedding-ada-002",
      input: message,
    })
    .then((res) => {
      return res.data.data[0].embedding;
    })
    .catch((err) => {
      return `OpenAI was unable to create an embedding. (Error: ${err.message}`;
    });
  return res;
}

export async function chatgptQuery(
  prompt: string,
  model: string,
  apiKey: string,
  chatId?: string
) {

  const configuration = new Configuration({
    apiKey: apiKey, // Use the passed API key
  });

  const openai = new OpenAIApi(configuration);

  // const res = "default_prompt";
  console.log("ask for completion")

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

export async function validateApiKey(apiKey: string): Promise<boolean> {
  const configuration = new Configuration({
    apiKey,
  });

  const openai = new OpenAIApi(configuration);

  try {
    // Attempt a simple API call
    await openai.listModels();
    return true; // API key is valid
  } catch (error) {
    console.error("API key validation error:", error.message);
    return false; // API key is invalid
  }
}
