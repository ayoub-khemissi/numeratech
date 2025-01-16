const expertiseDropdown = document.querySelector("#expertise-dropdown");
const expertiseDropdownContent = expertiseDropdown.querySelector("#expertise-dropdown-content");

const expertiseDropdownMobile = document.querySelector("#expertise-dropdown-mobile");
const expertiseDropdownContentMobile = expertiseDropdownMobile.querySelector("#expertise-dropdown-content-mobile");

document.addEventListener("click", (event) => {
    if (!expertiseDropdown.contains(event.target)) {
        expertiseDropdownContent.classList.add("hidden");
    }

    if (!expertiseDropdownMobile.contains(event.target)) {
        expertiseDropdownContentMobile.classList.add("hidden");
    }
});

expertiseDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    expertiseDropdownContent.classList.toggle("hidden");
});

expertiseDropdownMobile.addEventListener("click", (event) => {
    event.stopPropagation();
    expertiseDropdownContentMobile.classList.toggle("hidden");
});
