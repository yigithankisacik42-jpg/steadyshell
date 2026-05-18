const fs = require('fs');
const path = require('path');

// Load environment variables from .env
const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
let openrouterKey = '';

envContent.split('\n').forEach(line => {
  if (line.startsWith('OPENROUTER_API_KEY=')) {
    openrouterKey = line.split('=')[1].trim();
  }
});

if (!openrouterKey) {
  console.error('OPENROUTER_API_KEY not found in .env');
  process.exit(1);
}

console.log('Testing OpenRouter AI key...');

async function testAI() {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openrouterKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://steadyshell.com",
        "X-Title": "Steady Shell Test",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [
          { role: "system", content: "You are a helpful tutor. Respond with only one word: 'READY'." }
        ],
        temperature: 0.5,
        max_tokens: 10
      })
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Success! AI response:', data.choices[0].message.content);
    } else {
      console.error('API Error:', data);
    }
  } catch (error) {
    console.error('Fetch Exception:', error);
  }
}

testAI();
