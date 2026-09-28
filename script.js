// =========================
// GET ELEMENTS
// =========================

const intro = document.getElementById("intro");
const celebration = document.getElementById("celebration");
const photoSection = document.getElementById("photoSection");
const messageSection = document.getElementById("messageSection");

const blowButton = document.getElementById("blowButton");
const continueButton = document.getElementById("continueButton");
const messageButton = document.getElementById("messageButton");

const flames = document.querySelectorAll(".flame");
const xpProgress = document.querySelector(".xp-progress");


// =========================
// BLOW CANDLES
// =========================

blowButton.addEventListener("click", () => {

    // Turn off candles one by one
    flames.forEach((flame, index) => {

        setTimeout(() => {
            flame.style.display = "none";
        }, index * 250);

    });

    // Start celebration after candles are off
    setTimeout(() => {

        intro.style.display = "none";
        celebration.style.display = "flex";

        // Start XP bar
        setTimeout(() => {
            xpProgress.style.width = "100%";
        }, 300);

        createConfetti();

    }, 1800);

});


// =========================
// CONTINUE TO PHOTO
// =========================

continueButton.addEventListener("click", () => {

    celebration.style.display = "none";
    photoSection.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// VIEW MESSAGE
// =========================

messageButton.addEventListener("click", () => {

    photoSection.style.display = "none";
    messageSection.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// CONFETTI
// =========================

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "✦";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.fontSize =
            Math.random() * 15 + 10 + "px";

        confetti.style.color =
            Math.random() > 0.5
                ? "#00ffff"
                : "#ff4df8";

        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        // Animation
        const fallDuration =
            Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: fallDuration * 1000,
                easing: "linear"
            }
        );


        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, fallDuration * 1000);

    }

}