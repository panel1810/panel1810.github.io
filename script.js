document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const text = "Hi, I am Alice!";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            nameElement.textContent += text[index];
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    typeEffect();
});

let currentIndex = 0;

function moveLeft() {
    const images = document.querySelectorAll(".portfolio-image");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updatePortfolio(images);
}

function moveRight() {
    const images = document.querySelectorAll(".portfolio-image");
    currentIndex = (currentIndex + 1) % images.length;
    updatePortfolio(images);
}

function updatePortfolio(images) {
    images.forEach((image, index) => {
        const offset = (index - currentIndex) * 100;
        image.style.transform = `translateX(${offset}%)`;
    });
}

function navigateTo(section) {
    document.querySelectorAll("main").forEach(main => main.classList.add("hidden"));
    document.getElementById(section).classList.remove("hidden");

    if (section === "skills") {
        document.querySelectorAll(".progress-bar").forEach(bar => {
            const percent = bar.getAttribute("data-percent");
            bar.style.width = percent + "%";
        });
    }
}

function openWhatsApp() {
    window.open("https://wa.me/79789819744", "_blank");
}

function openEmail() {
    window.open("mailto:lou.nebulis.ix.aliceliese@proton.me", "_blank");
}