# Dark Mode Theme

A simple light/dark theme switcher built with **HTML, CSS and vanilla JavaScript**. No frameworks, no libraries.

## Features

- One-click toggle between light and dark theme
- Remembers your choice after a page refresh (`localStorage`)
- Respects the system preference on the first visit (`prefers-color-scheme`)
- Smooth color transition when switching
- Fully themed with CSS variables, with no duplicated styles

## Technologies

- HTML5
- CSS3 (CSS variables, Flexbox, Grid)
- JavaScript (DOM, `localStorage`, `matchMedia`)

## Project Structure

```
dark-mode-theme/
├── index.html
├── style.css
└── script.js
```

## Ideas to Extend

- Add a third theme (for example, a blue one)
- Replace the text button with an icon (sun / moon)
- Listen for system theme changes while the page is open
- Avoid the brief flash of the wrong theme by setting the theme in a small inline script in `<head>`