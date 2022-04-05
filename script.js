const cardContent = document.querySelector(".rating-card");
const ratingContent = document.querySelector(".rating-state");
const resultCard = document.querySelector(".result-card");
const submitBtn = document.querySelector(".submit-btn");
const ratingNum = document.querySelectorAll(".rating-number");
const selection = document.querySelector(".selection");
let score = 0;

// to clear previous choices cuz you only make one
const clearSelection = () => {
  ratingNum.forEach((rating) => {
    rating.classList.remove("selected");
  });
};
// choice of rating
ratingContent.addEventListener("click", (e) => {
  clearSelection();
  if ((e.target.classList = "rating-number")) {
    e.target.classList.add("selected");
    score = e.target.innerHTML;
    submitBtn.style.background = "hsl(0, 0%, 100%)";
    submitBtn.style.color = "hsl(25, 97%, 53%)";
    selection.innerHTML = score;
  }
});
// result visibility
const showResult = () => {
  cardContent.classList.add("card-visible");
  resultCard.classList.remove("card-visible");
};

submitBtn.addEventListener("click", showResult);
