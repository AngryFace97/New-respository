const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const defaultValue = "Anonymous";

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (nameOutput.textContent === "") {
    nameOutput.textContent = defaultValue;
  }
});