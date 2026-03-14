
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProfessionalCopy = async (topic: string, details: string) => {
  const ai = getAI();
  const prompt = `
    Task: Write high-quality, compassionate, and professional web copy for "Evergreen Care PA", a home care agency in Collegeville, PA.
    Topic: ${topic}
    Context: They have been serving Montgomery County since 2018. The brand identity is "Aging in Place" - helping seniors stay in the home they love.
    Specific User Input: ${details}
    
    Guidelines:
    - Use a "Humanist" tone: warm, professional, and reliable.
    - Focus on trust, safety, and dignity.
    - Avoid medical jargon; use empathetic language suitable for adult children caring for elderly parents.
    - For Dementia Care, focus on patience and routine.
    - For About Us, focus on local history and community roots.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return "An error occurred while generating content. Please try again.";
  }
};
