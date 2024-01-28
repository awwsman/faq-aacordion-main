const question = document.querySelectorAll(".question");
// const btns = document.querySelectorAll("button");
const quesT = document.querySelectorAll(".question-title");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const parent = e.currentTarget.parentElement.parentElement;
//     parent.classList.toggle("active");
//   });
// });

quesT.forEach((quest) => {
  quest.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  });
});
