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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent normal submission

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            // Hide the form
            form.style.display = "none";

            // Show thank you message
            if (thankYou) {
              thankYou.style.display = "block";
              setTimeout(() => {
                thankYou.style.opacity = "1";
              }, 100);
            }
          } else {
            alert("Something went wrong. Please try again.");
          }
        })
        .catch(() => {
          alert("Network error. Please try again.");
        });
    });
  }
});
