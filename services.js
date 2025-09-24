const modal = document.getElementById("calendlyModal");
const btn = document.getElementById("consultNowBtn");
const bookBtn = document.getElementById("bookNowBtn");
const closeBtn = document.querySelector(".close");

btn.onclick = () => {
  modal.style.display = "block";
};

bookBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
