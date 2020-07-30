"use strict"
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
