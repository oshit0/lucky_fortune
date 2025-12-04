const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");
const result = document.getElementById("result");

btn.addEventListener("click", spinWheel);

async function spinWheel() {
    const randomSpins = Math.floor(Math.random() * 360) + 1440;
    wheel.style.transform = `rotate(${randomSpins}deg)`;

    await new Promise(resolve => setTimeout(resolve, 4000));

    try {
        const response = await fetch('/fortune');
        const data = await response.json();
        result.innerText = data.fortune;
    } catch (error) {
        result.innerText = "Error connecting to server.";
    }
}
