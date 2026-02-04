let max = 0;
let warningLimit = 0;

const maxCharsInput = document.getElementById("maxChars");
const warningInput = document.getElementById("warningPercent");
const applyBtn = document.getElementById("applyBtn");
const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const errorMsg = document.getElementById("errorMsg");

applyBtn.addEventListener("click", applySettings);
textArea.addEventListener("input", updateCounter);

function applySettings() {
  const maxValue = Number(maxCharsInput.value);
  const warningPercent = Number(warningInput.value);

  errorMsg.textContent = "";

  if (maxValue <= 0 || warningPercent <= 0) {
    errorMsg.textContent = "Enter positive numbers only";
    return;
  }

  if (warningPercent >= 100) {
    errorMsg.textContent = "Warning limit must be less than 100%";
    return;
  }

  max = maxValue;
  warningLimit = Math.floor((warningPercent / 100) * max);

  textArea.disabled = false;
  textArea.value = "";
  textArea.maxLength = max;

  updateCounter();
}

function updateCounter() {
  const used = textArea.value.length;
  const remaining = max - used;

  counter.textContent = "Remaining Characters: " + remaining;

  counter.classList.remove("safe", "warning", "danger");

  if (used >= max) {
    counter.classList.add("danger");
    textArea.disabled = true;
  } else if (used >= warningLimit) {
    counter.classList.add("warning");
  } else {
    counter.classList.add("safe");
  }
}