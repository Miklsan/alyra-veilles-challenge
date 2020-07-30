"use strict"

/*function activateFilterByCategory() {
    const redTeam = document.getElementById("filterTypes")

    redTeam.sort()
    for (let type of uniqueTypes){ 
      const option = document.createElement("option")
      option.textContent = category
      option.value = category
      redTeam.append(option)
    }
    }
    
    activateFilterByCategory() */

    function allCategory(redTeam) {
      
        let listAll = []
        for (let element of redTeam) {
          if ("category" in element) {
            listAll = listAll.concat(element.category)
          }
        }
        const listCategoryUnique = []
        listAll.forEach((red) => {
          if (!listCategoryUnique.includes(red)) {
        
            listCategoryUnique.push(red)
          }
        })
        return listCategoryUnique
      }
      
      const uniqueCategory = allCategory(entries)
    