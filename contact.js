const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }

    alert("Your message has been sent successfully!");

    contactForm.reset();

});
