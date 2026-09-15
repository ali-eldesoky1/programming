const language = document.getElementById("language");

const codeEditor = document.getElementById("codeEditor");

const preview = document.getElementById("preview");

const consoleOutput =
    document.getElementById("consoleOutput");

const lineNumbers =
    document.getElementById("lineNumbers");

const lineCount =
    document.getElementById("lineCount");

const runBtn =
    document.getElementById("runBtn");

const clearBtn =
    document.getElementById("clearBtn");

const resetBtn =
    document.getElementById("resetBtn");

const copyBtn =
    document.getElementById("copyBtn");

const downloadBtn =
    document.getElementById("downloadBtn");

const fullscreenBtn =
    document.getElementById("fullscreenBtn");

const refreshPreview =
    document.getElementById("refreshPreview");

const clearConsole =
    document.getElementById("clearConsole");

const playgroundContainer =
    document.querySelector(".playground-container");


/* ================= DEFAULT CODE ================= */

const defaultCode = {

    html: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>

<body>

    <h1>Hello CodeDictionary!</h1>

    <p>Start writing your HTML code.</p>

</body>
</html>`,

    css: `body {
    font-family: Arial;
    background: #202020;
    color: white;
    text-align: center;
    padding: 50px;
}

h1 {
    color: #d6b98c;
}`,

    javascript: `console.log("Hello CodeDictionary!");

const name = "Developer";

console.log("Welcome " + name);`
};


/* ================= LOAD CODE ================= */

function loadCode() {

    const savedCode =
        localStorage.getItem(
            "playground-" + language.value
        );

    if (savedCode !== null) {

        codeEditor.value = savedCode;

    } else {

        codeEditor.value =
            defaultCode[language.value];

    }

    updateLineNumbers();

    runCode();
}


/* ================= SAVE CODE ================= */

function saveCode() {

    localStorage.setItem(
        "playground-" + language.value,
        codeEditor.value
    );
}


/* ================= LINE NUMBERS ================= */

function updateLineNumbers() {

    const lines =
        codeEditor.value.split("\n").length;

    let numbers = "";

    for (let i = 1; i <= lines; i++) {

        numbers +=
            `<div>${i}</div>`;

    }

    lineNumbers.innerHTML = numbers;

    lineCount.textContent =
        `${lines} ${lines === 1 ? "line" : "lines"}`;
}


/* ================= CONSOLE ================= */

function clearConsoleOutput() {

    consoleOutput.innerHTML = "";

}


function addConsoleMessage(message) {

    const line =
        document.createElement("div");

    line.className = "console-line";

    line.textContent = message;

    consoleOutput.appendChild(line);

    consoleOutput.scrollTop =
        consoleOutput.scrollHeight;
}


function addConsoleError(message) {

    const line =
        document.createElement("div");

    line.className = "console-line console-error";

    line.textContent = message;

    consoleOutput.appendChild(line);
}


/* ================= RUN HTML ================= */

function runHTML() {

    preview.srcdoc = codeEditor.value;

}


/* ================= RUN CSS ================= */

function runCSS() {

    const html = `<!DOCTYPE html>

<html>

<head>

<style>

${codeEditor.value}

</style>

</head>

<body>

<h1>CSS Preview</h1>

<p>Edit the CSS code to style this page.</p>

<div class="box">
    CodeDictionary
</div>

</body>

</html>`;

    preview.srcdoc = html;
}


/* ================= RUN JAVASCRIPT ================= */

function runJavaScript() {

    clearConsoleOutput();

    const script = codeEditor.value;

    const safeScript = script.replace(
        /<\/script>/gi,
        "<\\/script>"
    );

    const html = `<!DOCTYPE html>

<html>

<head>

<style>

body {
    font-family: Arial;
    background: #202020;
    color: white;
    padding: 30px;
}

</style>

</head>

<body>

<h2>JavaScript Preview</h2>

<p>Open the Console panel to see console.log() output.</p>

<script>

const originalLog = console.log;

console.log = function(...args) {

    window.parent.postMessage(
        {
            type: "playground-console",
            message: args
                .map(item => {
                    try {
                        return typeof item === "object"
                            ? JSON.stringify(item)
                            : String(item);
                    } catch {
                        return String(item);
                    }
                })
                .join(" ")
        },
        "*"
    );

    originalLog.apply(console, args);

};

try {

${safeScript}

} catch (error) {

    window.parent.postMessage(
        {
            type: "playground-error",
            message: error.message
        },
        "*"
    );

}

<\/script>

</body>

</html>`;

    preview.srcdoc = html;
}


/* ================= RUN ================= */

function runCode() {

    saveCode();

    clearConsoleOutput();

    const selectedLanguage =
        language.value;

    if (selectedLanguage === "html") {

        runHTML();

        addConsoleMessage(
            "HTML preview updated."
        );

    }

    else if (selectedLanguage === "css") {

        runCSS();

        addConsoleMessage(
            "CSS preview updated."
        );

    }

    else if (selectedLanguage === "javascript") {

        runJavaScript();

    }
}


/* ================= LANGUAGE CHANGE ================= */

language.addEventListener(
    "change",
    function () {

        loadCode();

    }
);


/* ================= EDITOR ================= */

codeEditor.addEventListener(
    "input",
    function () {

        updateLineNumbers();

        saveCode();

    }
);


/* ================= TAB SUPPORT ================= */

codeEditor.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Tab") {
            return;
        }

        event.preventDefault();

        const start =
            codeEditor.selectionStart;

        const end =
            codeEditor.selectionEnd;

        codeEditor.value =
            codeEditor.value.substring(0, start) +
            "    " +
            codeEditor.value.substring(end);

        codeEditor.selectionStart =
            start + 4;

        codeEditor.selectionEnd =
            start + 4;

        updateLineNumbers();

        saveCode();

    }
);


/* ================= CTRL + ENTER ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            runCode();

        }

    }
);


/* ================= CTRL + S ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.ctrlKey &&
            event.key.toLowerCase() === "s"
        ) {

            event.preventDefault();

            saveCode();

            addConsoleMessage(
                "Code saved."
            );

        }

    }
);


/* ================= CLEAR ================= */

clearBtn.addEventListener(
    "click",
    function () {

        codeEditor.value = "";

        updateLineNumbers();

        saveCode();

        preview.srcdoc = "";

        clearConsoleOutput();

    }
);


/* ================= RESET ================= */

resetBtn.addEventListener(
    "click",
    function () {

        const confirmed =
            confirm(
                "Reset the current code to the default example?"
            );

        if (!confirmed) {
            return;
        }

        codeEditor.value =
            defaultCode[language.value];

        updateLineNumbers();

        saveCode();

        runCode();

    }
);


/* ================= COPY ================= */

copyBtn.addEventListener(
    "click",
    async function () {

        try {

            await navigator.clipboard.writeText(
                codeEditor.value
            );

            copyBtn.innerHTML =
                '<i class="fa-solid fa-check"></i> Copied';

            setTimeout(
                function () {

                    copyBtn.innerHTML =
                        '<i class="fa-regular fa-copy"></i> Copy';

                },
                1500
            );

        }

        catch (error) {

            alert(
                "Could not copy the code."
            );

        }

    }
);


/* ================= DOWNLOAD ================= */

downloadBtn.addEventListener(
    "click",
    function () {

        let extension = "txt";

        if (language.value === "html") {
            extension = "html";
        }

        else if (language.value === "css") {
            extension = "css";
        }

        else if (language.value === "javascript") {
            extension = "js";
        }

        const file =
            new Blob(
                [codeEditor.value],
                {
                    type: "text/plain"
                }
            );

        const url =
            URL.createObjectURL(file);

        const link =
            document.createElement("a");

        link.href = url;

        link.download =
            `code-${language.value}.${extension}`;

        link.click();

        URL.revokeObjectURL(url);

    }
);


/* ================= REFRESH PREVIEW ================= */

refreshPreview.addEventListener(
    "click",
    function () {

        runCode();

    }
);


/* ================= CLEAR CONSOLE ================= */

clearConsole.addEventListener(
    "click",
    function () {

        clearConsoleOutput();

    }
);


/* ================= FULLSCREEN ================= */

fullscreenBtn.addEventListener(
    "click",
    function () {

        playgroundContainer.classList.toggle(
            "fullscreen"
        );

        const icon =
            fullscreenBtn.querySelector("i");

        if (
            playgroundContainer.classList.contains(
                "fullscreen"
            )
        ) {

            icon.className =
                "fa-solid fa-compress";

        } else {

            icon.className =
                "fa-solid fa-expand";

        }

    }
);


/* ================= SYNC LINE NUMBERS ================= */

codeEditor.addEventListener(
    "scroll",
    function () {

        lineNumbers.scrollTop =
            codeEditor.scrollTop;

    }
);


/* ================= CONSOLE MESSAGES ================= */

window.addEventListener(
    "message",
    function (event) {

        if (!event.data) {
            return;
        }

        if (
            event.data.type ===
            "playground-console"
        ) {

            addConsoleMessage(
                event.data.message
            );

        }

        if (
            event.data.type ===
            "playground-error"
        ) {

            addConsoleError(
                event.data.message
            );

        }

    }
);


/* ================= START ================= */

loadCode();


runBtn.addEventListener("click", runCode);