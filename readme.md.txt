Tayyaba Kousar | Personal Portfolio
Welcome to my personal portfolio repository! This project is a modern, responsive, and modular web application designed to showcase my skills, education, and projects as a Computer Science student and Web Development Intern.
 Features
Modular Architecture: Uses a custom JavaScript component loader to inject sections (Hero, About, Skills, etc.) dynamically, keeping the code clean and organized.
Modern UI/UX: Built with a clean, professional aesthetic using Tailwind CSS.
Interactive Animations: Features a "Scroll-Reveal" effect using the Intersection Observer API for smooth entry animations as you scroll.
Fully Responsive: Optimized for all screen sizes, including mobile, tablets, and desktops.
Dynamic Projects Section: Showcases recent work, including Figma-to-Web conversions and Final Year Project (FYP) portals.
Tech Stack
HTML5: Semantic structure.
Tailwind CSS: Utility-first styling and layout.
JavaScript (Vanilla): Component loading, DOM manipulation, and scroll animations.
Font Awesome: Iconography for social links and skill cards.
Google Fonts: Clean typography.
 Project Structure
code
Text
├── index.html          # Main entry point (Layout & Navigation)
├── app.js              # Logic for loading components & scroll animations
├── components/         # Modular HTML files (Assumed folder structure)
│   ├── hero.html       # Hero section with intro & image
│   ├── about.html      # Bio, Education, and Experience
│   ├── skills.html     # Technical skills & tools
│   ├── projects.html   # Portfolio project cards
│   └── footer.html     # Contact form & social media links
└── README.md           # Project documentation
 How to Run
Because this project uses the JavaScript fetch() API to load components, browser security policies (CORS) will prevent it from running if you simply double-click index.html.
To view the site locally, you must use a local server:
VS Code Live Server:
Install the "Live Server" extension in VS Code.
Right-click index.html and select "Open with Live Server".
Python Simple Server:
Open your terminal in the project folder and run:
code
Bash
python -m http.server
Open http://localhost:8000 in your browser.
 Sections Overview
Hero: A welcoming introduction with a call-to-action.
About: Details my background as a student at Lahore Garrison University.
Skills: Progress bars for Front-end skills (HTML, CSS, JS) and cards for core concepts (DSA, OOP, C++).
Projects: Includes a Figma conversion project, a Student FYP Portal, and a Real Estate UI.

