"use strict"



/*function activateFilterByCategory() {
    const selectCa = document.getElementById("filterCategory")

    selectCa.sort()


    for (let category of selectCa){ 
      const option = document.createElement("option")
      option.textContent = category
      option.value = category
      selectCa.append(option)
    }
    }
    
    activateFilterByCategory() */

  
const dateNow = moment()
dateNow.locale("fr")
  
    
    
    let filterEntries = "toutes les veilles"
    
    function insertVeille() {
        const ulEl = document.createElement("ul")
        const gridContainer = document.getElementById("grid-container")
        ulEl.classList.add("row", "list-unstyled")
        const filteredEntries = entries.filter((el) => {
            if (filterEntries === "toutes les veilles") {
                return true
            } else {
                return el.category.includes(filterEntries)
            }
        })
        for (let veille of filteredEntries) {
            const li = document.createElement("li")
            li.classList.add("col-sm-12", "col-lg-12")

            li.innerHTML = `<div class="card mx-5 mb-2 shadow-sm bg-white rounded">
            <div class="card-body">
                <h3 class="card-title ">${veille.subject}</h3>
                <a class="badge bg-primary text-decoration-none" href="#" role="button">${veille.category}</a>
                <p id="date" class=" card-text"><small class="text-muted">${veille.date}</small></p>
            </div>
        </div>`
            ulEl.append(li)
        }
        gridContainer.innerHTML = ""
        gridContainer.append(ulEl)
    }
    insertVeille()

    function activateFilterByCategory() {
        const selectCa = document.getElementById("filterCategory")
               uniqueCategory.sort()
          
            for (let category of uniqueCategory) {
            const option = document.createElement("option")
            option.textContent = category
            option.value = category
            selectCa.append(option)
        }
        selectCa.addEventListener("change", () => {
            filterEntries = selectCa.value
            insertVeille()
            console.log(filterEntries)
        })
    }
        activateFilterByCategory()

    function activateFilterByDate() {
        const selectDat = document.getElementById("filterDate")
            uniqueCategory1.sort()

    
        for (let date of uniqueCategory1) {
            const option = document.createElement("option")
            option.textContent = date
            option.value = date
            selectDat.append(option)
        }
        selectDat.addEventListener("change", () => {
            filterEntries = selectDat.value
            insertVeille()
            console.log(filterEntries)
        })
    }
    activateFilterByDate()

   /* entries.sort(function (a, b) {
        if (a.subject < b.subject) { return -1; }
        if (a.subject > b.subject) { return 1; }
        return 0;
      })
      console.log(entries)
      insertVeille(
          entries.sort(function (a, b) {
              if (a.subject < b.subject) { return -1; }
              if (a.subject > b.subject) { return 1; }
              return 0;
          }))
    */
   

    const modeInput = document.getElementById("select");

    modeInput.addEventListener("change", () => { 
        
  
        if (modeInput.checked) { 
  
        
          document.body.classList.add("bg-dark", "text-danger");
        } else {
          
          document.body.classList.remove("bg-dark", "text-danger");
        }
      });

    

   
    
      

 
    
