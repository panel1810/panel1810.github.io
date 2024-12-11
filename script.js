const introText = "Hello! I'm Alice, a passionate coder and anime enthusiast.";
let index = 0;

function typeIntro() {
    if (index < introText.length) {
        document.getElementById("intro").innerHTML += introText.charAt(index);
        index++;
        setTimeout(typeIntro, 100);
    }
}

typeIntro();

document.getElementById("aboutBtn").onclick = function() {
    alert("About Alice: I love coding and anime! My journey in programming started when I was young, and I enjoy creating projects that combine my interests.");
};

document.getElementById("whatsappBtn").onclick = function() {
    window.open("https://wa.me/79789819744", "_blank");
};

document.getElementById("emailBtn").onclick = function() {
    window.open("mailto:lou.nebulis.ix.aliceliese@proton.me", "_blank");
};
