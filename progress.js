const overallPercent =
    document.getElementById("overallPercent");

const overallFill =
    document.getElementById("overallFill");

const viewedCount =
    document.getElementById("viewedCount");

const remainingCount =
    document.getElementById("remainingCount");

const totalCount =
    document.getElementById("totalCount");

const categoryGrid =
    document.getElementById("categoryGrid");

const resetButton =
    document.getElementById("resetProgress");


/* ==============================
   Dictionary Categories
============================== */

const categories = [
    {
        name: "Computer",
        icon: "fa-solid fa-computer",
        terms: [
            "Hardware",
            "Software",
            "CPU",
            "RAM",
            "Storage",
            "Motherboard",
            "Operating System",
            "Binary",
            "Bit",
            "Data",
            "Information",
            "File",
            "Folder",
            "Network",
            "Internet",
            "Cache",
            "Kernel"
        ]
    },

    {
        name: "Programming",
        icon: "fa-solid fa-code",
        terms: [
            "Algorithm",
            "Variable",
            "Data Type",
            "Function",
            "Array",
            "Object",
            "Condition",
            "Loop",
            "Operator",
            "Input",
            "Output",
            "Compiler",
            "Debugging",
            "Exception",
            "Class",
            "Method",
            "Parameter",
            "Return",
            "Keyword",
            "Syntax",
            "Expression",
            "String",
            "Integer",
            "Boolean",
            "Recursion",
            "Type Casting"
        ]
    },

    {
        name: "Web",
        icon: "fa-solid fa-globe",
        terms: [
            "HTML",
            "CSS",
            "Element",
            "Tag",
            "Attribute",
            "ID",
            "Selector",
            "Frontend",
            "Backend",
            "Browser",
            "Website",
            "Domain",
            "URL",
            "HTTP",
            "HTTPS",
            "Client",
            "Server",
            "Link",
            "Local Storage"
        ]
    },

    {
        name: "JavaScript",
        icon: "fa-brands fa-js",
        terms: [
            "JavaScript",
            "DOM",
            "BOM",
            "Node.js",
            "JSON"
        ]
    },

    {
        name: "Python",
        icon: "fa-brands fa-python",
        terms: [
            "Python",
            "List",
            "Tuple",
            "Module"
        ]
    },

    {
        name: "C#",
        icon: "fa-solid fa-hashtag",
        terms: [
            "C#"
        ]
    },

    {
        name: "Java",
        icon: "fa-brands fa-java",
        terms: [
            "Java"
        ]
    },

    {
        name: "Tools",
        icon: "fa-solid fa-toolbox",
        terms: [
            "Git",
            "GitHub",
            "Repository",
            "Version Control",
            "IDE",
            "Terminal"
        ]
    }
];


/* ==============================
   Get Viewed Terms
============================== */

function getViewedTerms() {

    return JSON.parse(
        localStorage.getItem("recentlyViewed") || "[]"
    );

}


/* ==============================
   Display Overall Progress
============================== */

function displayOverall() {

    const viewed =
        getViewedTerms();


    const uniqueViewed =
        [
            ...new Set(
                viewed.map(function (item) {

                    return typeof item === "string"
                        ? item
                        : item.name;

                })
            )
        ];


    const totalTerms =
        categories.reduce(
            function (total, category) {

                return total + category.terms.length;

            },
            0
        );


    const viewedTerms =
        uniqueViewed.filter(function (name) {

            return categories.some(
                function (category) {

                    return category.terms.includes(name);

                }
            );

        });


    const viewed =
        viewedTerms.length;


    const remaining =
        Math.max(totalTerms - viewed, 0);


    const percent =
        totalTerms === 0
            ? 0
            : Math.round(
                (viewed / totalTerms) * 100
            );


    viewedCount.textContent =
        viewed;

    remainingCount.textContent =
        remaining;

    totalCount.textContent =
        totalTerms;

    overallPercent.textContent =
        `${percent}%`;

    overallFill.style.width =
        `${percent}%`;

}


/* ==============================
   Display Categories
============================== */

function displayCategories() {

    const viewed =
        getViewedTerms();


    const viewedNames =
        viewed.map(function (item) {

            return typeof item === "string"
                ? item
                : item.name;

        });


    categoryGrid.innerHTML = "";


    categories.forEach(function (category) {

        const categoryViewed =
            category.terms.filter(function (term) {

                return viewedNames.includes(term);

            }).length;


        const percent =
            category.terms.length === 0
                ? 0
                : Math.round(
                    (categoryViewed /
                        category.terms.length) * 100
                );


        const card =
            document.createElement("div");


        card.className =
            "category-card";


        card.innerHTML = `

            <div class="category-top">

                <div class="category-name">

                    <i class="${category.icon}"></i>

                    <span>
                        ${category.name}
                    </span>

                </div>

                <span class="category-percent">
                    ${percent}%
                </span>

            </div>


            <div class="category-bar">

                <div
                    class="category-fill"
                    style="width: ${percent}%"
                ></div>

            </div>


            <div class="category-count">

                ${categoryViewed}
                / ${category.terms.length}
                terms viewed

            </div>

        `;


        categoryGrid.appendChild(card);

    });

}


/* ==============================
   Reset Progress
============================== */

resetButton.addEventListener(
    "click",
    function () {

        const confirmed =
            confirm(
                "Are you sure you want to reset your progress?"
            );


        if (!confirmed) {
            return;
        }


        localStorage.removeItem(
            "recentlyViewed"
        );


        displayOverall();
        displayCategories();

    }
);


/* ==============================
   Start
============================== */

displayOverall();

displayCategories();
