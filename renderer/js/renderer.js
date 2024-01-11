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








let gridElement = "";

for (let i = 0; i < 216; i++) {
     gridElement += `
        <input type="text" class="grid-element white"></input>
    `
}
document.querySelector(".grid-container").innerHTML = gridElement;



document.querySelectorAll(".grid-element").forEach((element) => {
    element.addEventListener("click", () => {
        let lastClassName = element.classList[ element.classList.length-1 ];
        if (selectedCat.category === "delete") {
            element.classList.replace(lastClassName, selectedCat.color);
            element.value = "";
        } else {
            element.classList.replace(lastClassName, selectedCat.color);
            element.innerHTML = selectedCat.category;
        }
        
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



let selectedCat = {
    category: "delete", color: "white"
};

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



