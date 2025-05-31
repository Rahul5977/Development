function clock() {
  const timeElement = document.getElementById("time");
  const dateElemet = document.getElementById("date");

  const now = new Date();
  const hours = (now.getHours() % 12 || 12).toString().padStart(2, "0");

  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString(undefined, options);
  dateElemet.textContent = date;
}

setInterval(clock, 1000);

window.onload(clock());
