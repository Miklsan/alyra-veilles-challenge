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

// Fonction de génération de Grid (la variable entries est remplacée par une entriesclassée)
function insertVeillemodif(ordre) {
  const ulEl = document.createElement("ul")
  const gridContainer = document.getElementById("grid-container")
  ulEl.classList.add("row", "list-unstyled")
  const filteredEntries = ordre.filter((el) => {
      if (filterEntries === "toutes les veilles") {
          return true
      } else {
          return el.category(filterEntries)
      }
  })
  for (let veille of filteredEntries) {
      const li = document.createElement("li")
      li.classList.add("col-sm-12", "col-lg-12")
      li.innerHTML = <div class="card mr-5 ml-5 mb-2 shadow-sm bg-white rounded">
      <div class="card-body">
          <h5 class="card-title ">${veille.subject}</h5>
          <a class="badge bg-primary text-decoration-none" href="#" role="button">${veille.category}</a>
          <p id="date" class=" card-text"><small class="text-muted"></small>${veille.date}</p>
      </div>
  </div>
      ulEl.append(li)
  }
  gridContainer.innerHTML = ""
  gridContainer.append(ulEl)
}




// Création du bouton dropdown
const dp = document.createElement("DropdownVeilles")
DropdownVeilles.innerHTML = document.createElement(`"<div class='dropdown'>
<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true'
aria-expanded='false'>
  Trier par :
</button>
<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
  <a class='dropdown-item' href='#' onclick=${insertVeillemodif(ListedesVeillesdate)}>par Date</a>
  <a class='dropdown-item' href='#' onclick=${insertVeillemodif(ListedesVeillesAZ)}de A à Z</a>
  <a class='dropdown-item' href='#" onclick=${insertVeillemodif(ListedesVeillesZA)}>de Z à A</a>
</div>
</div>"`)


