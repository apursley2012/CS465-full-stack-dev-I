<a id="readme-top"></a>

  <div align="center">
      <h1> Travlr Getaways </h1>
      <h3><em> Module 3: Static HTML to Templates with JSON </em></h3>
  </div>

---

  <img src="public/images/upscaledlogo.png" alt="Travlr Getaways Logo" width="100%">

---

## Project Overview 

<div align="center">
  <p align="center"> Module 3 enhances the Travlr Getaways website by converting it into a dynamic Express.js application. It uses Handlebars templates and external JSON data files to generate content dynamically, allowing easier content management and maintainability. This project demonstrates server-side rendering, modular MVC architecture, and the use of JSON for data-driven web pages.
  </p>
  <a href="#prerequisites"><strong>Quick Start »</strong></a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/apursley2012/CS465-full-stack-dev-I/issues/new">Report Issue »</a>
    <a href="https://github.com/github_username/repo_name">View Demo</a>
  </p>
  </div>
  
---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [FAQs](#faqs)

---
---

## Table of Contents

- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Running the Application](#running-the-application)  
- [Project Structure](#project-structure)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Contributing](#contributing)  
- [Acknowledgements](#acknowledgements)  
- [FAQ](#faq)  
- [Contact](#contact)  

---

### Prerequisites

Before you begin, ensure you have:

[![Icon](https://skillicons.dev/icons?i=nodejs,npm,git,vscode)](https://skillicons.dev)

- **Node.js (v14 or higher)**: [Download here](https://nodejs.org/en/download/)  
- **npm** (comes with Node.js)  
- **Git**: [Download here](https://git-scm.com/downloads)  
- **A modern web browser**

### Features
Modular MVC architecture with Express.js

Handlebars templating engine with partials (header/footer)

JSON-driven content for dynamic page rendering

Clean, maintainable, scalable code structure

Consistent site navigation and styling

Error handling with friendly error pages
```
### Tech Stack
### File Structure
module3/
└── travlr/
    ├── app_server/
    │   ├── controllers/
    │   │   ├── main.js
    │   │   ├── travel.js
    │   │   ├── meals.js
    │   │   ├── rooms.js
    │   │   ├── news.js
    │   │   ├── about.js
    │   │   └── contact.js
    │   ├── data/
    │   │   ├── travel.json
    │   │   ├── meals.json
    │   │   ├── rooms.json
    │   │   ├── news.json
    │   │   ├── about.json
    │   │   └── contact.json
    │   ├── routes/
    │   │   ├── index.js
    │   │   ├── travel.js
    │   │   ├── meals.js
    │   │   ├── rooms.js
    │   │   ├── news.js
    │   │   ├── about.js
    │   │   └── contact.js
    │   ├── views/
    │   │   ├── partials/
    │   │   │   ├── header.hbs
    │   │   │   └── footer.hbs
    │   │   ├── index.hbs
    │   │   ├── travel.hbs
    │   │   ├── meals.hbs
    │   │   ├── rooms.hbs
    │   │   ├── news.hbs
    │   │   ├── about.hbs
    │   │   └── contact.hbs
    │   └── error.hbs
    ├── public/
    │   ├── css/
    │   ├── images/
    ├── app.js
    ├── package.json
```

---

## Table of Contents

- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Running the Application](#running-the-application)  
- [Project Structure](#project-structure)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Contributing](#contributing)  
- [Acknowledgements](#acknowledgements)  
- [FAQ](#faq)  
- [Contact](#contact)  

---

## Prerequisites

Before installing and running this project, ensure the following are installed and accessible:

### 1. Git

Git is required to clone the repository and manage version control.

- Download: [https://git-scm.com/downloads](https://git-scm.com/downloads)  
- Install with default settings.  

**Verify installation:**  
Open a terminal or Command Prompt and run:

```bash
git --version
```
You should see a version number like git version 2.x.x.

⸻

2. Node.js and npm

Node.js is the runtime environment; npm is the Node package manager.
	•	Download LTS version (recommended): https://nodejs.org/en/download/
	•	Install by following the installer prompts.

Verify installation:
In terminal or Command Prompt, run:

node --version
npm --version

You should see version numbers for both commands, e.g., v18.x.x and 9.x.x.

⸻

3. Web Browser

A modern browser like Chrome, Firefox, Edge, or Safari to view the site.

<p style="text-align: center; font-style: italic; font-size: 14px; color: #555;">
  Click a browser icon below to be taken to the download page for that browser. </p>

<div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 10px;">
  <a href="https://www.google.com/chrome/" target="_blank" style="text-align: center; text-decoration: none;"><img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/chrome.svg" alt="Chrome Icon" width="80" style="margin: 2.5px;" /></a>
  <a href="https://www.mozilla.org/firefox/" target="_blank" style="text-align: center; text-decoration: none;"><img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/firefox.svg" alt="Firefox Icon" width="80" style="margin: 2.5px;" /></a>
  <a href="https://www.microsoft.com/edge" target="_blank" style="text-align: center; text-decoration: none;"><img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/edge.svg" alt="Edge Icon" width="80" style="margin: 2.5px;" /></a>
  <a href="https://www.apple.com/safari/" target="_blank" style="text-align: center; text-decoration: none;"><img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/safari.svg" alt="Safari Icon" width="80" style="margin: 2.5px;" /></a>
</div>

---

Installation

Follow either VS Code or Command Line method to install and run the project.

Using VS Code
	1.	Open Visual Studio Code.
	2.	Click on File > Open Folder.
	3.	Navigate to your local folder where you want to clone the project (e.g., C:\Users\YourName\Documents).
	4.	Open the integrated terminal in VS Code by pressing Ctrl + ` or via View > Terminal.
	5.	Clone the repository by running:

git clone https://github.com/apursley2012/CS465-full-stack-dev-I.git


	6.	Change directory to the Module 3 folder:

cd CS465-full-stack-dev-I/module3/travlr


	7.	Install dependencies by running:

npm install



Using Command Line (Terminal or PowerShell)
	1.	Open your Terminal (Mac/Linux) or Command Prompt / PowerShell (Windows).
	2.	Navigate to the directory where you want the project cloned, for example:

cd C:\Users\YourName\Documents


	3.	Clone the repository:

git clone https://github.com/apursley2012/CS465-full-stack-dev-I.git


	4.	Navigate to the Module 3 project folder:

cd CS465-full-stack-dev-I/module3/travlr


	5.	Install project dependencies:

npm install



⸻

Running the Application Locally

Step 1: Start the server

Run the app locally by starting the Node.js server:

npm start

You should see output similar to:

> travlr@0.0.0 start
> node ./bin/www

Listening on port 3000


⸻

Step 2: Open your browser

Open your preferred web browser and go to:

http://localhost:3000/


⸻

Step 3: Navigate the site

Use the navigation menu to browse pages:
	•	Home
	•	Travel
	•	Meals
	•	News
	•	Rooms
	•	About
	•	Contact

All pages load content dynamically from JSON data files.

⸻

Project Structure

travlr/
│
├── app_server/
│   ├── controllers/
│   │   ├── main.js
│   │   ├── travel.js
│   │   ├── meals.js
│   │   ├── news.js
│   │   ├── rooms.js
│   │   ├── about.js
│   │   ├── contact.js
│   ├── data/
│   │   ├── index.json
│   │   ├── travel.json
│   │   ├── meals.json
│   │   ├── news.json
│   │   ├── rooms.json
│   │   ├── about.json
│   │   ├── contact.json
│   ├── routes/
│   │   ├── index.js
│   │   ├── travel.js
│   │   ├── meals.js
│   │   ├── news.js
│   │   ├── rooms.js
│   │   ├── about.js
│   │   ├── contact.js
│   ├── views/
│   │   ├── partials/
│   │   │   ├── header.hbs
│   │   │   ├── footer.hbs
│   │   ├── index.hbs
│   │   ├── travel.hbs
│   │   ├── meals.hbs
│   │   ├── news.hbs
│   │   ├── rooms.hbs
│   │   ├── about.hbs
│   │   ├── contact.hbs
│   │   ├── error.hbs
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── logo.png
├── app.js
├── package.json
└── README.md


⸻

Features
	•	Modular MVC architecture with Express.js
	•	Handlebars templating engine with partials (header/footer)
	•	JSON-driven content for dynamic page rendering
	•	Clean, maintainable, scalable code structure
	•	Consistent site navigation and styling
	•	Error handling with friendly error pages

⸻

Tech Stack


⸻

Contributing

Contributions are welcome! Please fork the repo, make your changes, and submit a pull request.

⸻

Acknowledgements
	•	Node.js
	•	Express.js
	•	Handlebars.js
	•	Free Website Templates
	•	SNHU instructor guidance and course materials

---

Contact

Alysha Pursley
GitHub: apursley2012
Email: alysha.pursley@snhu.edu
