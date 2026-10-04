// Dark Mode Toggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeToggle.textContent =
        document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
});

// Technology Search

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();

        let items =
            document.querySelectorAll(".tech-card");

        items.forEach((item) => {

            let text =
                item.textContent.toLowerCase();

            item.style.display =
                text.includes(filter)
                ? "block"
                : "none";
        });
    });
}
