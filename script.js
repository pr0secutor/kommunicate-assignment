document.addEventListener("DOMContentLoaded", () => {
    const adviceIdElement = document.getElementById("advice-id");
    const adviceTextElement = document.getElementById("advice-text");
    const diceBtn = document.getElementById("dice-btn");
  
    async function fetchAdvice() {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        const advice = data.slip;
        adviceIdElement.textContent = advice.id;
        adviceTextElement.textContent = `"${advice.advice}"`;
      } catch (error) {
        adviceTextElement.textContent = "Failed to fetch advice. Try again!";
      }
    }
  
    diceBtn.addEventListener("click", fetchAdvice);
  });
  