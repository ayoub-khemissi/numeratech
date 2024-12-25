const dropdown = document.querySelector("#expertise-dropdown");
const dropdownContent = dropdown.querySelector("#expertise-dropdown-content");

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdownContent.classList.add("hidden");
    }
});

dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownContent.classList.toggle("hidden");
});
