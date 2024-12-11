const introText = "Hello, I'm Alice Lou Nebulis IX. Welcome to my anime-inspired portfolio.";
let index = 0;

function typeWriter() {
  if (index < introText.length) {
    document.getElementById("typing-intro").textContent += introText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;
