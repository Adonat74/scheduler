const element = require('categories')





let gridElement = "";

for (let i = 0; i < 252; i++) {
     gridElement += `
        <div class="grid-element"></div>
    `
}

document.querySelector(".grid-container").innerHTML = gridElement;