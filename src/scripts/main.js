const targetDate = new Date("2025-07-20T20:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

    if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "A festa começou! 🎉";
    }
}, 1000);
