const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

document.getElementById("burger-button").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.addEventListener("click", function(event) {
    if (!event.target.closest("header")) {
        document.getElementById("mobile-menu").classList.add("hidden");
    }
});
