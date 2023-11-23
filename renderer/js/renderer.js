let count = 0;

document.querySelector("#clicked").innerHTML = `You clicked ${count} times.`;

let button = document.querySelector("#plusOne");


button.addEventListener("click", () => {
    count++
    document.querySelector("#clicked").innerHTML = `You clicked ${count} times.`;
});

