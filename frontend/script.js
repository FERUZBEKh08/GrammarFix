// =============================================================
// GrammarFix Frontend Logic
// =============================================================

const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const checkBtn = document.getElementById('checkBtn');
const clearBtn = document.getElementById('clearBtn');
const loading = document.getElementById('loading');
const errorBox = document.getElementById('errorBox');
const correctedText = document.getElementById('correctedText');
const explanationList = document.getElementById('explanationList');

// Configure backend URL here. In production, update this to your deployed API URL.
const API_BASE_URL = window.__GRAMMARFIX_API__ || 'http://localhost:5000';

const MAX_CHARS = 5000;

const updateCharCount = () => {
  const currentLength = inputText.value.length;
  charCount.textContent = `${currentLength} / ${MAX_CHARS}`;
};

const setLoading = (isLoading) => {
  if (isLoading) {
    loading.classList.remove('hidden');
    checkBtn.disabled = true;
  } else {
    loading.classList.add('hidden');
    checkBtn.disabled = false;
  }
};

const setError = (message) => {
  if (message) {
    errorBox.textContent = message;
    errorBox.classList.remove('hidden');
  } else {
    errorBox.classList.add('hidden');
  }
};

const renderExplanation = (items) => {
  explanationList.innerHTML = '';
  if (!items || items.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No explanation available.';
    explanationList.appendChild(li);
    return;
  }
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    explanationList.appendChild(li);
  });
};

const resetResults = () => {
  correctedText.textContent = 'No corrections yet.';
  renderExplanation(['Explanation will appear here after you run a check.']);
};

const handleCheck = async () => {
  const text = inputText.value.trim();
  setError('');
  if (!text) {
    setError('Please enter some text before checking.');
    return;
  }

  if (text.length > MAX_CHARS) {
    setError(`Please keep your text under ${MAX_CHARS} characters.`);
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(`${API_BASE_URL}/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.message || 'Something went wrong.');
    }

    const data = await response.json();
    correctedText.textContent = data.correctedText || 'No corrected text received.';
    renderExplanation(data.explanations || []);
  } catch (error) {
    setError(error.message || 'Unable to connect to the server.');
  } finally {
    setLoading(false);
  }
};

const handleClear = () => {
  inputText.value = '';
  updateCharCount();
  setError('');
  resetResults();
};

inputText.addEventListener('input', updateCharCount);
checkBtn.addEventListener('click', handleCheck);
clearBtn.addEventListener('click', handleClear);

// Initialize default state
updateCharCount();
resetResults();
