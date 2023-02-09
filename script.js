const stars = document.querySelectorAll(".star");
const current_rating = document.querySelector(".current-rating");
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const div_star  = document.querySelector('.stars_5');


stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    let current_star = index + 1;
    current_rating.innerText = `${current_star} of 5`;

    stars.forEach((star, i) => {
      if (current_star >= i + 1) {
        star.innerHTML = "&#9733;";
      } else {
        star.innerHTML = "&#9734;";
      }
    });
    
   });
});



function s() {
  div_star.style.display = "none";
 post.style.display = "block";
  console.log("hello3");
}


