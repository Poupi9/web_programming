# The Reading Nook — Online Bookstore

A browser-based e-commerce application built with vanilla HTML, CSS, and JavaScript as part of a Web Programming course project. The application demonstrates core front-end development principles through a fully functional online bookstore — no frameworks, no libraries, no back-end. Everything runs directly in the browser.

We went beyond the base requirements: on top of the four mandatory features, we implemented two bonus features — a live search bar and a full shopping cart.

## Features

- **Browse & discover** — hero banner with call-to-action that smooth-scrolls to the book grid; 6 book cards with real cover images, title, author, and price
- **Show/hide descriptions** — toggle button expands/collapses each book's synopsis; button label and ARIA attribute both update
- **Live search & filter** — real-time filtering on every keystroke, matching against both title and author *(bonus)*
- **Shopping cart** — slide-in sidebar with quantity controls (`+`/`−`), running total, animated badge counter, and Escape-to-close *(bonus)*
- **Contact form** — inline validation on submit; errors clear as the user corrects each field; regex check on email
- **Live footer clock** — current day, date, and time updated every second via `setInterval`
- **Responsive layout** — mobile-friendly at 768 px and 480 px breakpoints

## Project Structure

```
web_programming/
├── index.html              # Single HTML file — header, hero, book grid,
│                           #   cart sidebar, contact form, footer
├── styles.css              # All styling — layout, typography, hover effects, responsive
├── script.js               # All JavaScript — 5 features, each separated by comments
├── images/
│   ├── gatsby.jpg          # The Great Gatsby cover
│   ├── mockingbird.jpg     # To Kill a Mockingbird cover
│   ├── 1984.jpg            # 1984 cover
│   ├── pride.jpg           # Pride and Prejudice cover
│   ├── alchemist.jpg       # The Alchemist cover
│   └── dune.jpg            # Dune cover
└── README.md               # This file
```

The single-file approach was deliberate: it keeps everything in one place, appropriate for a project of this scale, and makes the full page easy to understand at a glance.

## How to Run

Open `index.html` directly in any modern browser — nothing to install.

## Division of Tasks

| Area | Owner |
|------|-------|
| HTML structure — semantic markup, sections, ARIA attributes | Geoffrey |
| JavaScript — show/hide description toggle, footer clock, form validation | Geoffrey |
| CSS — Grid book layout, Flexbox header & cart sidebar, responsive breakpoints (768 px / 480 px), custom properties, hover animations, Google Fonts | Adrien |
| JavaScript — live search filter, shopping cart (`escapeHtml`, badge animation) | Dimitri |
| Book cover images — sourcing and processing | Dimitri |

## Web Concepts Demonstrated

| Concept | Where |
|---------|-------|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>` in `index.html` |
| CSS Grid | Responsive book card grid — `repeat(auto-fill, minmax(220px, 1fr))` in `styles.css` |
| CSS Flexbox | Header layout, cart sidebar, and form layout in `styles.css` |
| CSS custom properties | Consistent colour and spacing theming via variables in `styles.css` |
| DOM manipulation | Show/hide descriptions, cart state sync, live search results in `script.js` |
| XSS prevention | `escapeHtml()` sanitises all user-supplied strings before `innerHTML` injection |
| Form validation | Regex email check with inline error messages in `script.js` |
| Timers | Live footer clock via `setInterval` in `script.js` |
| Event listeners | Click, input, keydown, and submit events throughout `script.js` |

## Page Navigation

```
index.html
    ├── #home      — Hero banner → smooth-scroll to book grid
    ├── #books     — Featured book grid
    │       ├── Search bar → filters cards in real time
    │       ├── Book card → toggle description
    │       └── "Add to Cart" → updates cart sidebar
    ├── #contact   — Contact form with inline validation
    └── Cart sidebar (any page) → quantity controls → running total → Escape to close
```
