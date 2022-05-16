const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (element) {
  var li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  list.appendChild(li);
});