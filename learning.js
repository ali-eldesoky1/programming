const learningCards =
    document.querySelectorAll(".learning-card");


/* ==============================
   Card Animation
============================== */

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


learningCards.forEach(function (card) {

    observer.observe(card);

});
