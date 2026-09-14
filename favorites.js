const favoritesGrid =
    document.getElementById("favoritesGrid");

const emptyState =
    document.getElementById("emptyState");



function getFavorites() {

    return JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

}


function saveFavorites(favorites) {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}


function displayFavorites() {

    const favorites =
        getFavorites();


    favoritesGrid.innerHTML = "";


    if (favorites.length === 0) {

        emptyState.classList.add("show");

        return;

    }


    emptyState.classList.remove("show");


    favorites.forEach(function (term) {

        const card =
            document.createElement(
                term.link ? "a" : "div"
            );


        card.className = "favorite-card";


        if (term.link) {

            card.href = term.link;

        }


        const firstLetter =
            term.name.charAt(0).toUpperCase();


        card.innerHTML = `

            <span class="favorite-letter">
                ${firstLetter}
            </span>

            <h3>
                ${term.name}
            </h3>

            <p>
                ${term.description}
            </p>

            <button
                class="remove-favorite"
                data-name="${term.name}"
                type="button"
            >
                <i class="fa-solid fa-star"></i>
            </button>

        `;


        favoritesGrid.appendChild(card);

    });

}


favoritesGrid.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".remove-favorite"
            );


        if (!button) {
            return;
        }


        event.preventDefault();


        const name =
            button.dataset.name;


        const favorites =
            getFavorites();


        const updatedFavorites =
            favorites.filter(function (term) {

                return term.name !== name;

            });


        saveFavorites(updatedFavorites);

        displayFavorites();

    }
);


displayFavorites();
