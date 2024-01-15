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


let selectedCat = {
    category: "delete", color: "white"
};



let gridElement = localStorage.getItem('gridElement');




if (!gridElement) {
    gridElement = "";
    for (let i = 0; i < 216; i++) {
        gridElement += `
           <input id="${i}" type="text" class="grid-element white"></input>
       `
    }
    document.querySelector(".grid-container").innerHTML = gridElement;
}

document.querySelector(".grid-container").innerHTML = gridElement;




for (let i = 0; i < 216; i++) {

    let element = document.getElementById(`${i}`);


    element.value = getSavedValue(`${i}`);

    element.addEventListener("change", () => {
        saveValue(element);
    });
    
}

function saveValue(e) {
    var id = e.id;  
    var val = e.value; 
    localStorage.setItem(id, val);
}

function getSavedValue(e) {
    if (!localStorage.getItem(e)) {
        return "";
    }

    return localStorage.getItem(e);
}




document.querySelectorAll(".grid-element").forEach((element) => {
    element.addEventListener("click", () => {


        let lastClassName = element.classList[ element.classList.length-1 ];


        if (selectedCat.category === "delete") {
            element.classList.replace(lastClassName, selectedCat.color);
        } else {
            element.classList.replace(lastClassName, selectedCat.color);
        }

        gridElement = String(document.querySelector(".grid-container").innerHTML);

        localStorage.setItem('gridElement', gridElement);
        
    });
});








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
        selectedCat.category = element.dataset.cat;
        selectedCat.color = element.dataset.color;
        
        document.querySelectorAll(".cat-element").forEach((elem) => {
            elem.classList.replace("selected", "unselected")
        });

        
        element.classList.replace("unselected", "selected");
    });
});



