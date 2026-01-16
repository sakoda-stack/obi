
import { GoogleGenAI } from "@google/genai";

export const fetchAIResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    あなたは「タカラレーベン 提携ポータル」の専属AIアシスタントです。
    営業担当者が顧客への提案や事務手続きをスムーズに行えるよう、プロフェッショナルかつ親しみやすい日本語でサポートしてください。

    主な対象分野：
    1. 提携金融機関の優遇金利や審査の特徴
    2. 住宅設備メーカー（LIXIL, Panasonic等）の標準仕様と優待
    3. 各種販売促進ツール（チラシ・パンフレット）の活用方法
    4. 事務マニュアルや申請フローに関するガイド

    回答のトーン：
    - 日本のビジネスマナーに則った丁寧な敬語（です・ます調）。
    - 現場ですぐに使える具体的なアドバイスを心がける。
    - 不明な点は「マニュアルの〇〇章を確認してください」と具体的に誘導する。

    制約：
    - 競合他社の具体的な内部情報は話さない。
    - タカラレーベンのブランド価値（幸せを創る、高品質な暮らし）を尊重する。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.6,
      },
    });

    return response.text || "恐れ入ります、回答を作成できませんでした。もう一度お聞きください。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "接続エラーが発生しました。しばらく経ってからお試しください。";
  }
};
