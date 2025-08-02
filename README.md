<a id="readme-top"></a>

  <div align="center">
      <h1> Travlr Getaways </h1>
      <h3><em> Module 1: Creating Your First Static HTML Website </em></h3>
  </div>

  <img src="public/images/upscaledlogo.png" alt="Travlr Getaways Logo" width="100%">

---

# Project Overview 

<div align="center">
  <p align="center"> Module 1 establishes the Travlr Getaways website by scaffolding a baseline Express.js application configured with Handlebars. It serves the provided static HTML, CSS, and images to create a fully functional site at <code>http://localhost:3000</code>. This baseline demonstrates local server setup, static asset integration, and Git version control fundamentals—laying the groundwork for all future modules.  </p>
  <a href="#prerequisites"><strong>Quick Start »</strong></a>
    &nbsp;&middot;&nbsp;
     <a href="#page-previews"><strong> Page Previews »</strong></a>
    &nbsp;&middot;&nbsp;
	<a href="https://github.com/apursley2012/CS465-full-stack-dev-I/issues/new"><strong> Report Issue »</strong></a>
</p>
</div>

---

# Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Page Previews](#page-previews)
  - [Home](#home)
  - [Travel](#travel)
  - [Rooms](#rooms)
  - [Meals](#meals)
  - [News](#news)
  - [About](#about)
  - [Contact](#contact)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Usage](#installation--usage)
	- [Method 1 - Visual Studio (VS) Code](#method-1---visual-studio-vs-code)
 	- [Method 2 - Command Line](#method-2---command-line)
  	- [Install Static Web Files](#install-static-web-files)
    - [Finalize Module 1 in Git](#finalize-module-1-in-git)
- [File Structure](#file-structure)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
	- [Github Profile](#github-profile)
 	- [University Email](#university-email)
  	- [Personal Email](#personal-email)
  	  
---

# About the Project

<details open>
  <summary><strong>Show / Hide</strong></summary>
	<br>
Travlr Getaways Module&nbsp;1 focuses on establishing a baseline Express.js website that serves the provided static HTML pages, images, and stylesheet. The Express generator scaffolds a Handlebars-ready project, but in this module the pages remain pure static HTML while the framework handles routing and asset delivery.

The primary goal of this module is to copy the supplied static Travlr site into the correct <code>public</code> folders, fix the default stylesheet path by renaming <code>public/stylesheets</code> to <code>public/css</code>, and verify that all pages render correctly when the server runs locally on <code>http://localhost:3000</code>. This process introduces core Express concepts—middleware, static asset serving, and the development server lifecycle.

Completing this module creates a clean, version-controlled foundation in the <code>module1</code> branch. That foundation will support future enhancements such as templating, JSON-driven content, and database connectivity introduced in later modules.
</details>

---

---

# Features

<details open>
<summary><strong>Show / Hide</strong></summary>

- **Static Web Pages Served:** All core pages (Home, Travel, Meals, Rooms, News, About, Contact) render exactly as provided via Express’s static asset middleware.
- **Express Baseline Scaffold:** The project is generated with the Express generator and pre-configured for Handlebars, creating a solid foundation for later dynamic enhancements.
- **Local Development Server:** Run the site locally on <code>http://localhost:3000</code> using <code>npm start</code> for easy testing and iterative development.
- **Stylesheet Path Fix:** Renaming the default <code>public/stylesheets</code> folder to <code>public/css</code> ensures the site’s <code>style.css</code> loads correctly without broken links.
- **Clean Project Structure:** Public assets (HTML, images, CSS) are organized in predictable folders, while Express routes and views stay separate for scalability.
- **Version Control Integration:** A dedicated <code>module1</code> branch captures the baseline commit history, allowing isolated development for future modules.

  </details>

---

---

# Page Previews

## Home 

<details>
  <summary><strong>Show/Hide Preview</strong></summary>

  <div align="center">
    <img src="public/images/index1.png" alt="Home Page 1" width="100%" style="margin-bottom: 10px;" />
    <img src="public/images/index2.png" alt="Home Page 2" width="100%" />
  </div>

</details>

## Travel

<details>
  <summary><strong>Show/Hide Preview</strong></summary>

  <div>
    <img src="public/images/travel1.png" alt="Travel Page 1" width="100%" style="margin-bottom: 10px;" />
    <img src="public/images/travel2.png" alt="Travel Page 2" width="100%" />
  </div>

</details>

## Rooms

<details>
  <summary><strong>Show/Hide Preview</strong></summary>

  <div>
    <img src="public/images/rooms1.png" alt="Rooms Page 1" width="100%" style="margin-bottom: 10px;" />
    <img src="public/images/rooms2.png" alt="Rooms Page 2" width="100%" />
  </div>

</details>

## Meals

<details>
  <summary><strong>Show/Hide Preview</strong></summary>

  <div>
    <img src="public/images/meals1.png" alt="Meals Page 1" width="100%" style="margin-bottom: 10px;" />
    <img src="public/images/meals2.png" alt="Meals Page 2" width="100%" />
  </div>

</details>

## News

<details>
  <summary><strong>Show/Hide Preview</strong></summary>

 <div>
    <img src="public/images/news1.png" alt="News Page 1" width="100%" style="margin-bottom: 10px;" />
    <img src="public/images/news2.png" alt="News Page 2" width="100%" />
  </div>

</details>

## About

<details>
  <summary><strong>Show/Hide Preview</strong></summary>

  <div>
    <img src="public/images/about1.png" alt="About Page 1" width="100%" style="margin-bottom: 10px;" />
    <img src="public/images/about2.png" alt="About Page 2" width="100%" />
  </div>

</details>

## Contact

<details>
  <summary><strong>Show/Hide Preview</strong></summary>

  <div>
    <img src="public/images/contact1.png" alt="Contact Page 1" width="100%" style="margin-bottom: 10px;" />
    <img src="public/images/contact2.png" alt="Contact Page 2" width="100%" />
  </div>

</details>

---

---

# Tech Stack

<details open>
  <summary><strong>Show / Hide</strong></summary>

- **Node.js** – JavaScript runtime environment used to run the backend server and scripts.
- **Express.js** – Minimal and flexible Node.js web application framework for building the server and handling routing.
- **Handlebars (express-handlebars)** – View engine scaffolded by the Express generator (templates not yet used in Module&nbsp;1).
- **JavaScript (ES6+)** – Core programming language for server setup and configuration.
- **HTML5 & CSS3** – Structure and style for the static web pages.
- **Git** – Version control for managing code changes and collaboration.

  </details>
