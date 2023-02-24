const filterCard = document.querySelectorAll(".cards__position .cards__item");

document
  .querySelector(".radiobutton__list")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return false;
    let filterClass = event.target.dataset["id"];
    filterCard.forEach((element) => {
      element.classList.remove("visually-hidden");
      if (!element.classList.contains(filterClass) && filterClass !== "all") {
        element.classList.add("visually-hidden");
      }
    });
  });

let portfolio = document.getElementById("filter-btns");
let btns = portfolio.getElementsByClassName("filter-btn ");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("btn-pushed");
    current[0].className = current[0].className.replace(" btn-pushed", "");
    this.className += " btn-pushed";
  });
}
