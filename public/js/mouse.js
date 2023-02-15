// Select the section you want to apply the effect to
const section = document.querySelector("#yourSectionId");

// Listen for the mouse wheel event
section.addEventListener("wheel", function(event) {
  // Prevent the default scrolling behavior
  event.preventDefault();

  // Get the current scroll position
  const currentScroll = window.pageYOffset;

  // Calculate the next scroll position based on the mouse wheel delta
  const nextScroll = currentScroll + event.deltaY * 0.5;

  // Use CSS transitions to smoothly scroll to the next position
  section.style.transform = `translateY(${-nextScroll}px)`;
});
