import { NextApiRequest, NextApiResponse } from "next";
import { validateApiKey } from "@/lib/openai-api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }
  
  const data = JSON.parse(req.body);
  const apiKey = data.apiKey;
  
  if (!apiKey) {
    return res.status(400).json({ error: "API key is required" });
  }

  const isValid = await validateApiKey(apiKey);

  if (isValid) {
    return res.status(200).json({ message: "API key is valid" });
  } else {
    return res.status(400).json({ message: "Invalid API key" });
  }
}
