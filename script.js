const introText = "Hello, I'm Alice, a passionate coder!";
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
    window.location.href = "about.html"; // Create an about.html for the story
};

document.getElementById("whatsappBtn").onclick = function() {
    window.open("https://wa.me/79789819744", "_blank");
};

document.getElementById("emailBtn").onclick = function() {
    window.location.href = "mailto:lou.nebulis.ix.aliceliese@proton.me";
};
