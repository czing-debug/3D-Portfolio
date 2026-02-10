const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Stack pages correctly
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

// Buttons
document.getElementById("next").onclick = nextPage;
document.getElementById("prev").onclick = prevPage;

function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage].style.transform = "rotateY(-180deg)";
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].style.transform = "rotateY(0deg)";
  }
}

/* === SWIPE SUPPORT === */
let startX = 0;
let endX = 0;

document.querySelector(".book").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".book").addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;
  if (diff > 50) nextPage(); // swipe left
  if (diff < -50) prevPage(); // swipe right
}

const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark")
    ? "☀ Light Mode"
    : "🌙 Dark Mode";
};
