/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


menuToggle.addEventListener(
    "click",
    function () {

        mainNav.classList.toggle("active");

        if (
            mainNav.classList.contains("active")
        ) {

            menuToggle.textContent = "×";

        } else {

            menuToggle.textContent = "☰";

        }

    }
);


/* Close menu when user clicks a link */

document
    .querySelectorAll("#mainNav a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mainNav.classList.remove("active");

                menuToggle.textContent = "☰";

            }
        );

    });



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();



/* =====================================================
   WHATSAPP EVENT ENQUIRY
===================================================== */

document
    .getElementById("enquiryForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const eventType =
                document
                    .getElementById("eventType")
                    .value;


            const eventDate =
                document
                    .getElementById("eventDate")
                    .value
                    ||
                    "Not specified";


            const location =
                document
                    .getElementById("location")
                    .value
                    .trim()
                    ||
                    "Not specified";


            const guests =
                document
                    .getElementById("guests")
                    .value
                    .trim()
                    ||
                    "Not specified";


            const budget =
                document
                    .getElementById("budget")
                    .value
                    ||
                    "Not specified";


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim()
                    ||
                    "No additional requirements";



            const whatsappMessage =

`Hello Kalpavriksha Sambhrama,

I would like to discuss an event.

Name: ${name}

Phone: ${phone}

Event Type: ${eventType}

Event Date: ${eventDate}

Venue / City: ${location}

Number of Guests: ${guests}

Budget: ${budget}

Requirements:

${message}`;



            const whatsappURL =

                "https://wa.me/916366002119?text=" +

                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );