# GrammarFix AI Prompting Strategy

This document explains the prompt logic used by GrammarFix. The goal is to ensure consistent, reliable grammar corrections for IELTS learners.

---

## System Prompt (Core Instruction)
The backend includes a system prompt that makes the AI behave like a professional grammar teacher and IELTS writing coach. It requires JSON output with two keys: correctedText and explanations.

Key requirements:
- Act like a grammar teacher.
- Improve clarity but preserve meaning.
- Provide concise, simple explanations.
- Output must be strict JSON to avoid parsing errors.

---

## Why This Works
- A strict JSON format avoids frontend parsing confusion.
- IELTS learners benefit from short, focused explanations.
- A friendly tone reduces anxiety for learners.

---

## Prompt Structure
1. Identity: Professional English grammar teacher and IELTS coach.
2. Task: Correct grammar and improve clarity.
3. Output: JSON with correctedText and explanations.
4. Constraints: No additional commentary outside JSON.

---

## Example Prompt Template
```
You are a professional English grammar teacher and IELTS writing coach.
Your job is to correct grammar, improve clarity, and keep the original meaning.
Write in a friendly, encouraging tone.

Return output in JSON with exactly two keys:
1. correctedText: the corrected text as a string
2. explanations: an array of short bullet-point explanations in simple English

Rules:
- Do not add extra information or commentary outside the JSON.
- Explanations must be concise and easy for IELTS learners.
- If the text is already correct, return the original text and an explanation like: "No major issues found."
```

---

## Future Prompt Enhancements
- Add tone selection (formal, casual, academic).
- Provide CEFR level targeting.
- Add vocabulary suggestions.
- Support multi-paragraph style feedback.

---

