// Random aura values for each alphabet
const auraValues = {};
"abcdefghijklmnopqrstuvwxyz".split("").forEach(ch => {
  auraValues[ch] = Math.floor(Math.random() * 5000) + 1000; // 1000+
});

function calculateAura() {
  let name = document.getElementById("nameInput").value.trim();
  let lowerName = name.toLowerCase();
  let resultDiv = document.getElementById("result");
  let levelBox = document.getElementById("levelBox");
  let complimentBox = document.getElementById("complimentBox");

  if (!name) {
    resultDiv.innerText = "⚡ Please enter a name!";
    levelBox.innerText = "";
    complimentBox.innerText = "";
    return;
  }

  // Special blocked names
  const blocked = ["nil", "amaresh"];
  if (blocked.includes(lowerName)) {
    resultDiv.innerText = "-99999";
    levelBox.innerText = "❌ Aura Corrupted";
    complimentBox.innerText = "This name holds negative cosmic energy.";
    return;
  }

  // Calculate aura
  let auraSum = 0;
  for (let char of lowerName) {
    if (auraValues[char]) {
      auraSum += auraValues[char];
    }
  }

  resultDiv.innerText = `+${auraSum}`;

  // Levels
  let level = "";
  if (auraSum < 10000) level = "Bronze Soul";
  else if (auraSum < 20000) level = "Silver Spirit";
  else if (auraSum < 30000) level = "Golden Mind";
  else if (auraSum < 40000) level = "Diamond Aura";
  else level = "Cosmic Legend";

  levelBox.innerText = `✨ Level: ${level}`;

  // Compliments (sci-fi vibes)
  let compliments = [
    "⚡ Your aura vibrates like a cosmic pulse.",
    "🌌 You carry fragments of stardust in your soul.",
    "🚀 Energy flows through you like interstellar light.",
    "💫 Your spirit bends the laws of the universe.",
    "🔮 The cosmos recognizes your presence."
  ];
  let compliment = compliments[Math.floor(Math.random() * compliments.length)];

  complimentBox.innerText = compliment;
}