let timeLeft = 10;
const countdown = document.getElementById("countdown");
const downloadLink = document.getElementById("downloadLink");

// Base64 encoded version of "yourfile.zip"
const encryptedLink = "eW91cmZpbGUuemlw";

function decodeBase64(str) {
  return atob(str);
}

const timer = setInterval(() => {
  timeLeft--;
  countdown.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdown.style.display = "none";
    const realLink = decodeBase64(encryptedLink);

    // Try auto download first
    try {
      window.location.href = realLink;
    } catch (e) {
      console.warn("Auto download failed, showing button instead.");
      downloadLink.style.display = "inline-block";
      downloadLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = realLink;
      });
    }

    // Always show the button as a fallback
    downloadLink.style.display = "inline-block";
    downloadLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = realLink;
    });
  }
}, 1000);
