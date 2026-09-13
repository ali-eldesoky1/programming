const homeSearch = document.querySelector(".search-box input");
const homeSearchButton = document.querySelector(".search-box button");


const searchPages = {

    "html": "html.html",
    "css": "css.html",
    "javascript": "javascript.html",
    "python": "python.html",
    "c#": "csharp.html",
    "java": "java.html",

    "variable": "variable.html",
    "function": "function.html",
    "array": "array.html",
    "loop": "loop.html",
    "condition": "condition.html",
    "dom": "dom.html",
    "bom": "bom.html",

    "hardware": "hardware.html",
    "software": "software.html",
    "cpu": "cpu.html",
    "ram": "ram.html",
    "storage": "storage.html",

    "algorithm": "algorithm.html",
    "compiler": "compiler.html",
    "ide": "ide.html"
};


function searchWebsite() {

    const value = homeSearch.value.toLowerCase().trim();

    if (value === "") {
        alert("Please enter a search term.");
        return;
    }


    if (searchPages[value]) {

        window.location.href = searchPages[value];

    } else {

        alert("No results found.");

    }

}


homeSearchButton.addEventListener("click", searchWebsite);


homeSearch.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        searchWebsite();

    }

});
