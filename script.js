// Typing Effect
const typingText = document.querySelector('.typing-text');
let index = 0;
const text = "Hi, I'm Alice!";
function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Navigation
function navigateTo(section) {
    document.querySelector('.home-display').classList.add('hidden');
    document.querySelector('.about-display').classList.add('hidden');
    document.querySelector('.skills-display').classList.add('hidden');

    if (section === 'home') {
        document.querySelector('.home-display').classList.remove('hidden');
    } else if (section === 'about') {
        document.querySelector('.about-display').classList.remove('hidden');
    } else if (section === 'skills') {
        document.querySelector('.skills-display').classList.remove('hidden');
        startSkillsAnimation();
    }
}

// Skills Animation
function startSkillsAnimation() {
    animateProgress('html-progress', 90);
    animateProgress('css-progress', 95);
    animateProgress('javascript-progress', 80);
    animateProgress('python-progress', 70);
}

function animateProgress(id, target) {
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= target) {
            clearInterval(interval);
        } else {
            progress++;
            document.getElementById(id).style.width = progress + '%';
        }
    }, 20);
}
