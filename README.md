# Sarshij Karn – Modern Portfolio Website

Welcome to the portfolio website of **Sarshij Karn** – an Electronics, Communication & Information Engineering student passionate about technology, AI, embedded systems, and learning. This site is both a personal CV/portfolio and a modern web demo showcasing interactive web techniques.

[🌐 **Live Demo**](https://sarshijkarn.com.np/)

---

## ✨ Features

- Modern, fully responsive design
- Animated hero, glitch text, and dynamic particle background
- Light/dark theme toggle with persistent styles
- Smooth section navigation and animated scroll-in content
- Mobile navigation and accessible menu
- **Interactive Gallery:** Infinite seamless horizontal scroll, lightbox with top-aligned images, and modal scroll control
- Skills, projects, education timeline, and hobbies sections
- AJAX & fallback-enabled contact form (reCAPTCHA + bot protection)
- Downloadable resume button
- Social icons linked to all major profiles
- Built-in performance optimizations

---

## 🚀 Quick Start

1. **Clone or Download this repo**
2. Open `index.html` in your browser

This project is _static only_ – no server-side rendering required!

> Optionally, for local development, use [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode to auto-reload changes.

---

## 🛠️ Technologies & Tools

- **HTML5 & CSS3:** Semantic markup, organized custom styles, plus [TailwindCSS](https://tailwindcss.com/) for utility classes (via CDN)
- **JavaScript (Vanilla):** For UI and animation logic ([script.js](script.js))
- **[GSAP](https://greensock.com/gsap/):** For smooth and performant animations
- **FontAwesome:** For iconography
- **Google Fonts:** For custom aesthetic typography
- **reCAPTCHA:** Prevents spam and abuse in the contact form


---

## 📂 Folder/File Structure

```
My-Website/
│
├── index.html         # Main HTML file, includes all sections and scripts
├── style.css          # Custom styles, variables, neon/dark/light UI
├── script.js          # UI logic: animation, theme, gallery, form, more
├── assets/            # Images and documents (e.g. resume, gallery)
│    └── ...
├── README.md          # This file
└── ...
```

---

## 🔍 Project Highlights

### Animations & Visuals
- Hero title with a custom glitch and jumble effect
- Dynamic particles as animated background
- Card flip and pop-in effects for sections
- Gallery auto-scrolls infinitely – mouse hover/touch pauses the scroll

### Navigation
- Smooth scrolling to sections
- Adaptive mobile menu (collapsible on small screens)
- Persistent dark/light theme via CSS and toggle switch

### Gallery & Modal
- Horizontal infinite carousel using JavaScript
- Clicking an image opens a lightbox modal
- While modal is open, background gallery auto-scroll pauses
- Lightbox image is fitted and aligned to the top for best viewing

### Contact & Resume
- AJAX contact form with honeypot, IP capture, reCAPTCHA, plus fallback to Formspree
- Download button for resume


---

## 🧑‍💻 Customization
- **Images:** Place your own in `/assets/img/gallery/` and update their paths in `index.html`
- **Personal info:** Update the HTML's meta tags, hero, about, skills, etc.
- **Color scheme:** Edit the CSS variables in `style.css` for quick palette changes
- **Sections:** Rearrange, duplicate, or remove sections as needed directly in HTML

---

## 🌐 Deployment
This site can be hosted on any static web platform (Netlify, Vercel, GitHub Pages, etc.)
- Only HTML, CSS, JS are served. No build process is required.
- For your own site: update links, meta, gallery images, etc.

---

## 🤝 Contributing
Pull requests are welcome! For suggestions, open an issue or fork and submit a PR.

---

## 📝 License
This website is provided under the MIT License. Credit is appreciated if you use or adapt the design.

## 👤 Author
**Sarshij Karn**  
Portfolio: [https://sarshijkarn.com.np](https://sarshijkarn.com.np)  
[LinkedIn](https://www.linkedin.com/in/sarshij-karn-1a7766236/) | [GitHub](https://github.com/SarshijKarn) | [Twitter](https://x.com/sarshijkarn)
