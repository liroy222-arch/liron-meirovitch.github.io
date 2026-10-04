// =========================
// Dark Mode
// =========================

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );

    themeToggle.textContent =
    document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";

});

// Load saved theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

// =========================
// Technology Search
// =========================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const filter =
        searchInput.value.toLowerCase();

        const techCards =
        document.querySelectorAll(".tech-card");

        techCards.forEach(card => {

            const text =
            card.textContent.toLowerCase();

            card.style.display =
            text.includes(filter)
            ? "block"
            : "none";

        });

    });

}

// =========================
// Smooth Fade-in
// =========================

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

document
.querySelectorAll(
".card,.timeline-item,.tech-card,.cert-card"
)
.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";
    el.style.transition = "all .5s ease";

    observer.observe(el);

});
``
