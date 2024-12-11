const typingText = "Hello! I'm Alice, a passionate coder with skills in Python, JavaScript, and CSS.";
let index = 0;

function type() {
    if (index < typingText.length) {
        document.getElementById("typing-text").innerHTML += typingText.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

function animateProgressBar(skill, percentage) {
    let progress = 0;
    const progressBar = document.getElementById(skill + '-progress');
    const percentageLabel = document.getElementById(skill + '-percentage');

    const interval = setInterval(() => {
        if (progress >= percentage) {
            clearInterval(interval);
        } else {
            progress++;
            progressBar.style.width = progress + '%';
            percentageLabel.innerHTML = progress + '%';
