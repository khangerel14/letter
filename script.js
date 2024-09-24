const openButton = document.getElementById("openEnvelope");
const flap = document.querySelector(".envelope-flap");
const letter = document.querySelector(".letter");

openButton.addEventListener("click", () => {
  // Open the envelope flap
  flap.style.transform = "rotateX(-180deg)";

  // Delay the letter animation until the flap has fully opened
  setTimeout(() => {
    letter.style.transform = "translate(-50%, -130%) rotateX(0deg)";
  }, 800);
});
