# 🔢 Simple Counter — 3MTT DHF Project

> A clean, minimalist counter app built with **pure HTML, CSS, and JavaScript** — no frameworks, no dependencies, just the fundamentals.

![HTML](https://img.shields.io/badge/HTML-27.4%25-E34F26?logo=html5&logoColor=white&style=flat-square)
![CSS](https://img.shields.io/badge/CSS-42.2%25-1572B6?logo=css3&logoColor=white&style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-30.4%25-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## 📌 About

This project is a submission for the **3MTT (3 Million Technical Talent) DHF (Digital Hub Foundation)** programme. It demonstrates core web development concepts through a simple, interactive counter application built without any libraries or frameworks.

---

## ✨ Features

- ➕ Increment counter by 1
- ➖ Decrement counter by 1
- 🔄 Reset counter back to zero
- 🎨 Clean, minimal UI with custom styling
- ⚡ Zero dependencies — runs directly in the browser

---

## 🖼 Preview

> Open `index.html` directly in your browser — no build step needed.

---

## 🗂 Project Structure

```
3mtt-dhf-simple-counter-project/
├── index.html      # App markup & structure
├── style.css       # Styling & layout
├── script.js       # Counter logic (increment, decrement, reset)
└── README.md
```

---

## 🚀 Getting Started

No installation or setup required.

### Option 1 — Open directly

```bash
# Clone the repo
git clone https://github.com/Ufidtech/3mtt-dhf-simple-counter-project.git

# Navigate into the folder
cd 3mtt-dhf-simple-counter-project

# Open in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Live Server (recommended for dev)

If you use VS Code, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click `index.html`, and select **Open with Live Server**.

---

## 🛠 Tech Stack

| Technology         | Role                             |
| ------------------ | -------------------------------- |
| HTML5              | Structure & markup               |
| CSS3               | Styling & layout                 |
| Vanilla JavaScript | Counter logic & DOM manipulation |

---

## 💡 How It Works

The counter displays a number starting at `0`. Three buttons control the state:

- **`+`** — calls `increaseBtn` event listener, increments the displayed value
- **`-`** — calls `decreaseBtn` event listener, decrements the displayed value
- **`Reset`** — calls `resetBtn` event listener, sets the value back to `0`

The current count is stored in a JavaScript variable and reflected live in the `#display` span via DOM manipulation.

---

## 🎓 Learning Objectives

This project covers:

- Semantic HTML structure
- CSS layout and component styling
- DOM selection with `getElementById`
- Event listeners and user interaction
- State management with JavaScript variables

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-improvement`
3. Commit your changes: `git commit -m 'feat: your improvement'`
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🏢 Built by [Ufidtech](https://github.com/Ufidtech) · Submitted for the 3MTT DHF Programme
