const button = document.getElementById("fortune-button");
const fortuneText = document.getElementById("fortune-text");
const fortuneBox = document.getElementById("fortune-box");
const wheel = document.getElementById("wheel");
const body = document.body;

button.addEventListener("click", async () => {
  body.classList.remove("fortune-revealed");
  
  button.disabled = true;
  button.textContent = "SPINNING...";

  const baseSpins = 1800 + Math.floor(Math.random() * 1080);
  const finalAngle = Math.floor(Math.random() * 360);
  const totalRotation = baseSpins + finalAngle;
  
  wheel.style.transform = `rotate(${totalRotation}deg)`;

  const placeholders = [
    "SPINNING...",
    "ROLLING...",
    "LUCK IS COMING...",
    "FORTUNE AWAITS...",
    "SHUFFLING...",
    "DEALING...",
    "JACKPOT LOADING...",
    "SPINNING THE WHEEL...",
  ];

  let counter = 0;
  const spinInterval = setInterval(() => {
    fortuneText.textContent =
      placeholders[Math.floor(Math.random() * placeholders.length)];
    counter++;

    if (counter > 38) {
      clearInterval(spinInterval);
    }
  }, 100);

  await new Promise(resolve => setTimeout(resolve, 4000));

  let randomFortune = "Your fortune awaits...";
  
  try {
    const response = await fetch('/fortune');
    const data = await response.json();
    randomFortune = data.fortune;
  } catch (error) {
    console.error("Error fetching fortune:", error);
    randomFortune = "⚠️ The wheel of fortune is temporarily out of order. Please try again!";
  }

  setTimeout(() => {
    body.classList.add("fortune-revealed");
    
    fortuneBox.classList.remove("fade-in");
    void fortuneBox.offsetWidth;
    fortuneBox.classList.add("fade-in");

    fortuneText.textContent = randomFortune;
    button.textContent = "SPIN AGAIN";
    button.disabled = false;
  }, 100);
});