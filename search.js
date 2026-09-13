// Get search elements
const searchInput = document.querySelector(".search-box input");
const termCards = document.querySelectorAll(".term-card");


// Search Function
searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    termCards.forEach(function (card) {

        const termName = card.querySelector("h3").textContent.toLowerCase();

        if (termName.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});
