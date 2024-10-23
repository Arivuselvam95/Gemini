const api="AIzaSyDOG746Ny7aJbP14Kv3tfO75F4EMaF_tx8";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  
  const apiKey = "AIzaSyDOG746Ny7aJbP14Kv3tfO75F4EMaF_tx8";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(inputPrompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(inputPrompt);
    console.log(result.response.text());

    return result.response.text();
  }
  
  export default run;