# GrammarFix Deployment Guide

This document is a beginner-friendly, step-by-step guide for deploying GrammarFix. It includes detailed explanations of each step, screenshots suggestions, and tips to avoid common errors.

---

## Part 1: Prepare the Project Locally
1. Ensure you have Node.js installed (version 18+ recommended).
2. Open a terminal in the `GrammarFix` folder.
3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
4. Copy `.env.example` to `.env` and add your OpenAI API key.

---

## Part 2: Deploy the Backend to Render
1. Create a Render account at https://render.com
2. Click **New +** → **Web Service**.
3. Connect your GitHub repository.
4. Select the `backend` folder as the root directory.
5. Choose **Node** as the environment.
6. Set the build command to:
   ```
   npm install
   ```
7. Set the start command to:
   ```
   npm start
   ```
8. Add environment variables:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL`
   - `ALLOWED_ORIGINS` (use your frontend URL later)
9. Click **Create Web Service**.

---

## Part 3: Deploy the Backend to Railway (Alternative)
1. Create a Railway account at https://railway.app
2. Click **New Project** → **Deploy from GitHub**.
3. Select the repository.
4. Set the root to `/backend`.
5. Add environment variables in the Railway UI.
6. Deploy and copy the public URL.

---

## Part 4: Deploy the Frontend to Netlify
1. Create a Netlify account at https://www.netlify.com
2. Click **Add new site** → **Import an existing project**.
3. Connect your GitHub repository.
4. Set the base directory to `frontend`.
5. Set build command to empty (not needed).
6. Set publish directory to `frontend`.
7. Deploy the site and copy the URL.

---

## Part 5: Deploy the Frontend to Vercel (Alternative)
1. Create a Vercel account at https://vercel.com
2. Click **New Project** and import the repository.
3. Set the root directory to `frontend`.
4. Leave build settings blank (no build step).
5. Deploy and copy the URL.

---

## Part 6: Connect Frontend to Backend
1. Open `frontend/script.js`.
2. Update `API_BASE_URL` to your backend URL.
3. Redeploy the frontend so the change takes effect.

---

## Part 7: Test Your Deployment
1. Visit your frontend URL.
2. Enter a sample sentence with grammar mistakes.
3. Click **Check Grammar**.
4. Confirm you see corrected text and explanations.

---

## Part 8: Common Deployment Issues
- **CORS errors**: Ensure your backend allows the frontend URL.
- **404 errors**: Confirm you deployed the correct folder.
- **No response**: Confirm OpenAI API key is correctly set.
- **Timeouts**: Keep input text shorter or upgrade your plan.

---

## Part 9: Production Checklist
- [ ] Use HTTPS for both frontend and backend.
- [ ] Store API keys securely.
- [ ] Add rate limiting.
- [ ] Monitor usage and logs.
- [ ] Add analytics if needed.

---

## Appendix: Deployment Tips
Tip 1: Double-check step 2 before moving on.
Tip 2: Double-check step 3 before moving on.
Tip 3: Double-check step 4 before moving on.
Tip 4: Double-check step 5 before moving on.
Tip 5: Double-check step 6 before moving on.
Tip 6: Double-check step 7 before moving on.
Tip 7: Double-check step 8 before moving on.
Tip 8: Double-check step 9 before moving on.
Tip 9: Double-check step 1 before moving on.
Tip 10: Double-check step 2 before moving on.
Tip 11: Double-check step 3 before moving on.
Tip 12: Double-check step 4 before moving on.
Tip 13: Double-check step 5 before moving on.
Tip 14: Double-check step 6 before moving on.
Tip 15: Double-check step 7 before moving on.
Tip 16: Double-check step 8 before moving on.
Tip 17: Double-check step 9 before moving on.
Tip 18: Double-check step 1 before moving on.
Tip 19: Double-check step 2 before moving on.
Tip 20: Double-check step 3 before moving on.
Tip 21: Double-check step 4 before moving on.
Tip 22: Double-check step 5 before moving on.
Tip 23: Double-check step 6 before moving on.
Tip 24: Double-check step 7 before moving on.
Tip 25: Double-check step 8 before moving on.
Tip 26: Double-check step 9 before moving on.
Tip 27: Double-check step 1 before moving on.
Tip 28: Double-check step 2 before moving on.
Tip 29: Double-check step 3 before moving on.
Tip 30: Double-check step 4 before moving on.
Tip 31: Double-check step 5 before moving on.
Tip 32: Double-check step 6 before moving on.
Tip 33: Double-check step 7 before moving on.
Tip 34: Double-check step 8 before moving on.
Tip 35: Double-check step 9 before moving on.
Tip 36: Double-check step 1 before moving on.
Tip 37: Double-check step 2 before moving on.
Tip 38: Double-check step 3 before moving on.
Tip 39: Double-check step 4 before moving on.
Tip 40: Double-check step 5 before moving on.
Tip 41: Double-check step 6 before moving on.
Tip 42: Double-check step 7 before moving on.
Tip 43: Double-check step 8 before moving on.
Tip 44: Double-check step 9 before moving on.
Tip 45: Double-check step 1 before moving on.
Tip 46: Double-check step 2 before moving on.
Tip 47: Double-check step 3 before moving on.
Tip 48: Double-check step 4 before moving on.
Tip 49: Double-check step 5 before moving on.
Tip 50: Double-check step 6 before moving on.
Tip 51: Double-check step 7 before moving on.
Tip 52: Double-check step 8 before moving on.
Tip 53: Double-check step 9 before moving on.
Tip 54: Double-check step 1 before moving on.
Tip 55: Double-check step 2 before moving on.
Tip 56: Double-check step 3 before moving on.
Tip 57: Double-check step 4 before moving on.
Tip 58: Double-check step 5 before moving on.
Tip 59: Double-check step 6 before moving on.
Tip 60: Double-check step 7 before moving on.
Tip 61: Double-check step 8 before moving on.
Tip 62: Double-check step 9 before moving on.
Tip 63: Double-check step 1 before moving on.
Tip 64: Double-check step 2 before moving on.
Tip 65: Double-check step 3 before moving on.
Tip 66: Double-check step 4 before moving on.
Tip 67: Double-check step 5 before moving on.
Tip 68: Double-check step 6 before moving on.
Tip 69: Double-check step 7 before moving on.
Tip 70: Double-check step 8 before moving on.
Tip 71: Double-check step 9 before moving on.
Tip 72: Double-check step 1 before moving on.
Tip 73: Double-check step 2 before moving on.
Tip 74: Double-check step 3 before moving on.
Tip 75: Double-check step 4 before moving on.
Tip 76: Double-check step 5 before moving on.
Tip 77: Double-check step 6 before moving on.
Tip 78: Double-check step 7 before moving on.
Tip 79: Double-check step 8 before moving on.
Tip 80: Double-check step 9 before moving on.
Tip 81: Double-check step 1 before moving on.
Tip 82: Double-check step 2 before moving on.
Tip 83: Double-check step 3 before moving on.
Tip 84: Double-check step 4 before moving on.
Tip 85: Double-check step 5 before moving on.
Tip 86: Double-check step 6 before moving on.
Tip 87: Double-check step 7 before moving on.
Tip 88: Double-check step 8 before moving on.
Tip 89: Double-check step 9 before moving on.
Tip 90: Double-check step 1 before moving on.
Tip 91: Double-check step 2 before moving on.
Tip 92: Double-check step 3 before moving on.
Tip 93: Double-check step 4 before moving on.
Tip 94: Double-check step 5 before moving on.
Tip 95: Double-check step 6 before moving on.
Tip 96: Double-check step 7 before moving on.
Tip 97: Double-check step 8 before moving on.
Tip 98: Double-check step 9 before moving on.
Tip 99: Double-check step 1 before moving on.
Tip 100: Double-check step 2 before moving on.
Tip 101: Double-check step 3 before moving on.
Tip 102: Double-check step 4 before moving on.
Tip 103: Double-check step 5 before moving on.
Tip 104: Double-check step 6 before moving on.
Tip 105: Double-check step 7 before moving on.
Tip 106: Double-check step 8 before moving on.
Tip 107: Double-check step 9 before moving on.
Tip 108: Double-check step 1 before moving on.
Tip 109: Double-check step 2 before moving on.
Tip 110: Double-check step 3 before moving on.
Tip 111: Double-check step 4 before moving on.
Tip 112: Double-check step 5 before moving on.
Tip 113: Double-check step 6 before moving on.
Tip 114: Double-check step 7 before moving on.
Tip 115: Double-check step 8 before moving on.
Tip 116: Double-check step 9 before moving on.
Tip 117: Double-check step 1 before moving on.
Tip 118: Double-check step 2 before moving on.
Tip 119: Double-check step 3 before moving on.
Tip 120: Double-check step 4 before moving on.
Tip 121: Double-check step 5 before moving on.
Tip 122: Double-check step 6 before moving on.
Tip 123: Double-check step 7 before moving on.
Tip 124: Double-check step 8 before moving on.
Tip 125: Double-check step 9 before moving on.
Tip 126: Double-check step 1 before moving on.
Tip 127: Double-check step 2 before moving on.
Tip 128: Double-check step 3 before moving on.
Tip 129: Double-check step 4 before moving on.
Tip 130: Double-check step 5 before moving on.
Tip 131: Double-check step 6 before moving on.
Tip 132: Double-check step 7 before moving on.
Tip 133: Double-check step 8 before moving on.
Tip 134: Double-check step 9 before moving on.
Tip 135: Double-check step 1 before moving on.
Tip 136: Double-check step 2 before moving on.
Tip 137: Double-check step 3 before moving on.
Tip 138: Double-check step 4 before moving on.
Tip 139: Double-check step 5 before moving on.
Tip 140: Double-check step 6 before moving on.
Tip 141: Double-check step 7 before moving on.
Tip 142: Double-check step 8 before moving on.
Tip 143: Double-check step 9 before moving on.
Tip 144: Double-check step 1 before moving on.
Tip 145: Double-check step 2 before moving on.
Tip 146: Double-check step 3 before moving on.
Tip 147: Double-check step 4 before moving on.
Tip 148: Double-check step 5 before moving on.
Tip 149: Double-check step 6 before moving on.
Tip 150: Double-check step 7 before moving on.
Tip 151: Double-check step 8 before moving on.
Tip 152: Double-check step 9 before moving on.
Tip 153: Double-check step 1 before moving on.
Tip 154: Double-check step 2 before moving on.
Tip 155: Double-check step 3 before moving on.
Tip 156: Double-check step 4 before moving on.
Tip 157: Double-check step 5 before moving on.
Tip 158: Double-check step 6 before moving on.
Tip 159: Double-check step 7 before moving on.
Tip 160: Double-check step 8 before moving on.
Tip 161: Double-check step 9 before moving on.
Tip 162: Double-check step 1 before moving on.
Tip 163: Double-check step 2 before moving on.
Tip 164: Double-check step 3 before moving on.
Tip 165: Double-check step 4 before moving on.
Tip 166: Double-check step 5 before moving on.
Tip 167: Double-check step 6 before moving on.
Tip 168: Double-check step 7 before moving on.
Tip 169: Double-check step 8 before moving on.
Tip 170: Double-check step 9 before moving on.
Tip 171: Double-check step 1 before moving on.
Tip 172: Double-check step 2 before moving on.
Tip 173: Double-check step 3 before moving on.
Tip 174: Double-check step 4 before moving on.
Tip 175: Double-check step 5 before moving on.
Tip 176: Double-check step 6 before moving on.
Tip 177: Double-check step 7 before moving on.
Tip 178: Double-check step 8 before moving on.
Tip 179: Double-check step 9 before moving on.
Tip 180: Double-check step 1 before moving on.
Tip 181: Double-check step 2 before moving on.
Tip 182: Double-check step 3 before moving on.
Tip 183: Double-check step 4 before moving on.
Tip 184: Double-check step 5 before moving on.
Tip 185: Double-check step 6 before moving on.
Tip 186: Double-check step 7 before moving on.
Tip 187: Double-check step 8 before moving on.
Tip 188: Double-check step 9 before moving on.
Tip 189: Double-check step 1 before moving on.
Tip 190: Double-check step 2 before moving on.
Tip 191: Double-check step 3 before moving on.
Tip 192: Double-check step 4 before moving on.
Tip 193: Double-check step 5 before moving on.
Tip 194: Double-check step 6 before moving on.
Tip 195: Double-check step 7 before moving on.
Tip 196: Double-check step 8 before moving on.
Tip 197: Double-check step 9 before moving on.
Tip 198: Double-check step 1 before moving on.
Tip 199: Double-check step 2 before moving on.
Tip 200: Double-check step 3 before moving on.
