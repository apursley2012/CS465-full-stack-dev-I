
<img src="public/images/logo.png" alt="Travlr Getaways Logo" width="100%">

# Travlr Getaways — Module 2

Refactored site using Express, MVC structure, and Handlebars templates.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Screenshots](#screenshots)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## Project Overview

Module 2 transforms the static site into a Node.js/Express app using the MVC pattern and Handlebars.
The site now supports dynamic routing, shared partials (header/footer), and a scalable architecture.

### Features

- MVC folder structure (`controllers`, `routes`, `views`)
- Handlebars templates and partials
- Express.js routing for home and travel pages
- All static assets in the `public` folder

---

## Folder Structure

```text
travlr/
├── app_server/
│   ├── controllers/
│   │   ├── main.js
│   │   └── travel.js
│   ├── routes/
│   │   ├── index.js
│   │   └── travel.js
│   └── views/
│       ├── partials/
│       │   ├── header.hbs
│       │   └── footer.hbs
│       ├── error.hbs
│       ├── index.hbs
│       └── travel.hbs
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── logo.png
│   └── (other static files)
├── package.json
├── package-lock.json
├── README.md
└── (other supporting files)
```

---

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/apursley2012/CS465-full-stack-dev-I.git
    ```
2. **Navigate to Module 2 folder:**
    ```bash
    cd "Module 2/travlr"
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Start the application:**
    ```bash
    npm start
    ```
5. **Open in browser:**
    - Go to [http://localhost:3000/](http://localhost:3000/)
    - Or [http://localhost:3000/travel](http://localhost:3000/travel)

---

## Usage

- Visit `/` for the homepage and `/travel` for the travel page.
- All navigation, header, and footer are now included as Handlebars partials.

---

## Testing

- Check that all routes load the correct views with shared layout.
- Confirm that images, CSS, and navigation work as expected.
- Ensure dynamic content renders using Handlebars.

---

## Screenshots

<!-- Add screenshots of the homepage and travel page here. -->

---

## Contact

Project Maintainer: Alysha Pursley  
GitHub: [apursley2012](https://github.com/apursley2012)

---

## Acknowledgements

- SNHU CS 465  
- Node.js, Express, Handlebars  
- Open-source community

---
