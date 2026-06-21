// تاریخ و ساعت مراسم
let weddingDate = new Date("2025-02-20 19:00:00").getTime();

let timer = setInterval(function () {
    let now = new Date().getTime();
    let diff = weddingDate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // اگر زمان گذشته باشد
    if (diff < 0) {
        clearInterval(timer);

        // جایگزینی شمارش با متن
        document.getElementById("countdown").innerHTML =
            '<div class="event-ended">🎉 مراسم برگزار شد!</div>';
    }

}, 1000);