let savedValue = localStorage.getItem("myCount");

let count = savedValue ? Number(savedValue) : 0;

// selcet element
const valueDisplay = document.querySelector("#value");
const btnInc = document.querySelector(".btn-inc");
const btnDec = document.querySelector(".btn-dec");
const btnReset = document.querySelector(".btn-reset");

valueDisplay.textContent = count;

// increase
btnInc.addEventListener("click", () => {
  count++;
  saveDisplay();
});

// decrease
btnDec.addEventListener("click", () => {
  count--;
  saveDisplay();
});

// reset storage
btnReset.addEventListener("click", () => {
  count = 0;

  localStorage.removeItem("myCount");
  saveDisplay();
});

// common function
function saveDisplay() {
  valueDisplay.textContent = count;

  localStorage.setItem("myCount", count);
}
