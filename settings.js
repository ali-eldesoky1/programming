const settingsThemeBtn =
    document.getElementById("settingsThemeBtn");

const clearFavorites =
    document.getElementById("clearFavorites");

const clearRecentlyViewed =
    document.getElementById("clearRecentlyViewed");

const resetProgress =
    document.getElementById("resetProgress");

const clearAll =
    document.getElementById("clearAll");


// ================= THEME =================

if (settingsThemeBtn) {

    settingsThemeBtn.addEventListener("click", function () {

        const currentTheme =
            localStorage.getItem("theme") || "dark";

        const newTheme =
            currentTheme === "light"
                ? "dark"
                : "light";

        localStorage.setItem("theme", newTheme);

        location.reload();

    });

}


// ================= FAVORITES =================

if (clearFavorites) {

    clearFavorites.addEventListener("click", function () {

        const confirmed = confirm(
            "Are you sure you want to clear all favorites?"
        );

        if (!confirmed) {
            return;
        }

        localStorage.removeItem("favorites");

        alert("Favorites have been cleared.");

    });

}


// ================= RECENTLY VIEWED =================

if (clearRecentlyViewed) {

    clearRecentlyViewed.addEventListener("click", function () {

        const confirmed = confirm(
            "Are you sure you want to clear recently viewed terms?"
        );

        if (!confirmed) {
            return;
        }

        localStorage.removeItem("recentlyViewed");

        alert("Recently viewed terms have been cleared.");

    });

}


// ================= PROGRESS =================

if (resetProgress) {

    resetProgress.addEventListener("click", function () {

        const confirmed = confirm(
            "Are you sure you want to reset your learning progress?"
        );

        if (!confirmed) {
            return;
        }

        localStorage.removeItem("recentlyViewed");

        alert("Your learning progress has been reset.");

    });

}


// ================= CLEAR ALL =================

if (clearAll) {

    clearAll.addEventListener("click", function () {

        const confirmed = confirm(
            "This will delete all CodeDictionary data saved in this browser. Continue?"
        );

        if (!confirmed) {
            return;
        }

        localStorage.clear();

        alert("All CodeDictionary data has been cleared.");

        location.reload();

    });

}
