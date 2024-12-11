const introductionText = "Hello, I'm Alice, a passionate coder!";
let index = 0;

function typeWriter() {
    if (index < introductionText.length) {
        document.getElementById("introduction").innerHTML += introductionText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

document.getElementById("aboutButton").onclick = function() {
    alert("I am a software developer with a passion for coding and problem-solving. I enjoy working with Python, JavaScript, and CSS to create dynamic and responsive web applications.");
};

document.getElementById("contactButton").onclick = function() {
    alert("Feel free to reach out to me via email or WhatsApp!");
};
