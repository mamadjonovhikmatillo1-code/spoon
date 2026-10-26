
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");
const cartMessage = document.getElementById("cartMessage");

let cartCount = 0;
let totalPrice = 0;

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        foodCards.forEach(function (card) {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});

document.querySelectorAll(".heart").forEach(function (heart) {
    heart.addEventListener("click", function () {
        heart.classList.toggle("liked");
        heart.textContent = heart.classList.contains("liked") ? "♥" : "♡";
    });
});

document.querySelectorAll(".add-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".food-card");
        const name = card.querySelector("h3").textContent;
        const price = Number(
            card.querySelector(".food-info strong").textContent.replace("$", "")
        );

        cartCount++;
        totalPrice += price;

        cartMessage.textContent =
            name + " added! Items: " + cartCount +
            " | Total: $" + totalPrice.toFixed(2);
    });
});
