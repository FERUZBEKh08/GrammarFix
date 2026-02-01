// =============================================================
// GrammarFix Backend - Express + OpenAI
// =============================================================
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

// TODO: Add rate limiting for production (e.g., express-rate-limit).
// This demo includes a notice but does not enforce rate limits yet.

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.length === 0) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
}));
app.use(express.json({ limit: '100kb' }));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = [
  'You are a professional English grammar teacher and IELTS writing coach.',
  'Your job is to correct grammar, improve clarity, and keep the original meaning.',
  'Write in a friendly, encouraging tone.',
  '',
  'Return output in JSON with exactly two keys:',
  '1. correctedText: the corrected text as a string',
  '2. explanations: an array of short bullet-point explanations in simple English',
  '',
  'Rules:',
  '- Do not add extra information or commentary outside the JSON.',
  '- Explanations must be concise and easy for IELTS learners.',
  '- If the text is already correct, return the original text and an explanation like: "No major issues found."',
].join('\n');

const validateInput = (text) => {
  if (!text || typeof text !== 'string') {
    return 'Text is required.';
  }
  if (text.trim().length === 0) {
    return 'Please provide non-empty text.';
  }
  if (text.length > 5000) {
    return 'Text exceeds the 5000 character limit.';
  }
  return null;
};

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'GrammarFix API',
    note: 'Use POST /check with { text } to receive corrections.',
  });
});

app.post('/check', async (req, res) => {
  const { text } = req.body;
  const error = validateInput(text);

  if (error) {
    return res.status(400).json({ message: error });
  }

  try {
    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: text },
      ],
      temperature: 0.2,
    });

    const rawContent = response.choices?.[0]?.message?.content || '';
    let parsed = null;

    try {
      parsed = JSON.parse(rawContent);
    } catch (parseError) {
      parsed = {
        correctedText: rawContent.trim(),
        explanations: ['The AI response could not be parsed as JSON.'],
      };
    }

    return res.json({
      correctedText: parsed.correctedText || '',
      explanations: Array.isArray(parsed.explanations) ? parsed.explanations : ['No explanation provided.'],
    });
  } catch (apiError) {
    console.error('OpenAI API error:', apiError);
    return res.status(500).json({ message: 'Failed to process text. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`GrammarFix API running on http://localhost:${PORT}`);
});
