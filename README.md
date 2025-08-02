<a id="readme-top"></a>

  <div align="center">
      <h1> Travlr Getaways </h1>
      <h3><em> Module 2: Model View Controller (MVC) Routing </em></h3>
  </div>

  <img src="public/images/upscaledlogo.png" alt="Travlr Getaways Logo" width="100%">

---

# Project Overview 

<div align="center">
  <p align="center">
    Module&nbsp;2 reorganizes Travlr Getaways into a true MVC-style Express.js application.  
    Static HTML pages are migrated to Handlebars templates, shared markup is extracted into reusable partials, and dedicated controllers &amp; routes are introduced.  
    These changes eliminate duplicate code, simplify maintenance, and lay the groundwork for future data-driven modules.
  </p>
  <a href="#prerequisites"><strong>Quick Start »</strong></a>
  &nbsp;&middot;&nbsp;
  <a href="#page-previews"><strong> Page Previews »</strong></a>
  &nbsp;&middot;&nbsp;
  <a href="https://github.com/apursley2012/CS465-full-stack-dev-I/issues/new"><strong> Report Issue »</strong></a>
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
  - [Usage](#usage)
- [File Structure](#file-structure)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
  - [GitHub Profile](#github-profile)
  - [University Email](#university-email)
  - [Personal Email](#personal-email)

---

# About the Project

<details open>
  <summary><strong>Show / Hide</strong></summary>
  <br>

Travlr Getaways **Module&nbsp;2** converts the website from a collection of static pages to a modular MVC application.

- **Controllers & Routes** — adds `main.js` and `travel.js` controllers plus matching Express routes for `/` and `/travel`.  
- **Views & Partials** — static pages become Handlebars `.hbs`; shared header/footer extracted to `partials/`; a global `layout.hbs` wraps every page.  
- **Directory Re-org** — MVC logic now lives in `app_server/`, while static assets remain in `public/`.  
- **Scalability** — the structure removes duplicate markup and prepares the site for JSON/database data in later modules.  

</details>

---

# Features

<details open>
  <summary><strong>Show / Hide</strong></summary>

- **MVC Architecture** — clear separation of concerns between controllers, routes, and views.  
- **Reusable Partials** — header & footer extracted to Handlebars partials.  
- **Clean URL Routing** — Express routes provide user-friendly URLs.  
- **Handlebars Layouts** — consistent HTML skeleton via `layout.hbs`.  
- **Rapid Page Conversion** — remaining static pages can be migrated quickly.  
- **Future-Ready** — groundwork laid for data-driven content (JSON / DB).  
- **Git Workflow** — all work isolated on a `module2` branch.  
- **Easy Maintenance** — global edits made once in partials/layout.  

</details>

---

# Page Previews

*(Screenshots are unchanged from Module 3 and are included for consistency.)*

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

# Tech Stack

<details open>
  <summary><strong>Show / Hide</strong></summary>

- **Node.js** – JavaScript runtime  
- **Express.js** – web framework  
- **Handlebars (express-handlebars)** – templating engine  
- **JavaScript (ES6+)** – core language  
- **HTML5 & CSS3** – structure & style  
- **Git** – version control  

</details>

---

# Prerequisites

## 1. Web Browser
<details open>
  <summary><strong>Show / Hide</strong></summary>

A modern browser like Chrome, Firefox, Edge, or Safari to view the site.

Click a browser icon below to be taken to the download page for that browser. </p>

<div align="center" valign="middle">
<table>
  <tr>
    <td align="center">
      <a href="https://www.google.com/chrome/" target="_blank">
        <img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/chrome.svg" alt="Chrome Icon" width="120" height="120" height="100">
      </a>
    </td>
    <td align="center" valign="middle">
      <a href="https://www.mozilla.org/firefox/" target="_blank">
        <img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/firefox.svg" alt="Firefox Icon" width="120" height="120" height="100">
      </a>
    </td>
    <td align="center" valign="middle">
      <a href="https://www.microsoft.com/edge" target="_blank">
        <img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/edge.svg" alt="Edge Icon" width="120" height="120" height="100">
      </a>
    </td>
    <td align="center" valign="middle">
      <a href="https://www.apple.com/safari/" target="_blank">
        <img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module1/public/images/safari.svg" alt="Safari Icon" width="120" height="120" height="100">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      <em><strong><a href="https://www.google.com/chrome/" target="_blank">Download</a></strong></em><br>Google Chrome
    </td>
    <td align="center" valign="top">
	    <em><strong><a href="https://www.mozilla.org/firefox/" target="_blank">Download </a></strong></em><br> Mozilla Firefox
    </td>
    <td align="center" valign="top">
      <em><strong><a href="https://www.microsoft.com/edge" target="_blank">Download</a></strong></em><br>Microsoft Edge
    </td>
    <td align="center" valign="top">
	    <em><strong><a href="https://www.apple.com/safari/" target="_blank">Download</a></strong></em><br>Apple Safari
    </td>
  </tr>
</table>
</div>

</details>

---

## 2. Visual Studio (VS) Code:
<details open>
  <summary><strong>Show / Hide</strong></summary>

<div align="center">
	<table>
		<tr>
			<td align="center">
				<a href="https://code.visualstudio.com" target="_blank"><img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module3/public/images/IMG_0771.png" alt="Visual Studio Code" width="120" height="120" height="100">
				</a>
			</td>
		</tr>
		<tr>
			<td align="center" valign="top">
				<strong><em><a href="https://code.visualstudio.com" target="_blank">Download</a></em></strong><br>Visual Studio Code
			</td>
		</tr>
	</table>
</div>

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

</details>

---

## 3. Node.js and npm:
<details open>
  <summary><strong>Show / Hide</strong></summary>

<div align="center">
<table>
  <tr>
    <td align="center" valign="middle">
      <a href="https://nodejs.org" target="_blank">
        <img src="https://github.com/apursley2012/CS465-full-stack-dev-I/raw/module3/public/images/IMG_0772.png" alt="Node.js Icon" width="120" height="120">
      </a>
    </td>
    <td align="center" valign="middle">
      <a href="https://nodejs.org" target="_blank">
        <img src="https://github.com/apursley2012/CS465-full-stack-dev-I/raw/module3/public/images/IMG_0774.png" alt="NPM Icon" width="120" height="120">
      </a>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center"  valign="middle">
	    <strong><em><a href="https://nodejs.org" target="_blank">Download</a></em></strong> <br> Node.js & NPM
    </td>
  </tr>
</table>
</div>

*Here's a step-by-step guide to installing Node.js (and npm, which is included) on your computer, primarily for Windows, with noted differences for macOS and Linux:*  

### Download the installer:
- Open your web browser and go to the official Node.js website: [nodejs.org](https://nodejs.org).
- Click the **LTS (Recommended for Most Users)** download button for your operating system (Windows, macOS, or Linux).
- The installer file (e.g., `node-vxx.x.x-x64.msi` for Windows) will begin downloading.  

### Launch the installer:
- Once the download is complete, locate the installer file in your Downloads folder.
- Double-click the installer file to begin the installation process.  

### Follow the installation prompts:
- ***Welcome Screen:*** Click "Next".
- ***License Agreement:*** Read and accept the license agreement, then click "Next".
- ***Choose Installation Location:*** The default location is usually fine, but you can choose a different folder if desired. Click "Next".
- ***Select Components:*** Leave the default components selected. Click "Next".
- ***Tools for Native Modules:*** (Optional) You may be prompted to install additional tools like Python and Visual Studio Build Tools. You can skip this unless you plan to use native modules. Click "Next".
- ***Ready to Install:*** Review your selections and click "Install".
- When installation finishes, click "Finish" to exit the installer.

- **For macOS users:**  
    - Download the `.pkg` file from the Node.js website.
    - Double-click it to launch the installer and follow the on-screen instructions.
    - Once complete, Node.js and npm will be available system-wide.

- **For Linux users (Debian/Ubuntu):**  
    - Open a terminal and run the following commands:
      ```bash
      sudo apt update
      sudo apt install nodejs npm
      ```

### Verify the installation:
- Open your terminal (Command Prompt, PowerShell, or Terminal).
- Run the following commands:
  ```bash
  node -v
  npm -v
  ```
- If Node.js and npm are installed correctly, you will see version numbers for both.

</details>

---

## 4. Git:
<details open>
  <summary><strong>Show / Hide</strong></summary>

<div align="center">
	<table>
		<tr>
			<td align="center" valign="middle">
				<a href="https://code.visualstudio.com" target="_blank"><img src="https://raw.githubusercontent.com/apursley2012/CS465-full-stack-dev-I/refs/heads/module3/public/images/IMG_0773.png" alt="Git" width="120" height="120" height="100"></a>
			</td>
		</tr>
		<tr>
			<td align="center" valign="top">
			<strong><em><a href="https://code.visualstudio.com" target="_blank">Download</a></em></strong><br>Git
			</td>
		</tr>
	</table>
</div>

*Here's a step-by-step guide to installing Git on your computer, primarily for Windows, with noted differences for macOS and Linux:*  

### Download the installer:
- Open your web browser and go to the official Git website: [git-scm.com/downloads](https://git-scm.com/downloads).
- The site will automatically detect your operating system.
- Click the download link for **Windows**, **macOS**, or **Linux**.
- The installer file (e.g., `Git-2.x.x-x64.exe` for Windows) will begin downloading.  

### Launch the installer:
- Once the download is complete, locate the installer file in your Downloads folder.
- Double-click the installer file to begin the installation process.  

### Follow the installation prompts:
- ***Accept the License Agreement:*** Read and accept the license agreement, then click "Next".
- ***Choose Installation Location:*** The default location is usually fine, but you can choose a different location if needed. Click "Next".
- ***Select Components:*** Keep the default selections. Ensure “Git Bash Here” and “Git GUI Here” are checked.
- ***Choosing Default Editor:*** Choose your preferred code editor or leave the default (Vim or Notepad). Click "Next".
- ***Adjusting PATH Environment:*** Select “Git from the command line and also from 3rd-party software” (recommended). Click "Next".
- ***Other Configuration Settings:*** Leave default options selected unless you have a reason to change them.
- Click "Install" to begin installation.
- Click "Finish" to exit the installer when setup is complete.

- **For macOS users:**  
    - Git is available through the Xcode Command Line Tools.
    - Open the Terminal app and run:
      ```bash
      xcode-select --install
      ```
    - A popup window will appear. Click "Install" and wait for the installation to finish.

- **For Linux users (Debian/Ubuntu):**  
    - Open a terminal and run the following commands:
      ```bash
      sudo apt update
      sudo apt install git
      ```

### Verify the installation:
- Open your terminal (Command Prompt, PowerShell, Terminal, or Git Bash).
- Type the following and press Enter:
  ```bash
  git --version
  ```
- If Git is installed correctly, you will see the version number displayed.

</details>

---
---

# Installation & Usage

## Method 1 - Visual Studio (VS) Code
<details open>
  <summary><strong>Show / Hide</strong></summary>

### Clone the repository and create the **Module 2 branch**
```bash
# open a terminal in VS Code
cd C:\Users\YourName\Documents
git clone https://github.com/apursley2012/CS465-full-stack-dev-I.git
cd CS465-full-stack-dev-I\travlr
git checkout -b module2
```

### Open the project in VS Code
- In VS Code, go to **File > Open Folder** and select the `travlr` folder.

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm start
```
You should see:
```text
> travlr@0.0.0 start
> node ./bin/www

Listening on port 3000
```

### View the application
Open your browser and navigate to:
```text
http://localhost:3000/
```

### Stop the server
Press **Ctrl + C** in the terminal to shut it down.

</details>

---

## Method 2 - Command Line
<details open>
  <summary><strong>Show / Hide</strong></summary>

### Clone the repository and create the **Module 2 branch**
```bash
cd C:\Users\YourName\Documents
git clone https://github.com/apursley2012/CS465-full-stack-dev-I.git
cd CS465-full-stack-dev-I\travlr
git checkout -b module2
```

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm start
```
Terminal output:
```text
> travlr@0.0.0 start
> node ./bin/www

Listening on port 3000
```

### View the application
```text
http://localhost:3000/
```

### Stop the server
Press **Ctrl + C**.

</details>

---

## Usage
<details open>
  <summary><strong>Show / Hide</strong></summary>

- **Browse Home & Travel Pages** using the top navigation menu.  
  - Pages render via Handlebars (`layout.hbs`, `header.hbs`, `footer.hbs`).  
- **Inspect MVC Structure**  
  - **Controllers:** `app_server/controllers/`  
  - **Routes:** `app_server/routes/`  
  - **Views:** `app_server/views/`  
- **Verify Partials** by viewing source in DevTools to confirm header & footer.  
- **Convert Additional Pages**:  
  1. Copy a static page (e.g., `rooms.html`) into `app_server/views/`.  
  2. Rename it to `.hbs`.  
  3. Create a controller and route to serve it.  
  4. Update nav links in the header partial.  
- **Commit & Push Work**
  ```bash
  git status
  git add .
  git commit -m "Module 2 completed baseline"
  git push --set-upstream origin module2
  ```

</details>

---

# File Structure
<details>
  <summary><strong>Show / Hide</strong></summary>

```
🗂️travlr
 ├─ 📁app_server/
 │  ├─ 📁controllers/
 │  │  ├─ main.js
 │  │  └─ travel.js
 │  ├─ 📁routes/
 │  │  ├─ index.js
 │  │  └─ travel.js
 │  └─ 📁views/
 │     ├─ 📁layouts/
 │     │  └─ layout.hbs
 │     ├─ 📁partials/
 │     │  ├─ header.hbs
 │     │  └─ footer.hbs
 │     ├─ index.hbs
 │     └─ travel.hbs
 ├─ 📁bin/
 │  └─ www
 ├─ 📁public/
 │  ├─ 📁css/
 │  │  └─ style.css
 │  └─ 📁images/
 ├─ app.js
 ├─ package.json
 ├─ package-lock.json
 └─ README.md
```

</details>

---

# Acknowledgements
<details>
  <summary><strong>Show / Hide</strong></summary>

- Node.js  
- Express.js  
- Handlebars.js  
- Free Website Templates  
- SNHU instructor guidance & course materials  

</details>

---

# Contact

<div align="center">
  <h1> Developer </h1>
  <h3><b><em> Alysha Pursley </em></b></h3>
  <h4><em><b>
    Feel free to reach out with comments, questions, or feedback.<br><br>
    Thank you for visiting!
  </b></em></h4>
</div>

## GitHub Profile
**[alyshap2012](https://github.com/apursley2012)**  

## University Email
**[alysha.pursley@snhu.edu](mailto:alysha.pursley@snhu.edu)**  

## Personal Email
**[alysha.pursley@gmail.com](mailto:alysha.pursley@gmail.com)**
