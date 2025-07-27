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
     <a href="#page-previews"><strong> Page Previews »</strong></a>
    &nbsp;&middot;&nbsp;
    <br>
	<a href="https://github.com/apursley2012/CS465-full-stack-dev-I/issues/new"><strong> Report Issue »</strong></a>
    
   
  </p>
  </div>
  
---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Page Previews](#page-previews)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [FAQs](#faqs)

---

## About The Project

Travlr Getaways Module 3 focuses on transforming static HTML pages into dynamic templates using Handlebars and JSON data. This approach replaces repetitive static HTML code with reusable templates, making the site easier to maintain and update.

The primary goal of this module was to convert the previously static Travel page into a dynamic Handlebars template that reads trip data from a JSON file. This reduces code duplication and enables the website to dynamically render trip information based on external data. 

This module significantly enhances the maintainability and scalability of the Travlr Getaways website by shifting static content management towards a more flexible, data-driven design pattern. This project builds on previous modules and sets the foundation for further backend and database integration.

---

## Features
- **Dynamic Web Pages:** All key pages (Travel, Meals, Rooms, News, About, Contact, Home) are rendered dynamically using Handlebars templates, providing a flexible and scalable site experience.
- **Content Management via JSON:** Page content is stored and managed in external JSON files, enabling easy content updates without changing code or templates.
- **Consistent Navigation:** The site features a reusable header and footer partial that ensures consistent navigation menus and branding across all pages.
- **Image and Media Integration:** Each page displays images associated with content (e.g., meals photos, room photos) pulled dynamically from JSON data.Clean URL Routing: Express routes handle requests and render the appropriate page templates seamlessly with user-friendly URLs.
- **Modular Codebase:** Separation of concerns with dedicated controllers, routes, views, and data files to simplify maintenance and future development.
- **Scalable Design:** The architecture supports adding new pages or modifying existing ones with minimal effort, thanks to JSON-driven data and templates.
- **Improved User Experience:** Dynamic rendering ensures fast page loads and easy content management for a better end-user experience.
- **Foundation for API or Database Integration:** The design prepares the app for potential backend enhancements like databases or APIs by centralizing data management.
- **Easy Content Updates:** Non-technical users can update site content by editing JSON files without touching the site’s codebase.

---

## Page Previews

### Home Page
<div align="center">
  <img src="public/images/index1.png" alt="Home Page 1" width="100%" style="margin-bottom: 10px;" />
  <img src="public/images/index2.png" alt="Home Page 2" width="100%" />
</div>

### Travel Page
<div>
  <img src="public/images/travel1.png" alt="Travel Page 1" width="100%" style="margin-bottom: 10px;" />
  <img src="public/images/travel2.png" alt="Travel Page 2" width="100%" />
</div>

### Rooms Page
<div>
  <img src="public/images/rooms1.png" alt="Rooms Page 1" width="100%" style="margin-bottom: 10px;" />
  <img src="public/images/rooms2.png" alt="Rooms Page 2" width="100%" />
</div>

### Meals Page
<div>
  <img src="public/images/meals1.png" alt="Meals Page 1" width="100%" style="margin-right: 10px;" />
  <img src="public/images/meals2.png" alt="Meals Page 2" width="100%" />
</div>

### News Page
<div>
  <img src="public/images/news1.png" alt="News Page 1" width="100%" style="margin-right: 10px;" />
  <img src="public/images/news2.png" alt="News Page 2" width="100%" />
</div>

### About Page
<div>
  <img src="public/images/about1.png" alt="About Page 1" width="100%" style="margin-right: 10px;" />
  <img src="public/images/about2.png" alt="About Page 2" width="100%" />
</div>

### Contact Page
<div>
  <img src="public/images/contact1.png" alt="Contact Page 1" width="100%" style="margin-right: 10px;" />
  <img src="public/images/contact2.png" alt="Contact Page 2" width="100%" />
</div>

---

## Tech Stack

- **Node.js** – JavaScript runtime environment used to run the backend server and scripts.
- **Express.js** – Minimal and flexible Node.js web application framework for building the server and handling routing.
- **Handlebars (express-handlebars)** – Templating engine for generating dynamic HTML pages using JSON data.
- **JavaScript (ES6+)** – Core programming language for server logic and dynamic content.
- **HTML5 & CSS3** – Structure and style for the rendered web pages.
- **JSON** – Used for storing and loading trip data.
- **Git** – Version control for managing code changes and collaboration.

# Prerequisites

This guide provides instructions specifically for setting up and preparing to use Visual Studio Code (VS Code) to run the repo locally.

## Web Browser

A modern browser like Chrome, Firefox, Edge, or Safari to view the site.

Click a browser icon below to be taken to the download page for that browser. </p>

---

<table>
  <tr>
    <td align="center">
      <a href="https://www.google.com/chrome/" target="_blank">
        <img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/chrome.svg" alt="Chrome Icon" width="60px">
      </a>
    </td>
    <td align="center">
      <a href="https://www.mozilla.org/firefox/" target="_blank">
        <img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/firefox.svg" alt="Firefox Icon" width="60px">
      </a>
    </td>
    <td align="center">
      <a href="https://www.microsoft.com/edge" target="_blank">
        <img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/edge.svg" alt="Edge Icon" width="60px">
      </a>
    </td>
    <td align="center">
      <a href="https://www.apple.com/safari/" target="_blank">
        <img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/safari.svg" alt="Safari Icon" width="60px">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>
    </td>
    <td align="center">
      <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox</a>
    </td>
    <td align="center">
      <a href="https://www.microsoft.com/edge" target="_blank">Edge</a>
    </td>
    <td align="center">
      <a href="https://www.apple.com/safari/" target="_blank">Safari</a>
    </td>
  </tr>
</table>

---

## Visual Studio (VS) Code:

*Here's a step-by-step guide to installing Visual Studio Code (VS Code) on your computer, primarily for Windows, with noted differences for macOS and Linux:*  

### Download the installer:
- Open your web browser and go to the official Visual Studio Code website: [code.visualstudio.com](https://code.visualstudio.com).
- Click on the "Download" button for your operating system (Windows, macOS, or Linux).
- The installer file (e.g., `VSCodeUserSetup-x64-1.x.x.exe` for Windows) will begin downloading.  

### Launch the installer:
- Once the download is complete, locate the installer file in your Downloads folder.
- Double-click the installer file to launch the installation process.  

### Follow the installation prompts:
- ***Accept the License Agreement:*** Read and accept the license agreement, then click "Next".
- ***Choose Installation Location:*** The default location is usually fine, but you can choose a different location if needed. Click "Next".
- ***Start Menu Folder:*** Keep the default Start Menu folder name or change it as desired. Click "Next".
    - **Additional Tasks:**
      - On Windows, consider checking the boxes for creating a desktop icon and adding "Open with Code" to the right-click context menu (these are useful shortcuts).
      - Ensure the "Add to PATH" option is checked (usually the default) as this allows you to launch VS Code from your terminal or command prompt.
      - Click "Next".
- ***Confirm Installation:*** Review your selections and click "Install".
- The installation will proceed.
- Click "Finish" to exit the installer and launch Visual Studio Code (by default).

- **For macOS users:**  
    - Download the macOS version.
    - Open the downloaded `.dmg` file.
    - Drag the Visual Studio Code.app to your Applications folder.
    - Optionally add it to your Dock by right-clicking the icon and choosing "Options" → "Keep in Dock".

- **For Linux users (Debian/Ubuntu):**        - Download the `.deb` package.
    - Install it through your graphical software center or using the command line:
     ```bash
     sudo apt install ./<file>.deb
     ```
    - ***Note:*** The installer will prompt to add the apt repository for auto-updates.

## Node.js and npm

### Download the installer:
- ***Go to the official [Nodejs.org](https://nodejs.org) website:***
  - Click the **LTS** (Recommended For Most Users) download for your operating system.
  - The installer file (e.g., `node-vxx.x.x-x64.msi` for Windows) will begin downloading.
  - **macOS:** Download the `.pkg` file.
  - **Linux/Ubuntu:** You can use your package manager instead (see next step).

### Launch the installer:
- Locate the installer in your **Downloads** folder.
- Double-click the installer file to begin installation.
- **macOS:** Double-click the `.pkg` file and follow the prompts.
- **Linux/Ubuntu:** Open a terminal and run:
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```
### Follow the installation prompts:
- Accept the license agreement and keep the default settings unless you want to change the install location.
- Complete the install process.
- **macOS:** Default options are fine; click through to finish.
- **Linux/Ubuntu:** If using the package manager, no prompts will appear.

### Verify the installation:
- Open Command Prompt (Windows) or Terminal (macOS/Linux).
   - Run:
     ```bash
     node -v
     npm -v
     ```
- ***Both commands should display a version number if installation was successful***

### 1. Install Node.js and npm

- **Node.js** is the JavaScript runtime environment needed to run this project.
- **npm** (Node Package Manager) is included with Node.js and is used to manage dependencies.

### How to install:

- Go to the official Node.js website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- Download the **LTS (Long-Term Support)** version for your operating system.
- Run the installer and follow the prompts.
- After installation, verify the installation by opening a terminal or PowerShell and typing:

    ```bash
    node --version
    npm --version
    ```

- You should see version numbers printed for both commands.

---

## 2. Install Git

- Git is required to clone the repository and manage version control.

### How to install:

- Download Git from: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Run the installer with default options.
- To verify installation, open your terminal or PowerShell and type:

    ```bash
    git --version
    ```

- You should see the Git version number.

---

## 3. Install Visual Studio Code (VS Code)

- VS Code is a popular code editor with integrated terminal and Git support.

### How to install:

- Download VS Code from: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)
- Install by following the installer instructions.
- Once installed, launch VS Code.

---

## 4. Set Up VS Code for Node.js Development

- Install the **Node.js Extension Pack** or **JavaScript/Node.js** related extensions for better development experience.
- Use the integrated terminal in VS Code for running commands.

---

## 5. (Optional) Install GitHub Desktop or Other Git GUI Tools

- If you prefer a graphical interface to manage Git repositories, GitHub Desktop is recommended.
- Download from: [https://desktop.github.com/](https://desktop.github.com/)

---

## Summary

To get started with this project locally, ensure you have:

- Node.js (with npm)
- Git
- Visual Studio Code (VS Code)

These tools will allow you to clone the repository, install dependencies, and run the project as detailed in the installation and usage sections.

---

### Notes:

- While these instructions focus on using VS Code and command line, you can use other editors or terminals of your choice.
- For beginners, VS Code provides an all-in-one interface that simplifies coding, Git, and terminal usage.


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
