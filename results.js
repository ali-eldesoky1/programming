/* ==============================
   Get Elements
============================== */

const resultPercent =
    document.getElementById("resultPercent");

const resultCategory =
    document.getElementById("resultCategory");

const resultScore =
    document.getElementById("resultScore");

const resultMessage =
    document.getElementById("resultMessage");

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");

const totalQuestions =
    document.getElementById("totalQuestions");

const scoreCircle =
    document.querySelector(".score-circle");


/* ==============================
   Get Result
============================== */

const result =
    JSON.parse(
        localStorage.getItem("quizResult") || "null"
    );


/* ==============================
   Display Result
============================== */

if (result) {

    const score =
        Number(result.score) || 0;

    const total =
        Number(result.total) || 0;

    const category =
        result.category || "Programming";



    const wrong =
        Math.max(total - score, 0);



    const percent =
        total === 0
            ? 0
            : Math.round(
                (score / total) * 100
            );



    /* ==============================
       Main Result
    ============================== */

    resultPercent.textContent =
        `${percent}%`;


    resultCategory.textContent =
        category;


    resultScore.textContent =
        `${score} / ${total}`;


    correctAnswers.textContent =
        score;


    wrongAnswers.textContent =
        wrong;


    totalQuestions.textContent =
        total;



    /* ==============================
       Result Message
    ============================== */

    if (percent >= 90) {

        resultMessage.textContent =
            "Excellent! You have mastered this quiz. Keep going!";

    }

    else if (percent >= 75) {

        resultMessage.textContent =
            "Great job! Your understanding is getting stronger.";

    }

    else if (percent >= 50) {

        resultMessage.textContent =
            "Good effort! Keep practicing to improve your score.";

    }

    else {

        resultMessage.textContent =
            "Keep learning! Review the topics and try again.";

    }



    /* ==============================
       Score Circle
    ============================== */

    scoreCircle.style.background =
        `conic-gradient(
            #d6b98c ${percent * 3.6}deg,
            rgba(255, 255, 255, 0.08) ${percent * 3.6}deg
        )`;

}


/* ==============================
   No Result
============================== */

else {

    resultPercent.textContent =
        "0%";


    resultCategory.textContent =
        "Programming";


    resultScore.textContent =
        "0 / 0";


    correctAnswers.textContent =
        "0";


    wrongAnswers.textContent =
        "0";


    totalQuestions.textContent =
        "0";


    resultMessage.textContent =
        "No quiz result found. Start a quiz to see your result.";

}
