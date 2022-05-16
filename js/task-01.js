const cl = (x) => console.log(x);
// Task 1
const numberOfCategories = Array.from(
  document.querySelectorAll("#categories > li")
);
cl("Number of categories: " + numberOfCategories.length);
const item = document.querySelector(".item");
const category = document.querySelectorAll(".item > h2");
const elements = document.querySelectorAll(".item > ul");
for (let i = 0; i < category.length; i++) {
  let title = category[i].textContent;
  let listArr = elements[i].querySelectorAll("li");
  let listLen = listArr.length;
  cl("Category: " + title + "\n" + "Elements: " + listLen);
}