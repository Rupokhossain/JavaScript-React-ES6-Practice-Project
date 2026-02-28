const valueDisplay = document.querySelector("#value");
const buttons = document.querySelectorAll("button");

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // classList change
    if (count > 0) {
      valueDisplay.classList.add("green");
      valueDisplay.classList.remove("red");
    } else if (count < 0) {
      valueDisplay.classList.add("red");
      valueDisplay.classList.remove("green");
    } else {
      valueDisplay.classList.remove("green", "red");
    }

    // update count
    valueDisplay.textContent = count;
    


  });
});
