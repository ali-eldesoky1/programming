const themeBtn = document.getElementById("themeBtn");


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}


// Update icon
function updateThemeIcon() {

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

}


// Change theme
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

    } else {

        localStorage.setItem("theme", "dark");

    }


    updateThemeIcon();

});


// Initial icon
updateThemeIcon();
