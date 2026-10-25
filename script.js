const btn = document.getElementById("theme-toggle");
const root = document.documentElement;

function updateButton (theme){
    btn.textContent = theme === "dark" ? "Light" : "Dark";
}

const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = saved ?? (prefersDark ? "dark" : "light");

root.dataset.theme = theme;
updateButton(theme);


btn.addEventListener("click", () => {
    const currentTheme = root.dataset.theme;
    const next = currentTheme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    updateButton(next);
})