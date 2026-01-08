
import { GoogleGenAI } from "@google/genai";

export const getAITip = async (userGoal: string, currentWeight: string) => {
  // Inicialização conforme as diretrizes para garantir o uso da chave do ambiente
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    A pessoa tem o objetivo de: "${userGoal}" e pesa atualmente ${currentWeight}kg.
    Ela está interessada no "Desafio Emagreça em 24 Dias".
    Dê uma dica motivadora e prática de saúde (nutrição ou hábito) para o Dia 1 deste desafio.
    Seja empático, profissional e use um tom encorajador.
    Não use a palavra "e-book". Refira-se como "Guia", "Protocolo", "Método" ou "Desafio".
    Responda em Português do Brasil.
    Mantenha a resposta curta (máximo 3 parágrafos).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "O primeiro passo é sempre o mais importante! Lembre-se de manter a hidratação hoje: beba pelo menos 35ml de água por cada quilo do seu peso corporal.";
  }
};
