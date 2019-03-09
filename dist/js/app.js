const items = document.querySelectorAll("#timeline li");

// Determine if item is visible
const isVisible = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight ||
        document.documentElement.clientWidth)
  );
};

// Loop through items
const run = () =>
  items.forEach(item => {
    if (isVisible(item)) {
      item.classList.add("show");
    }
  });

// Window Event Listeners
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
