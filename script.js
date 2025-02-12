let container = document.getElementById("scrollContainer");
let scrollAmount = 1; // Speed of scrolling
let direction = 1; // 1 = down, -1 = up
let isHovered = false; // Check if user hovers
let interval;

function autoScroll() {
  if (!isHovered) {
    container.scrollTop += scrollAmount * direction; // Move scroll

    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      direction = -1; // Start scrolling up
      setTimeout(() => {}, 2000); // Pause 2 seconds
    } else if (container.scrollTop <= 0) {
      direction = 1; // Start scrolling down
      setTimeout(() => {}, 2000); // Pause 2 seconds
    }
  }
}

function startAutoScroll() {
  interval = setInterval(autoScroll, 30); // Adjust speed (lower = faster)
}

function stopAutoScroll() {
  clearInterval(interval);
}

// Event Listeners
container.addEventListener("mouseenter", () => {
  isHovered = true; // Stop auto-scroll
  stopAutoScroll();
});

container.addEventListener("mouseleave", () => {
  isHovered = false; // Resume auto-scroll
  startAutoScroll();
});

startAutoScroll();