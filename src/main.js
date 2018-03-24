const days = [1, 1, 2, 2, 3, 3, 4, 4];
const nights = [4, 4, 1, 1, 2, 2, 3, 3];

const shifts = [null, "one", "two", "three", "four"];

const firstOrSecond = i => (i % 2 == 0 ? "first" : "second");

const difference = Date.now() - new Date(2018, 0, 2);

const offset = Math.floor(difference / 8.64e7) % 8;

const day = document.createElement("div");
day.className = `${shifts[days[offset]]} shift`;
day.innerHTML = `${days[offset]} shift<br>${firstOrSecond(offset)} day`;

const night = document.createElement("div");
night.className = `${shifts[nights[offset]]} shift`;
night.innerHTML = `${nights[offset]} shift<br>${firstOrSecond(offset)} night`;

document.addEventListener("DOMContentLoaded", function(event) {
  document.body.appendChild(day);
  document.body.appendChild(night);
});
