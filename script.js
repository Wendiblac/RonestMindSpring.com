const modal = document.getElementById("calendlyModal");
const btn = document.getElementById("consultNowBtn");
const bookBtn = document.getElementById("bookNowBtn")
const secondBookBtn = document.getElementById("bookNowBtn2");
const secondBtn = document.getElementById("consultNowBtn2");
const closeBtn = document.querySelector(".close");

btn.onclick = () => {
  modal.style.display = "block";
}

bookBtn.onclick = () => {
  modal.style.display = "block";
}

secondBookBtn.onclick = () => {
  modal.style.display = "block";
}

secondBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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






























const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const selectedDateInput = document.getElementById("selectedDate");
const confirmedDate = document.getElementById("confirmedDate");

let currentDate = new Date();
let selectedDay = null;

const renderCalendar = () => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays.innerHTML = "";

  dayNames.forEach(d => {
    const dayName = document.createElement("div");
    dayName.className = "day-name";
    dayName.textContent = d;
    calendarDays.appendChild(dayName);
  });

  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendarDays.appendChild(empty);
  }

  for (let d = 1; d <= totalDays; d++) {
    const day = document.createElement("div");
    day.className = "day";
    day.textContent = d;

    const thisDate = new Date(year, month, d);
    const dateStr = thisDate.toISOString().split('T')[0];

    day.addEventListener("click", () => {
      document.querySelectorAll(".day").forEach(el => el.classList.remove("selected"));
      day.classList.add("selected");
      selectedDay = dateStr;
      selectedDateInput.value = selectedDay;
    });

    calendarDays.appendChild(day);
  }

  monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
};

document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  if (!selectedDay) {
    alert("Please select a date on the calendar.");
    return;
  }

  confirmedDate.textContent = selectedDay;
  document.getElementById("successMessage").style.display = "block";
  this.reset();
  selectedDateInput.value = "";
  selectedDay = null;
  document.querySelectorAll(".day").forEach(el => el.classList.remove("selected"));
});

renderCalendar();