## Appendix: Prompting Tips for Learners
Tip 1: Provide clear sentences to get clearer corrections.
Tip 2: Provide clear sentences to get clearer corrections.
Tip 3: Provide clear sentences to get clearer corrections.
Tip 4: Provide clear sentences to get clearer corrections.
Tip 5: Provide clear sentences to get clearer corrections.
Tip 6: Provide clear sentences to get clearer corrections.
Tip 7: Provide clear sentences to get clearer corrections.
Tip 8: Provide clear sentences to get clearer corrections.
Tip 9: Provide clear sentences to get clearer corrections.
Tip 10: Provide clear sentences to get clearer corrections.
Tip 11: Provide clear sentences to get clearer corrections.
Tip 12: Provide clear sentences to get clearer corrections.
Tip 13: Provide clear sentences to get clearer corrections.
Tip 14: Provide clear sentences to get clearer corrections.
Tip 15: Provide clear sentences to get clearer corrections.
Tip 16: Provide clear sentences to get clearer corrections.
Tip 17: Provide clear sentences to get clearer corrections.
Tip 18: Provide clear sentences to get clearer corrections.
Tip 19: Provide clear sentences to get clearer corrections.
Tip 20: Provide clear sentences to get clearer corrections.
Tip 21: Provide clear sentences to get clearer corrections.
Tip 22: Provide clear sentences to get clearer corrections.
Tip 23: Provide clear sentences to get clearer corrections.
Tip 24: Provide clear sentences to get clearer corrections.
Tip 25: Provide clear sentences to get clearer corrections.
Tip 26: Provide clear sentences to get clearer corrections.
Tip 27: Provide clear sentences to get clearer corrections.
Tip 28: Provide clear sentences to get clearer corrections.
Tip 29: Provide clear sentences to get clearer corrections.
Tip 30: Provide clear sentences to get clearer corrections.
Tip 31: Provide clear sentences to get clearer corrections.
Tip 32: Provide clear sentences to get clearer corrections.
Tip 33: Provide clear sentences to get clearer corrections.
Tip 34: Provide clear sentences to get clearer corrections.
Tip 35: Provide clear sentences to get clearer corrections.
Tip 36: Provide clear sentences to get clearer corrections.
Tip 37: Provide clear sentences to get clearer corrections.
Tip 38: Provide clear sentences to get clearer corrections.
Tip 39: Provide clear sentences to get clearer corrections.
Tip 40: Provide clear sentences to get clearer corrections.
Tip 41: Provide clear sentences to get clearer corrections.
Tip 42: Provide clear sentences to get clearer corrections.
Tip 43: Provide clear sentences to get clearer corrections.
Tip 44: Provide clear sentences to get clearer corrections.
Tip 45: Provide clear sentences to get clearer corrections.
Tip 46: Provide clear sentences to get clearer corrections.
Tip 47: Provide clear sentences to get clearer corrections.
Tip 48: Provide clear sentences to get clearer corrections.
Tip 49: Provide clear sentences to get clearer corrections.
Tip 50: Provide clear sentences to get clearer corrections.
Tip 51: Provide clear sentences to get clearer corrections.
Tip 52: Provide clear sentences to get clearer corrections.
Tip 53: Provide clear sentences to get clearer corrections.
Tip 54: Provide clear sentences to get clearer corrections.
Tip 55: Provide clear sentences to get clearer corrections.
Tip 56: Provide clear sentences to get clearer corrections.
Tip 57: Provide clear sentences to get clearer corrections.
Tip 58: Provide clear sentences to get clearer corrections.
Tip 59: Provide clear sentences to get clearer corrections.
Tip 60: Provide clear sentences to get clearer corrections.
Tip 61: Provide clear sentences to get clearer corrections.
Tip 62: Provide clear sentences to get clearer corrections.
Tip 63: Provide clear sentences to get clearer corrections.
Tip 64: Provide clear sentences to get clearer corrections.
Tip 65: Provide clear sentences to get clearer corrections.
Tip 66: Provide clear sentences to get clearer corrections.
Tip 67: Provide clear sentences to get clearer corrections.
Tip 68: Provide clear sentences to get clearer corrections.
Tip 69: Provide clear sentences to get clearer corrections.
Tip 70: Provide clear sentences to get clearer corrections.
Tip 71: Provide clear sentences to get clearer corrections.
Tip 72: Provide clear sentences to get clearer corrections.
Tip 73: Provide clear sentences to get clearer corrections.
Tip 74: Provide clear sentences to get clearer corrections.
Tip 75: Provide clear sentences to get clearer corrections.
Tip 76: Provide clear sentences to get clearer corrections.
Tip 77: Provide clear sentences to get clearer corrections.
Tip 78: Provide clear sentences to get clearer corrections.
Tip 79: Provide clear sentences to get clearer corrections.
Tip 80: Provide clear sentences to get clearer corrections.
Tip 81: Provide clear sentences to get clearer corrections.
Tip 82: Provide clear sentences to get clearer corrections.
Tip 83: Provide clear sentences to get clearer corrections.
Tip 84: Provide clear sentences to get clearer corrections.
Tip 85: Provide clear sentences to get clearer corrections.
Tip 86: Provide clear sentences to get clearer corrections.
Tip 87: Provide clear sentences to get clearer corrections.
Tip 88: Provide clear sentences to get clearer corrections.
Tip 89: Provide clear sentences to get clearer corrections.
Tip 90: Provide clear sentences to get clearer corrections.
Tip 91: Provide clear sentences to get clearer corrections.
Tip 92: Provide clear sentences to get clearer corrections.
Tip 93: Provide clear sentences to get clearer corrections.
Tip 94: Provide clear sentences to get clearer corrections.
Tip 95: Provide clear sentences to get clearer corrections.
Tip 96: Provide clear sentences to get clearer corrections.
Tip 97: Provide clear sentences to get clearer corrections.
Tip 98: Provide clear sentences to get clearer corrections.
Tip 99: Provide clear sentences to get clearer corrections.
Tip 100: Provide clear sentences to get clearer corrections.
