const container = document.querySelector(".container")
const size = prompt("How many squares per Line do you want?")

for (block = 0; block < parseInt(size) * parseInt(size); block++){
    const block = document.createElement("div")
    block.classList.add("division")
    container.appendChild(block)
}

const field = document.querySelectorAll("div.division")

field.forEach(element => {
    element.addEventListener("mouseover", () => {
        if (element.style.backgroundColor == "red"){
            element.style.backgroundColor = "white"
        } else {
            element.style.backgroundColor = "red"
        }
    })})