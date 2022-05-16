let counterValue = 0;

const btnAdd = document.querySelector('[data-action="increment"]');
const btnSubstract = document.querySelector('[data-action="decrement"]');
const input = document.querySelector("#value");

const increment = () => {
  counterValue++;
  input.innerHTML = counterValue;
};

const decrement = () => {
  counterValue--;
  input.innerHTML = counterValue;
};

btnAdd.addEventListener("click", increment);
btnSubstract.addEventListener("click", decrement);