document.getElementById('homeBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Welcome to my portfolio!</h2>
        <p>My name is Alice. I am a web developer.</p>
    `;
});

document.getElementById('aboutBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>About Me</h2>
        <p>Contact me on WhatsApp: <a href="https://wa.me/79789819744" class="green-button">+7 978 981-97-44</a></p>
        <p>Email: <a href="mailto:lou.nebulis.ix.aliceliese@proton.me" class="black-button">lou.nebulis.ix.aliceliese@proton.me</a></p>
    `;
});

document.getElementById('skillsBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>My Skills</h2>
        <div>HTML: <div class="progress" id="htmlProgress"></div></div>
        <div>CSS: <div class="progress" id="cssProgress"></div></div>
        <div>JavaScript: <div class="progress" id="jsProgress"></div></div>
        <div>Python: <div class="progress" id="pythonProgress"></div></div>
    `;
    animateProgress();
});

function animateProgress() {
    let skills = [
        { id: 'htmlProgress', percentage: 90 },
        { id: 'cssProgress', percentage: 95 },
        { id: 'jsProgress', percentage: 80 },
        { id: 'pythonProgress', percentage: 70 }
    ];

    skills.forEach(skill => {
        let progress = 0;
        const progressBar = document.getElementById(skill.id);
        progressBar.style.width = '0%';
        progressBar.style.height = '20px';
        progressBar.style.backgroundColor = 'green';
        progressBar.style.transition = 'width 2s';

        const interval = setInterval(() => {
            if (progress >= skill.percentage) {
                clearInterval(interval);
            } else {
                progress++;
                progressBar.style.width = progress + '%';
            }
        }, 20);
    });
}
