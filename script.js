document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const name = "Alice";
    let index = 0;

    function typeEffect() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    typeEffect();
});

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