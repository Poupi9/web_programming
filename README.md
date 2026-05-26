# PageTurner Books — Online Bookstore

**Course:** Web Programming (100458-11001)  
**Semester:** March 2026  
**Submission deadline:** 5 June 2026 (Week 14)

---

## Group Members

| Name | Student ID |
|------|-----------|
| [Member 1 — fill in] | [ID] |
| [Member 2 — fill in] | [ID] |
| [Member 3 — fill in] | [ID] |
| [Member 4 — fill in] | [ID] |
| [Member 5 — fill in] | [ID] |

---

## Features

### HTML (Semantic Structure)
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`
- **Welcome section** — hero banner with site title and call-to-action
- **Featured Books section** — 6 book cards (5 required + 1 bonus), each with title, author, description, cover image, price, and buy button
- **Navigation menu** — sticky header with anchor links to all sections
- **Contact section** — form with name, email, message fields and submit button

### CSS (Styling & Layout)
- Google Fonts: Playfair Display (headings) + Inter (body)
- CSS custom properties for consistent theming
- **Flexbox** — header, cart sidebar, form layout
- **CSS Grid** — responsive book card grid (`repeat(auto-fill, minmax(220px, 1fr))`)
- Typography, spacing, background gradients, border-radius, box-shadows
- **Hover effects** — card lift animation, button color transitions, nav underline slide
- **Responsive design** — mobile-friendly at 768px and 480px breakpoints

### JavaScript (Interactivity)
1. **Show/Hide Book Descriptions** — toggle button reveals/hides each book's description
2. **Dynamic Footer Clock** — live date and time updated every second via `setInterval`
3. **Form Validation** — inline error messages for empty fields and invalid email format (regex)
4. **Live Search / Filter** — real-time book filtering by title or author as the user types *(bonus)*
5. **Add to Cart** — cart sidebar with quantity controls, item list, running total, and badge counter *(bonus — exceeds the "choose one" requirement)*

---

## File Structure

```
web_programming/
├── index.html        — Main HTML file (semantic structure, all sections)
├── styles.css        — All styling (layout, typography, hover effects, responsive)
├── script.js         — All JavaScript features
├── images/
│   ├── gatsby.svg          — The Great Gatsby cover
│   ├── mockingbird.svg     — To Kill a Mockingbird cover
│   ├── 1984.svg            — 1984 cover
│   ├── pride.svg           — Pride and Prejudice cover
│   ├── alchemist.svg       — The Alchemist cover
│   └── dune.svg            — Dune cover
└── README.md         — This file
```

---

## Division of Tasks

| Task | Member |
|------|--------|
| HTML structure & semantic markup | [Member] |
| CSS layout (Grid/Flexbox) | [Member] |
| CSS styling (typography, colors, hover effects) | [Member] |
| JavaScript — toggle descriptions + footer clock | [Member] |
| JavaScript — form validation + search filter | [Member] |
| JavaScript — shopping cart feature | [Member] |
| Book cover artwork (SVG) | [Member] |
| README & documentation | [Member] |

---

## How to Run

Open `index.html` directly in any modern browser — no server or build step required.
