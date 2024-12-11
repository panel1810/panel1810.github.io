// Typing effect
const typingText = document.getElementById('typing-text');
const text = "Hello! I'm Alice, a passionate coder and anime enthusiast.";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

type();

// Skill progress animation
function animateSkill(skillId, percentage) {
    let currentPercentage = 0;
    const bar = document.getElementById(skillId + '-bar');
    const percentageLabel = document.getElementById(skillId + '-percentage');

    const interval = setInterval(() => {
        if (currentPercentage < percentage) {
            currentPercentage++;
            bar.style.width = currentPercentage + '%';
            percentageLabel.innerHTML = currentPercentage + '%';
        } else {
            clearInterval(interval);
        }
    }, 20);
}

animateSkill('python', 87);
animateSkill('javascript', 70);
animateSkill('css', 94);

// Button actions
document.get
