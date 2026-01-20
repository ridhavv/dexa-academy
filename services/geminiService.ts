
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getCourseRecommendation = async (childAge: string, interests: string, challenges: string) => {
  if (!ai) {
    return { 
      recommendedCourse: "Basic Money Skills", 
      reasoning: "Please configure your GEMINI_API_KEY to get personalized recommendations.",
      suggestedNextSteps: "Contact us for more information about our courses."
    };
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a course from Dexa Academy for a child who is ${childAge} years old. 
      Their interests are: ${interests}. 
      They struggle with: ${challenges}.
      Available Courses: Basic Money Skills (Financial Literacy), AI and Python Course (Technology), Communication Excellence (Confidence & Speaking), Logical Aptitude (Problem Solving).
      Provide a personalized message for the parent explaining why this is a good fit.`,
      config: {
        systemInstruction: "You are an expert educational counselor for Dexa Academy. You help parents choose the right online skill course for their children aged 6-15. Keep your tone encouraging, professional, and culturally sensitive (especially to NRI/International families).",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedCourse: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            suggestedNextSteps: { type: Type.STRING }
          },
          required: ["recommendedCourse", "reasoning", "suggestedNextSteps"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};

export const chatWithDexaBot = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  if (!ai) {
    return "I'm having a little trouble connecting right now. Please feel free to fill out our enrollment form and a human counselor will reach out shortly! You can also contact us via WhatsApp at +91 79769 59913.";
  }
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are Dexa, the friendly mascot and assistant for Dexa Academy. 
        Dexa Academy teaches Basic Money Skills, AI & Python, Communication Excellence, and Logical Aptitude to kids (8-15) globally (USA, UK, Singapore, Middle East). 
        Key USP: Future-ready skills including financial literacy, coding, communication, and critical thinking.
        Answer parent queries concisely. Always encourage them to fill out the enrollment form for a free trial.`,
      }
    });
    
    // Note: Re-constructing history for simulation since the SDK chat keeps its own state if used correctly
    // but for this implementation we'll keep it simple
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having a little trouble connecting. Please feel free to fill out our contact form and a human counselor will reach out shortly!";
  }
};
