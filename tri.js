"use strict"

// Invoquer la structure html
Document.documentElement
Document.documentElement.lang("fr")

// Déclarer les listes =>
// Liste de A à Z
const ListedesVeillesAZ = entries.subject.sort()
console.log(ListedesVeillesAZ)

// Liste de Z à A
const ListedesVeillesZA = entries.subject.reverse().sort()
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
  <a class='dropdown-item' href='déclencher grid par date'>par Date</a>
  <a class='dropdown-item' href='déclencher grid par ordre alphabétique'>de A à Z</a>
  <a class='dropdown-item' href='déclencher grid par ordrealphareverse'>de Z à A</a>
</div>
</div>"`)


