<br />
<a id="readme-top"></a>
<div align="center">
  <a href="https://github.com/apursley2012/CS465-full-stack-dev-I/tree/module2">
    <img src="https://github.com/apursley2012/CS465-full-stack-dev-I/raw/module2/public/images/upscaledlogo.png" alt="Travlr Getaways Logo" width="100%">
  </a>
  <h1 align="center">Travlr Getaways</h1>
  <h3 align="center">Module 3: Static HTML to Templates with JSON</h3>
  <p align="center"> Module 3 enhances the Travlr Getaways website by converting it into a dynamic Express.js application. It uses Handlebars templates and external JSON data files to generate content dynamically, allowing easier content management and maintainability. This project demonstrates server-side rendering, modular MVC architecture, and the use of JSON for data-driven web pages.
<br />
    <a href="#installation">Quick Start »</a>
  </p>
  <a href="#setup"><strong>Quick Start »</strong></a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/apursley2012/CS465-full-stack-dev-I/issues">Report Bug</a>
    &nbsp;&middot;&nbsp;
    <a href="https://github.com/apursley2012/CS465-full-stack-dev-I/issues">Request Feature</a>
  </p>
</div>
</div>

---

### Table of Contents

- [Project Overview](#project-overview)
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

### Project Overview

Module 3 enhances the Travlr Getaways web app with dynamic backend capabilities using Express.js. It adds server-side routing for all main pages, JSON data delivery, and integrates content from JSON files into Handlebars views.  

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
