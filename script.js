let hour = document.querySelector(".hour");
let min = document.querySelector(".minutes");
let AmPmEl = document.querySelector(".AM");
let sec = document.querySelector(".second");
let dayEl = document.querySelector(".day");
let monthEl = document.querySelector(".month");
let dateEl = document.querySelector(".date");
let yearEl = document.querySelector(".year");

function setTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let AmPm = "PM";

  if (h >= 12) {
    if (h > 12) {
      h -= 12;
    }
    AmPm = "PM";
  } else if (h == 0) {
    h = 12;
    AmPm = "AM";
  } else if (h < 12) {
    AmPm = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  AmPmEl.innerText = AmPm;

  setTimeout(setTime, 1000);
}
setTime();
    // calender code
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function calender() {
  let cal = new Date();
  let day = cal.getDay();
  let month = cal.getMonth();
  let date = cal.getDate();
  let year = cal.getFullYear();

  date = date < 10 ? "0" + date : date;

  dayEl.innerText = days[day];
  monthEl.innerText = months[month];
  dateEl.innerText = date;
  yearEl.innerText = year;
}
calender();
