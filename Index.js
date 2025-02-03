<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steven - Creative Portfolio</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            /* Day Color Scheme */
            --day-primary: #3498db;
            --day-secondary: #2ecc71;
            --day-background: #f0f4f8;
            --day-text: #2c3e50;
            
            /* Night Color Scheme */
            --night-primary: #34495e;
            --night-secondary: #2980b9;
            --night-background: #121212;
            --night-text: #ecf0f1;

            /* Current Color Scheme (default to day) */
            --primary-color: var(--day-primary);
            --secondary-color: var(--day-secondary);
            --background-color: var(--day-background);
            --text-color: var(--day-text);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: var(--background-color);
            color: var(--text-color);
            overflow-x: hidden;
        }

        /* Navigation Menu */
        .nav-menu {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
        }

        .menu-icon {
            cursor: pointer;
            font-size: 24px;
            background-color: var(--primary-color);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }

        .menu-icon:hover {
            transform: rotate(90deg);
        }

        .menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1500;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .menu-content {
            background-color: var(--background-color);
            border-radius: 15px;
            padding: 30px;
            width: 80%;
            max-width: 600px;
            max-height: 80%;
            overflow-y: auto;
            transform: scale(0.7);
            opacity: 0;
            transition: all 0.3s ease;
        }

        .menu-overlay.active {
            display: flex;
            opacity: 1;
        }

        .menu-overlay.active .menu-content {
            transform: scale(1);
            opacity: 1;
        }

        .menu-tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }

        .menu-tab {
            margin: 0 10px;
            padding: 10px 20px;
            background-color: var(--primary-color);
            color: white;
            border-radius: 25px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .menu-tab:hover {
            background-color: var(--secondary-color);
        }

        .menu-section {
            display: none;
        }

        .menu-section.active {
            display: block;
        }

        /* Rest of the previous styles... */
        .header {
            position: relative;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(
                -45deg, 
                var(--primary-color), 
                var(--secondary-color), 
                #8e44ad, 
                #e74c3c
            );
            background-size: 200% 200%;
            color: white;
            text-align: center;
            animation: gradientWave 10s ease infinite;
            padding: 2rem;
            overflow: hidden;
        }

        @keyframes gradientWave {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
        }

        /* Existing styles... */
    </style>
</head>
<body>
    <!-- Navigation Menu -->
    <div class="nav-menu">
        <div class="menu-icon" onclick="toggleMenu()">
            <i class="fas fa-bars"></i>
        </div>
    </div>

    <!-- Menu Overlay -->
    <div class="menu-overlay" id="menuOverlay">
        <div class="menu-content">
            <div class="menu-tabs">
                <div class="menu-tab" onclick="showSection('about')">About</div>
                <div class="menu-tab" onclick="showSection('skills')">Skills</div>
                <div class="menu-tab" onclick="showSection('contact')">Contact</div>
                <div class="menu-tab" onclick="toggleColorScheme()">🌓</div>
            </div>

            <div id="aboutSection" class="menu-section">
                <h2>About Me</h2>
                <p>I'm Steven, a passionate web developer and creative technologist with expertise in full-stack development, bot creation, and innovative digital solutions.</p>
            </div>

            <div id="skillsSection" class="menu-section">
                <h2>Skills</h2>
                <ul>
                    <li>🤖 WhatsApp Bot Development</li>
                    <li>💻 Full Stack Web Development</li>
                    <li>🐍 Python Scripting</li>
                    <li>🌐 JavaScript Frameworks</li>
                    <li>🤖 Automation Scripting</li>
                    <li>🎨 UI/UX Design</li>
                </ul>
            </div>

            <div id="contactSection" class="menu-section">
                <h2>Contact Information</h2>
                <p>📧 Email: si797410@gmail.com</p>
                <p>📱 WhatsApp: +44 7308 326674</p>
                <p>🌐 GitHub: github.com/panel1810</p>
            </div>
        </div>
    </div>

    <header class="header">
        <!-- Previous header content script -->
    </header>

    <script>
        function toggleMenu() {
            const overlay = document.getElementById('menuOverlay');
            overlay.classList.toggle('active');
        }

        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.menu-section').forEach(section => {
                section.classList.remove('active');
            });

            // Show selected section
            document.getElementById(`${sectionName}Section`).classList.add('active');
        }

        function toggleColorScheme() {
            const root = document.documentElement;
            const currentBackground = root.style.getPropertyValue('--background-color');

            if (currentBackground === 'var(--day-background)') {
                // Switch to night mode
                root.style.setProperty('--primary-color', 'var(--night-primary)');
                root.style.setProperty('--secondary-color', 'var(--night-secondary)');
                root.style.setProperty('--background-color', 'var(--night-background)');
                root.style.setProperty('--text-color', 'var(--night-text)');
            } else {
                // Switch to day mode
                root.style.setProperty('--primary-color', 'var(--day-primary)');
                root.style.setProperty('--secondary-color', 'var(--day-secondary)');
                root.style.setProperty('--background-color', 'var(--day-background)');
                root.style.setProperty('--text-color', 'var(--day-text)');
            }
        }

        // Initialize first section
        document.addEventListener('DOMContentLoaded', () => {
            showSection('about');
        });
    </script>
</body>
</html>
