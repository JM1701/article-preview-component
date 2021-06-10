const btnShare = document.querySelector(".btn-share");
const shareOptions = document.querySelector(".share-options");

btnShare.addEventListener("click", () => {
  if(btnShare.classList.contains("active")) {
    btnShare.classList.remove("active");
    shareOptions.classList.remove("show");
    shareOptions.classList.add("hide");
  } else {
    btnShare.classList.add("active");
    shareOptions.classList.remove("hide");
    shareOptions.classList.add("show");
  }
});