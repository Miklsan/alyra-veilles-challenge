"use strict"

// Invoquer la structure html
Document.documentElement
Document.documentElement.lang("fr-FR")

// Déclarer les listes =>
// Liste de A à Z
const ListedesVeillesAZ = entries.subject.sort()
console.log(ListedesVeillesAZ)

// Liste de Z à A
const ListedesVeillesZA = entries.subject.sort().reverse()
console.log(ListedesVeillesZA)



// Liste par date
function sortByDate(arrayOfDDMMYYYY) {
  return arrayOfDDMMYYYY.sort(function (a, b) {

    a = a.split("/");
    b = b.split("/");
    return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
  });
}
const ListedesVeillesdate = sortBydate(entries.date)

// Création du bouton dropdown
const dp = document.createElement("DropdownVeilles")
DropdownVeilles.innerHTML = document.createElement(`"<div class='dropdown'>
<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true'
aria-expanded='false'>
  Trier par :
</button>
<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
  <a class='dropdown-item' href='#' onclick=${maFonctiondate()}>par Date</a>
  <a class='dropdown-item' href='#' onclick=${maFonctionAZ()>}de A à Z</a>
  <a class='dropdown-item' href='#" onclick=${maFonction()}>de Z à A</a>
</div>
</div>"`)


