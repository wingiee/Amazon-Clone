// window.addEventListener("load", startCountdown);

// Countdown Timer Function
function startCountdown(durationInMilliseconds) {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Calculate the end time based on the duration
    const endTime = new Date().getTime() + durationInMilliseconds;

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        // If time is up, stop the timer
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "<p>Deal Expired!</p>";
            return;
        }

        // Calculate hours, minutes, and seconds
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the timer on the page
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to set the timer immediately
}

// Start the countdown for 12 hours (12 * 60 * 60 * 1000 milliseconds)
startCountdown(12 * 60 * 60 * 1000);
