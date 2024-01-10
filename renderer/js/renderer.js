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
    catElement += `<div class="cat-element">
        <div class="color ${cat.color}"></div>
        <p>${cat.category}</p>
    </div>`
});
document.querySelector(".cat-container").innerHTML = catElement;





document.querySelectorAll(".grid-element").forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.add("red");
        element.innerHTML = "work"
    });
});