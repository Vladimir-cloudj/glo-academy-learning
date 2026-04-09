
const greetingEl = document.getElementById("greeting");
const dateEl = document.getElementById("date");
const clockEl = document.getElementById("clock");
const newYearEl = document.getElementById("new-year");

function updateTime() {
  const now = new Date();

  const currentHour = now.getHours();
  let greeting = "";
  // --- Приветствие ---
  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Доброе утро";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Добрый день";
  } else if (currentHour >= 18 && currentHour < 23) {
    greeting = "Добрый вечер";
  } else {
    greeting = "Доброй ночи";
  }
  greetingEl.textContent = greeting + "!";

  // --- День недели ---
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const dayName = days[now.getDay()];
  dateEl.textContent = "Сегодня: " + dayName;

  // --- Текущее время ---
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }
  if (h === 0) {
    h = 12;
  }

  clockEl.textContent = `Текущее время: ${addZero(h)}:${addZero(m)}:${addZero(
    s
  )} ${ampm}`;

  // --- До Нового года ---
  const currentYear = now.getFullYear();
  const nextNewYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);

  let diff = nextNewYear - now;
  let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (daysLeft <= 0) {
    if (currentHour < 1) {
      daysLeft = 0;
    } else {
      const nextNextNewYear = new Date(
        `January 1, ${currentYear + 2} 00:00:00`
      );
      diff = nextNextNewYear - now;
      daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
  }

  newYearEl.textContent = `До нового года осталось ${daysLeft} дней`;
}

function addZero(num) {
  return num < 10 ? "0" + num : num;
}

updateTime();

setInterval(updateTime, 1000);
