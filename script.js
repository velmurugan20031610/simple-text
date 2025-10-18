var textarea = document.getElementById("message");
var counter = document.getElementById("counter");
var progress = document.getElementById("progress");
var warning = document.getElementById("warning");

var maxChars = 200;

// Ensure warning is hidden initially
warning.classList.add("hidden");

textarea.addEventListener("input", () => {
  const textLength = textarea.value.length;

  // Update counter
  counter.textContent = `${textLength} / ${maxChars} characters`;

  // Update progress bar
  const percentage = Math.min((textLength / maxChars) * 100, 100);
  progress.style.width = `${percentage}%`;

  // Show warning with fade
  if (textLength > maxChars) {
    warning.classList.remove("hidden");
    warning.classList.add("fade-warning");
  } else {
    warning.classList.add("hidden");
    warning.classList.remove("fade-warning");
  }
});