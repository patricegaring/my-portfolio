/* ================= PERSONALIZED GREETING ================= */

const helloButton = document.getElementById("helloButton");
const visitorName = document.getElementById("visitorName");
const messageResult = document.getElementById("messageResult");

if (helloButton) {

    helloButton.addEventListener("click", function () {

        const name = visitorName.value.trim();

        if (name === "") {

            messageResult.textContent =
                "Please enter your name.";

            messageResult.classList.remove("text-success");
            messageResult.classList.add("text-danger");

            return;
        }

        messageResult.textContent =
            `Hi, ${name}! Welcome to Patrice's portfolio!`;

        messageResult.classList.remove("text-danger");
        messageResult.classList.add("text-success");

    });

}


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formResult.textContent =
            "Thank you! Your message has been sent successfully.";

        formResult.classList.remove("text-danger");
        formResult.classList.add("text-success");

        contactForm.reset();

    });

}


/* ================= DARK / LIGHT MODE ================= */

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const icon = themeButton.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {

            icon.classList.remove("bi-moon-fill");
            icon.classList.add("bi-sun-fill");

            themeButton.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            icon.classList.remove("bi-sun-fill");
            icon.classList.add("bi-moon-fill");

            themeButton.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

        }

    });

}


/* ================= NAVBAR ACTIVE LINK ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});