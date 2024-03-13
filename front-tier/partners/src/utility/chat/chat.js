// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from "firebase-admin";
import { adminDB } from "@/firebaseAdmin";
import type { NextApiRequest, NextApiResponse } from "next";
import { chatgptQuery } from "@/lib/openai-api";
import { createEmbedding } from "@/lib/openai-api";
import { queryContext, upsertEmbedding } from "@/lib/pinecone";
import { uuidv4 } from "@firebase/util";
import { firestoreDB } from "@/firebase";
import { getSession, useSession } from "next-auth/react";
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { message, chatId, model, session, apiKey } = req.body;

  const pinecone_upsert_payload = [];

  // ____USER-MESSAGE____
  let prompt = message.text;

  if (!session) {
    return res.status(401).json({ answer: "Unauthorized" });
  }

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
  }

  if (!apiKey) {
    res.status(400).json({ answer: "Please provide a valid openai api key!" });
  }

  // Creates an embedding vector representing user message
  const embedding = await createEmbedding(message.text, apiKey, chatId);
  const embeddingMetadata = { chatId: chatId };

  pinecone_upsert_payload.push({
    id: message.uuid,
    values: embedding,
    metadata: embeddingMetadata,
  });

  prompt = await refinePrompt(prompt, embedding, session?.user?.email!, chatId);

  // ____GPT-MESSAGE____
  console.log("this is the refined prompt:");
  console.log(prompt);
  const response = await chatgptQuery(prompt, model, apiKey, chatId);
  console.log("this is the response");
  console.log(response);
  const responseMessage: Message = {
    uuid: uuidv4(),
    text: response || "chatGPT was unable to find an answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "YC-24/7",
      name: "YC-24/7",
      avatar:
        "https://drive.google.com/file/d/1ca2ERaNDubUDo7dEfSwkY11UreYOn-Gx/view",
    },
  };

  // Create embedding vector representing gpt message
  const embedding_gpt = await createEmbedding(responseMessage.text, apiKey, chatId);
  const embeddingMetadata_gpt = { chatId: chatId };
  pinecone_upsert_payload.push({
    id: responseMessage.uuid,
    values: embedding_gpt,
    metadata: embeddingMetadata_gpt,
  });

  await adminDB
    .collection("users")
    .doc(session?.user?.email!)
    .collection("people")
    .doc(chatId)
    .collection("messages")
    .doc(responseMessage.uuid)
    .set(responseMessage);

  // Save embedding vector to pinecone
  const upsertResponse = await upsertEmbedding(
    pinecone_upsert_payload,
    session?.user?.email!
  );

  res.status(200).json({ answer: responseMessage.text });
}

const refinePrompt = async (
  prompt: string,
  embedding: number[],
  userId: string,
  chatId: string
) => {
  // Contextual Prompt engineering happens here

  // Get chat cognition
  const docRef = await doc(firestoreDB, "users", userId, "people", chatId);

  const docSnap = await getDoc(docRef);
  const cof = (docSnap.data()?.cognition?.coreObjectiveFunctions) ? docSnap.data()?.cognition?.coreObjectiveFunctions : "";
  const ram = (docSnap.data()?.cognition?.ram) ? docSnap.data()?.cognition?.ram : 10;


  // console.log("going to query context");
  const queryContextResponse = await queryContext(
    embedding,
    userId,
    chatId,
    ram,
  );
  // console.log("queried context");

  // console.log("loading convo");
  const conversation = await loadConversation(
    queryContextResponse,
    userId,
    chatId
  );
  // console.log("loaded convo");

  let refinedPrompt = `
    ${ cof ? cof : ""}

    CURRENT CONVERSATION:
    ${conversation ?? ""}

    CURRENT PROMPT: 
    ${prompt}

    I will now provide a response, followed by a question:
  `;

  return refinedPrompt;
};

const loadConversation = async (
  queryContextResponse: any,
  userId: any,
  chatId: any
) => {
  let messagesIds = queryContextResponse.matches.map(contextmessage => contextmessage.id);
  if(messagesIds === undefined || messagesIds.length == 0) return;
  // console.log("here are the ids:");
  // console.log(messagesIds);
  const messagesRef = await collection(firestoreDB, "users", userId, "people", chatId, "messages");
  const q = query(messagesRef, where("uuid", "in", messagesIds), orderBy("createdAt", "asc"));
  const messages = await getDocs(q);
  let conversation = "";
  messages.forEach((message) => {
    conversation += "\n" + message.data().user.name + ": " + message.data().text
  });
  return conversation;
};
// const loadConversation = async (
//   queryContextResponse: any,
//   userId: any,
//   chatId: any
// ) => {
//   let messages = await Promise.all(
//     queryContextResponse.matches?.map(async (message: any) => {
//       let messageRef = await doc(
//         firestoreDB,
//         "users",
//         userId,
//         "people",
//         chatId,
//         "messages",
//         message.id
//       );
//       if (!messageRef || messageRef == undefined) return;
//       let messageSnap = await getDoc(messageRef);

//       if (!messageSnap.data().text || messageSnap.data().text == undefined) return;
      
//       let recalledMessage = `${messageSnap.data()?.user?.name}: ${messageSnap.data()?.text}`;
//       let messageDate = recalledMessage.data().createdAt();

//       return recalledMessage;
//     })
//   );

//   return messages;
// };
