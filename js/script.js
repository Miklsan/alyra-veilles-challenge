"use strict"

// Partie Stef

const moment = require("moment");
const dateNow = moment();
dateNow.locale("fr");
console.log("dddd DD/MM/YYYY", dateNow.format("dddd DD/MM/YYYY"));
const h1 = document.querySelector("h1");
const p = document.getElementById("p");
p.textContent = `Bonjour ! Nous sommes le ${dateNow.format(
  "dddd DD/MM/YYYY"
)} 🧐`;
//p.style.backgroundColor = "blue";

h1.after(p);

console.log(dateNow);

// Partie Rémy
function alldates(entries) {
  let date = [];
  for (let entry of entries) {
    if ("date" in entry) {
      for (let entry of entries) {
        if (!date.includes(items) > dateNow) {
          date.push(items);
        }
      }
    }
    console.log("entry.date", entry.date);
  }
}
alldates();

console.log(alldates(entries));

/*for (let entry of entries) {
    console.log("entry.date", entry.date);
  }
  if (entry.date < "dateNow") {
    return arrayOfDDMMYYYY.sort(
      (k1, k2) => moment(k1, dateFormat) - moment(k2, dateFormat)
    );
  }
}
sortByDate();

console.log("sortByDate", sortByDate(entries));*/
