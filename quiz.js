/* =========================
   Quiz Elements
========================= */

const categoryButtons =
    document.querySelectorAll(".quiz-category");

const quizArea =
    document.getElementById("quizArea");

const resultArea =
    document.getElementById("resultArea");

const quizCategory =
    document.getElementById("quizCategory");

const questionNumber =
    document.getElementById("questionNumber");

const questionProgress =
    document.getElementById("questionProgress");

const questionText =
    document.getElementById("questionText");

const answers =
    document.getElementById("answers");

const nextBtn =
    document.getElementById("nextBtn");

const scoreElement =
    document.getElementById("score");

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");

const resultPercent =
    document.getElementById("resultPercent");

const resultMessage =
    document.getElementById("resultMessage");

const retryBtn =
    document.getElementById("retryBtn");

const backQuizBtn =
    document.getElementById("backQuizBtn");


/* =========================
   Questions
========================= */

const questions = [

    /* =========================
       COMPUTER
    ========================= */

    {
        category: "Computer",
        question: "What does CPU stand for?",
        answers: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing User"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What does RAM stand for?",
        answers: [
            "Random Access Memory",
            "Read Access Machine",
            "Random Application Memory",
            "Rapid Access Module"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "Which component is used for temporary data storage?",
        answers: [
            "RAM",
            "Hard Disk",
            "Monitor",
            "Keyboard"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "Which one is an operating system?",
        answers: [
            "Windows",
            "HTML",
            "CPU",
            "RAM"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What is hardware?",
        answers: [
            "Physical computer components",
            "Computer programs",
            "Internet services",
            "Programming languages"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What is software?",
        answers: [
            "Programs and applications",
            "Physical components",
            "Computer cables",
            "Storage devices"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "How many bits are in one byte?",
        answers: [
            "8",
            "4",
            "16",
            "32"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "Which device is mainly used to display information?",
        answers: [
            "Monitor",
            "Keyboard",
            "Mouse",
            "CPU"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "Which device is mainly used to enter text?",
        answers: [
            "Keyboard",
            "Monitor",
            "Speaker",
            "Printer"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "Which device is used to move the pointer on the screen?",
        answers: [
            "Mouse",
            "Monitor",
            "Printer",
            "Speaker"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What does HDD stand for?",
        answers: [
            "Hard Disk Drive",
            "High Data Device",
            "Hard Data Disk",
            "Hardware Digital Drive"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What does SSD stand for?",
        answers: [
            "Solid State Drive",
            "System Storage Device",
            "Super Storage Disk",
            "Solid System Data"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "Which one is an input device?",
        answers: [
            "Keyboard",
            "Monitor",
            "Speaker",
            "Projector"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "Which one is an output device?",
        answers: [
            "Monitor",
            "Keyboard",
            "Mouse",
            "Scanner"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What is a file?",
        answers: [
            "A collection of stored data",
            "A computer processor",
            "A programming language",
            "A monitor"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What is a folder mainly used for?",
        answers: [
            "Organizing files",
            "Processing data",
            "Displaying images",
            "Running the CPU"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What is binary?",
        answers: [
            "A number system using 0 and 1",
            "A programming language",
            "A type of monitor",
            "A storage device"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What is the smallest unit of digital information?",
        answers: [
            "Bit",
            "Byte",
            "File",
            "Pixel"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "What does OS stand for?",
        answers: [
            "Operating System",
            "Online Service",
            "Open Software",
            "Operating Storage"
        ],
        correct: 0
    },

    {
        category: "Computer",
        question: "Which component connects many computer components together?",
        answers: [
            "Motherboard",
            "Monitor",
            "Keyboard",
            "Mouse"
        ],
        correct: 0
    },


    /* =========================
       PROGRAMMING
    ========================= */

    {
        category: "Programming",
        question: "What is a variable?",
        answers: [
            "A named place used to store a value",
            "A computer screen",
            "A programming language",
            "An operating system"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is an algorithm?",
        answers: [
            "A sequence of steps to solve a problem",
            "A computer component",
            "A type of storage",
            "A web browser"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is a function?",
        answers: [
            "Reusable code that performs a task",
            "A computer device",
            "A file extension",
            "A database"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is an array?",
        answers: [
            "A collection of values",
            "A programming error",
            "A web page",
            "A computer processor"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is a loop used for?",
        answers: [
            "Repeating instructions",
            "Deleting files",
            "Opening a browser",
            "Installing software"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What does debugging mean?",
        answers: [
            "Finding and fixing errors",
            "Writing documentation",
            "Installing an IDE",
            "Creating a database"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is a data type?",
        answers: [
            "A classification of data",
            "A computer cable",
            "A browser",
            "A database server"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What does a condition usually do?",
        answers: [
            "Makes a decision based on a rule",
            "Stores files",
            "Starts the computer",
            "Creates hardware"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is source code?",
        answers: [
            "Code written by a programmer",
            "Machine hardware",
            "A computer monitor",
            "A database"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is syntax?",
        answers: [
            "Rules for writing code correctly",
            "Computer memory",
            "A storage device",
            "An operating system"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is an object?",
        answers: [
            "A structure containing data and behavior",
            "A computer cable",
            "A web browser",
            "A file format"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is a class?",
        answers: [
            "A blueprint for creating objects",
            "A computer processor",
            "A database",
            "A web server"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is an operator?",
        answers: [
            "A symbol used to perform an operation",
            "A programming language",
            "A computer component",
            "A file"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What does return usually do in a function?",
        answers: [
            "Returns a value",
            "Deletes a variable",
            "Creates a loop",
            "Starts the computer"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is a parameter?",
        answers: [
            "A value or variable passed to a function",
            "A computer screen",
            "A file",
            "An operating system"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is an exception?",
        answers: [
            "An event that can interrupt normal program execution",
            "A programming language",
            "A computer monitor",
            "A storage device"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is a Boolean value?",
        answers: [
            "True or false",
            "A text value",
            "A decimal number",
            "A file"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is an integer?",
        answers: [
            "A whole number",
            "A text string",
            "A Boolean value",
            "A file"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is a string?",
        answers: [
            "A sequence of text characters",
            "A whole number",
            "A Boolean value",
            "A loop"
        ],
        correct: 0
    },

    {
        category: "Programming",
        question: "What is recursion?",
        answers: [
            "When a function calls itself",
            "When a program stops",
            "When a variable is deleted",
            "When a file is opened"
        ],
        correct: 0
    },


    /* =========================
       HTML
    ========================= */

    {
        category: "HTML",
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag is used for the largest heading?",
        answers: [
            "<h1>",
            "<h6>",
            "<head>",
            "<title>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag creates a paragraph?",
        answers: [
            "<p>",
            "<paragraph>",
            "<text>",
            "<para>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag is used to create a link?",
        answers: [
            "<a>",
            "<link>",
            "<url>",
            "<href>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which attribute specifies an image source?",
        answers: [
            "src",
            "href",
            "alt",
            "link"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which attribute provides alternative text for an image?",
        answers: [
            "alt",
            "src",
            "title",
            "text"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag is used to create an unordered list?",
        answers: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag represents a list item?",
        answers: [
            "<li>",
            "<item>",
            "<list>",
            "<ul>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag creates a line break?",
        answers: [
            "<br>",
            "<break>",
            "<lb>",
            "<line>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag is used to display an image?",
        answers: [
            "<img>",
            "<image>",
            "<picture>",
            "<src>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which attribute is commonly used to identify an element uniquely?",
        answers: [
            "id",
            "class",
            "name",
            "unique"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which attribute is used to assign one or more CSS classes?",
        answers: [
            "class",
            "style",
            "css",
            "group"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag contains the visible page content?",
        answers: [
            "<body>",
            "<head>",
            "<html>",
            "<main>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag contains metadata and links to resources?",
        answers: [
            "<head>",
            "<body>",
            "<main>",
            "<meta>"
        ],
        correct: 0
    },

    {
        category: "HTML",
        question: "Which tag is used for a table row?",
        answers: [
            "<tr>",
            "<td>",
            "<th>",
            "<row>"
        ],
        correct: 0
    },


    /* =========================
       CSS
    ========================= */

    {
        category: "CSS",
        question: "What does CSS stand for?",
        answers: [
            "Cascading Style Sheets",
            "Computer Style System",
            "Creative Style Sheets",
            "Colorful Style Syntax"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property changes text color?",
        answers: [
            "color",
            "text-color",
            "font-color",
            "foreground"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property changes the background color?",
        answers: [
            "background-color",
            "bg-color",
            "background",
            "color-background"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property changes the text size?",
        answers: [
            "font-size",
            "text-size",
            "size",
            "font-height"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property makes an element a flex container?",
        answers: [
            "display: flex",
            "flex: display",
            "position: flex",
            "layout: flex"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property controls the space inside an element?",
        answers: [
            "padding",
            "margin",
            "spacing",
            "inside"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property controls the space outside an element?",
        answers: [
            "margin",
            "padding",
            "outside",
            "space"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property changes the font?",
        answers: [
            "font-family",
            "text-family",
            "font-style-name",
            "typeface"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property rounds the corners of an element?",
        answers: [
            "border-radius",
            "corner-radius",
            "radius",
            "border-corner"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property controls an element's transparency?",
        answers: [
            "opacity",
            "transparent",
            "visibility",
            "alpha"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which selector targets an element by ID?",
        answers: [
            "#id",
            ".id",
            "@id",
            "*id"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which selector targets elements by class?",
        answers: [
            ".class",
            "#class",
            "@class",
            "*class"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property changes the width of an element?",
        answers: [
            "width",
            "size",
            "element-width",
            "box-width"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property changes the height of an element?",
        answers: [
            "height",
            "size-height",
            "element-height",
            "box-height"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Which property controls the order of flex items?",
        answers: [
            "order",
            "flex-ordering",
            "position-order",
            "item-order"
        ],
        correct: 0
    },


    /* =========================
       JAVASCRIPT
    ========================= */

    {
        category: "JavaScript",
        question: "What is JavaScript mainly used for?",
        answers: [
            "Adding behavior and interactivity to web pages",
            "Creating computer hardware",
            "Managing electricity",
            "Designing processors"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which keyword can declare a variable?",
        answers: [
            "let",
            "variable",
            "define",
            "value"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which symbol is used for a single-line comment?",
        answers: [
            "//",
            "##",
            "<!--",
            "**"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which method selects an element by its ID?",
        answers: [
            "getElementById()",
            "getById()",
            "selectId()",
            "findId()"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which method adds an event listener?",
        answers: [
            "addEventListener()",
            "addEvent()",
            "eventListener()",
            "listenEvent()"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which keyword declares a constant?",
        answers: [
            "const",
            "constant",
            "fixed",
            "static"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which keyword was traditionally used to declare variables?",
        answers: [
            "var",
            "let",
            "value",
            "define"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which method changes the text content of an element?",
        answers: [
            "textContent",
            "changeText()",
            "innerTextOnly()",
            "textChange()"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which method selects the first matching CSS selector?",
        answers: [
            "querySelector()",
            "selectFirst()",
            "getSelector()",
            "findSelector()"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which method runs a function for every array element?",
        answers: [
            "forEach()",
            "forEvery()",
            "eachItem()",
            "loopArray()"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which property returns the number of items in an array?",
        answers: [
            "length",
            "size",
            "count",
            "items"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which symbol is used for strict equality?",
        answers: [
            "===",
            "==",
            "=",
            "!=="
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which method converts JSON text into a JavaScript object?",
        answers: [
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()",
            "JSON.toObject()"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "Which method converts a JavaScript object into JSON text?",
        answers: [
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.text()",
            "JSON.toStringObject()"
        ],
        correct: 0
    },

    {
        category: "JavaScript",
        question: "What does localStorage provide?",
        answers: [
            "Browser storage for data",
            "A database server",
            "A CSS framework",
            "A programming language"
        ],
        correct: 0
    },


    /* =========================
       C#
    ========================= */

    {
        category: "C#",
        question: "Which language is C#?",
        answers: [
            "A programming language",
            "A database",
            "An operating system",
            "A web browser"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which statement prints a line in C#?",
        answers: [
            "Console.WriteLine()",
            "Console.PrintLine()",
            "Print.WriteLine()",
            "Console.Output()"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which statement prints text without moving to a new line?",
        answers: [
            "Console.Write()",
            "Console.WriteLine()",
            "Console.Print()",
            "Console.Output()"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which type stores whole numbers?",
        answers: [
            "int",
            "string",
            "bool",
            "char"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which type stores true or false?",
        answers: [
            "bool",
            "int",
            "float",
            "char"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which type stores text?",
        answers: [
            "string",
            "int",
            "bool",
            "float"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which type stores a single character?",
        answers: [
            "char",
            "string",
            "int",
            "bool"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which type is commonly used for decimal numbers?",
        answers: [
            "float",
            "int",
            "bool",
            "char"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which method reads a complete line from the console?",
        answers: [
            "Console.ReadLine()",
            "Console.ReadText()",
            "Console.InputLine()",
            "Console.GetLine()"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which method reads a character from the console?",
        answers: [
            "Console.Read()",
            "Console.ReadChar()",
            "Console.GetChar()",
            "Console.Input()"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which method converts text to an integer?",
        answers: [
            "Convert.ToInt32()",
            "Convert.ToInteger()",
            "Convert.ToNumber()",
            "Convert.Int()"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which method converts a value to Boolean?",
        answers: [
            "Convert.ToBoolean()",
            "Convert.ToBoolValue()",
            "Convert.Boolean()",
            "Convert.ToTrueFalse()"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which method converts a value to a character?",
        answers: [
            "Convert.ToChar()",
            "Convert.Char()",
            "Convert.ToCharacter()",
            "Convert.Character()"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which command creates a new console project with .NET?",
        answers: [
            "dotnet new console",
            "dotnet create console",
            "new dotnet console",
            "console new dotnet"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which command runs a .NET project?",
        answers: [
            "dotnet run",
            "dotnet start",
            "dotnet execute",
            "run dotnet"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which symbol ends most C# statements?",
        answers: [
            ";",
            ":",
            ".",
            ","
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which keyword is used to make a decision?",
        answers: [
            "if",
            "check",
            "condition",
            "when"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which loop is commonly used when the number of repetitions is known?",
        answers: [
            "for",
            "repeat",
            "loop",
            "again"
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which operator means logical AND?",
        answers: [
            "&&",
            "||",
            "!",
            "&="
        ],
        correct: 0
    },

    {
        category: "C#",
        question: "Which operator means logical OR?",
        answers: [
            "||",
            "&&",
            "!",
            "??="
        ],
        correct: 0
    },


    /* =========================
       PYTHON
    ========================= */

    {
        category: "Python",
        question: "What is Python?",
        answers: [
            "A programming language",
            "An operating system",
            "A database",
            "A web browser"
        ],
        correct: 0
    },

    {
        category: "Python",
        question: "Which symbol starts a comment in Python?",
        answers: [
            "#",
            "//",
            "<!--",
            "/*"
        ],
        correct: 0
    },

    {
        category: "Python",
        question: "Which function prints output in Python?",
        answers: [
            "print()",
            "write()",
            "console()",
            "output()"
        ],
        correct: 0
    },

    {
        category: "Python",
        question: "Which data structure is ordered and changeable?",
        answers: [
            "List",
            "Tuple",
            "String",
            "Integer"
        ],
        correct: 0
    },

    {
        category: "Python",
        question: "Which data structure is ordered and generally immutable?",
        answers: [
            "Tuple",
            "List",
            "Dictionary",
            "Set"
        ],
        correct: 0
    },

    {
        category: "Python",
        question: "Which keyword defines a function in Python?",
        answers: [
            "def",
            "function",
            "func",
            "define"
        ],
        correct: 0
    },

    {
        category: "Python",
        question: "Which keyword is used for a condition?",
        answers: [
            "if",
            "when",
            "check",
            "condition"
        ],
        correct: 0
    },

    {
        category: "Python",
        question: "Which function returns the number of items?",
        answers: [
            "len()",
            "count()",
            "size()",
            "length()"
        ],
        correct: 0
    },


    /* =========================
       TOOLS
    ========================= */

    {
        category: "Tools",
        question: "What is Git?",
        answers: [
            "A version control system",
            "A programming language",
            "A database",
            "A web browser"
        ],
        correct: 0
    },

    {
        category: "Tools",
        question: "What is GitHub mainly used for?",
        answers: [
            "Hosting and managing code repositories",
            "Editing photos",
            "Creating operating systems",
            "Running hardware"
        ],
        correct: 0
    },

    {
        category: "Tools",
        question: "What is a repository?",
        answers: [
            "A place where project files and history are stored",
            "A computer processor",
            "A browser",
            "A programming language"
        ],
        correct: 0
    },

    {
        category: "Tools",
        question: "What does IDE stand for?",
        answers: [
            "Integrated Development Environment",
            "Internet Development Engine",
            "Integrated Data Editor",
            "Internal Design Environment"
        ],
        correct: 0
    },

    {
        category: "Tools",
        question: "What is a terminal?",
        answers: [
            "A text-based interface for executing commands",
            "A computer monitor",
            "A database",
            "A programming language"
        ],
        correct: 0
    },

    {
        category: "Tools",
        question: "What is version control used for?",
        answers: [
            "Tracking changes in a project",
            "Increasing RAM",
            "Designing websites",
            "Formatting a hard disk"
        ],
        correct: 0
    }

];


/* =========================
   Quiz State
========================= */

let currentQuestions = [];

let currentQuestionIndex = 0;

let score = 0;

let selectedAnswer = null;

let selectedCategory = "Programming";


/* =========================
   Shuffle Array
========================= */

function shuffle(array) {

    const shuffled =
        array.slice();

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[j]
        ] = [
            shuffled[j],
            shuffled[i]
        ];

    }

    return shuffled;

}


/* =========================
   Shuffle Question Answers
========================= */

function prepareQuestion(question) {

    const preparedAnswers =
        question.answers.map(
            function (answer, index) {

                return {
                    text: answer,
                    correct:
                        index === question.correct
                };

            }
        );


    const shuffledAnswers =
        shuffle(preparedAnswers);


    return {

        question: question.question,

        answers:
            shuffledAnswers.map(
                function (answer) {

                    return answer.text;

                }
            ),

        correct:
            shuffledAnswers.findIndex(
                function (answer) {

                    return answer.correct;

                }
            )

    };

}


/* =========================
   Start Quiz
========================= */

function startQuiz(category) {

    selectedCategory =
        category;


    const categoryQuestions =
        questions.filter(
            function (question) {

                return question.category === category;

            }
        );


    currentQuestions =
        shuffle(
            categoryQuestions
        ).map(
            function (question) {

                return prepareQuestion(
                    question
                );

            }
        );


    currentQuestionIndex = 0;

    score = 0;

    selectedAnswer = null;


    if (
        currentQuestions.length === 0
    ) {

        return;

    }


    quizCategory.textContent =
        category;


    quizArea.classList.add("show");

    resultArea.classList.remove(
        "show"
    );


    quizArea.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });


    displayQuestion();

}


/* =========================
   Display Question
========================= */

function displayQuestion() {

    selectedAnswer = null;

    nextBtn.disabled = true;


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    questionText.textContent =
        question.question;


    questionNumber.textContent =
        `${currentQuestionIndex + 1} / ${currentQuestions.length}`;


    const percent =
        (
            currentQuestionIndex /
            currentQuestions.length
        ) * 100;


    questionProgress.style.width =
        `${percent}%`;


    answers.innerHTML = "";


    question.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-btn";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        button,
                        index
                    );

                }
            );


            answers.appendChild(
                button
            );

        }
    );

}


/* =========================
   Select Answer
========================= */

function selectAnswer(
    button,
    index
) {

    if (
        selectedAnswer !== null
    ) {

        return;

    }


    selectedAnswer =
        index;


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    const answerButtons =
        document.querySelectorAll(
            ".answer-btn"
        );


    answerButtons.forEach(
        function (
            answerButton,
            buttonIndex
        ) {

            answerButton.disabled =
                true;


            if (
                buttonIndex ===
                question.correct
            ) {

                answerButton.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        index ===
        question.correct
    ) {

        score++;

    } else {

        button.classList.add(
            "wrong"
        );

    }


    nextBtn.disabled =
        false;

}


/* =========================
   Next Question
========================= */

nextBtn.addEventListener(
    "click",
    function () {

        if (
            selectedAnswer === null
        ) {

            return;

        }


        currentQuestionIndex++;


        if (
            currentQuestionIndex >=
            currentQuestions.length
        ) {

            finishQuiz();

            return;

        }


        displayQuestion();

    }
);


/* =========================
   Finish Quiz
========================= */

function finishQuiz() {

    quizArea.classList.remove(
        "show"
    );


    resultArea.classList.add(
        "show"
    );


    const total =
        currentQuestions.length;


    const percent =
        Math.round(
            (score / total) * 100
        );


    scoreElement.textContent =
        score;


    correctAnswers.textContent =
        score;


    wrongAnswers.textContent =
        total - score;


    resultPercent.textContent =
        `${percent}%`;


    questionProgress.style.width =
        "100%";


    if (
        percent === 100
    ) {

        resultMessage.textContent =
            "Perfect score! Excellent work! 🏆";

    } else if (
        percent >= 80
    ) {

        resultMessage.textContent =
            "Excellent result! Keep going! 🚀";

    } else if (
        percent >= 60
    ) {

        resultMessage.textContent =
            "Good job! A little more practice will make you stronger.";

    } else if (
        percent >= 40
    ) {

        resultMessage.textContent =
            "Nice attempt! Review the topics and try again.";

    } else {

        resultMessage.textContent =
            "Keep learning and don't give up. Every attempt makes you better! 💪";

    }


    saveQuizResult(
        selectedCategory,
        score,
        total,
        percent
    );


    resultArea.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================
   Save Result
========================= */

function saveQuizResult(
    category,
    score,
    total,
    percent
) {

    const results =
        JSON.parse(
            localStorage.getItem(
                "quizResults"
            ) || "[]"
        );


    results.push({

        category: category,

        score: score,

        total: total,

        percent: percent,

        date:
            new Date().toISOString()

    });


    localStorage.setItem(
        "quizResults",
        JSON.stringify(results)
    );

}


/* =========================
   Category Buttons
========================= */

categoryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const category =
                    button.dataset.category;


                startQuiz(
                    category
                );

            }
        );

    }
);


/* =========================
   Retry
========================= */

retryBtn.addEventListener(
    "click",
    function () {

        startQuiz(
            selectedCategory
        );

    }
);


/* =========================
   Back
========================= */

backQuizBtn.addEventListener(
    "click",
    function () {

        resultArea.classList.remove(
            "show"
        );


        quizArea.classList.remove(
            "show"
        );


        document.querySelector(
            ".quiz-section"
        ).scrollIntoView({

            behavior: "smooth"

        });

    }
);
