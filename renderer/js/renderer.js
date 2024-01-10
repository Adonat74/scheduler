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
        <div class="grid-element"></div>
    `
}
document.querySelector(".grid-container").innerHTML = gridElement;


let catElement = "";

categories.forEach((cat) => {
    catElement += `<div class="cat-element" data-color="${cat.color}" data-cat="${cat.category}">
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
    });
});



document.querySelectorAll(".grid-element").forEach((element) => {
    element.addEventListener("click", () => {
        if (selectedCat.category === "delete") {
            element.classList.add(selectedCat.color);
            element.innerHTML = "";
        } else {
            element.classList.add(selectedCat.color);
            element.innerHTML = selectedCat.category;
        }
        
    });
});