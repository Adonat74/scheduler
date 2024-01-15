// variable contenant toute les catégories et leur couleurs associèes
const categories = [{
    category: "work", color: "green"
}, {
    category: "task", color: "yellow"
}, {
    category: "sport", color: "red"
}, {
    category: "meeting", color: "blue"
}, {
    category: "meal", color: "gray"
}, {
    category: "delete", color: "white"
}];


// variable contenant la catégorie sélectionnée 
let selectedCat = {
    category: "delete", color: "white"
};


// variable qui contenant une string html avec la liste des inputs
let gridElement = localStorage.getItem('gridElement');



// si la variable est vide on l'initialise avec 216 inputs de type text
if (!gridElement) {
    gridElement = "";
    for (let i = 0; i < 216; i++) {
        gridElement += `
           <input id="${i}" type="text" class="grid-element white"></input>
       `// on donne un id unique à chaques input grace à la boucle
    }
}

// on insert la string-html contenant les inputs dans le grid container
document.querySelector(".grid-container").innerHTML = gridElement;







// fonction servant à enregistrer la value des inputs dans le local storage
function saveValue(e) {
    var id = e.id;  
    var val = e.value; 
    localStorage.setItem(id, val);
}

// fonction servant retirer la value des inputs depuis le local storage
function getSavedValue(e) {
    if (!localStorage.getItem(e)) {
        return "";
    }

    return localStorage.getItem(e);
}

// boucle qui permet de d'enregistrer à chaques changements la value de chaques inputs individuellement
for (let i = 0; i < 216; i++) {

    let element = document.getElementById(`${i}`);

    element.value = getSavedValue(`${i}`);

    element.addEventListener("change", () => {
        saveValue(element);
    });
}







// permet d'enregistrer la couleur du back-ground de chaques inputs
document.querySelectorAll(".grid-element").forEach((element) => {
    element.addEventListener("click", () => {

        // trouve le dernier className de l'input
        let lastClassName = element.classList[ element.classList.length-1 ];

        // remplace la class pour changer de couleur avec celle selectionnée
        element.classList.replace(lastClassName, selectedCat.color);

        // met à jour 
        gridElement = String(document.querySelector(".grid-container").innerHTML);

        // enregistre
        localStorage.setItem('gridElement', gridElement);
    });
});







// render chaques catégories en bouclant à travers la variables des catégories plus haut
let catElement = "";

categories.forEach((cat) => {
    catElement += `<div id="${cat.color}" class="cat-element unselected" data-color="${cat.color}" data-cat="${cat.category}">
        <div class="color ${cat.color}"></div>
        <p>${cat.category}</p>
    </div>`
});
document.querySelector(".cat-container").innerHTML = catElement;




document.querySelectorAll(".cat-element").forEach((element) => {
    
    element.addEventListener("click", () => {

        // met à jour la catégorie sélectionnée
        selectedCat.category = element.dataset.cat;
        selectedCat.color = element.dataset.color;
        
        // désentour visuellement les catégories
        document.querySelectorAll(".cat-element").forEach((elem) => {
            elem.classList.replace("selected", "unselected")
        });

        // entour celle sélectionnée
        element.classList.replace("unselected", "selected");
    });
});



