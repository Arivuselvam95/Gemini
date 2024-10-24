const api="AIzaSyDOG746Ny7aJbP14Kv3tfO75F4EMaF_tx8";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  
  const apiKey = "AIzaSyDOG746Ny7aJbP14Kv3tfO75F4EMaF_tx8";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-002",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 0.95,
    topK: 10,
    maxOutputTokens: 8192,
    // responseMimeType: "text/plain",
  };
  
  async function run(inputPrompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "please provide the main contents with emojis. Don't use emojis for personal information "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Please provide me with the content you'd like me to add emojis to!  I need the text first. 😊\n"},
          ],
        },
        
      ],
    });
  
    const result = await chatSession.sendMessage(inputPrompt);
    console.log(result.response.text());

    return result.response.text();
  }
  
  export default run;