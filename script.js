const container = document.querySelector(".container")
let size = prompt("How many squares per Line do you want? (Between 20 - 100)")
const resetButton = document.querySelector(".reset")
const heights = document.body.clientHeight / parseInt(size)
const widths = parseInt(document.body.clientWidth) / parseInt(size) -2
const colors = ["red", "blue", "yellow", "green"]

while (parseInt(size) < 20 || parseInt(size) > 100){
    alert("Your Number is not permissable!")
    size = prompt("How many squares per Line do you want? (Between 20 - 100)")
}
createBlocks()

resetButton.addEventListener("click", () => {
    askSize()
    while (parseInt(size) < 20 || parseInt(size) > 100){
        alert("Your Number is not permissable!")
        size = prompt("How many squares per Line do you want? (Between 20 - 100)")
    }
    createBlocks()

})
function askSize () {
    size = prompt("How many squares per Line do you want? (Between 20 - 100)")
}

function createBlocks(){
    for (block = 0; block < parseInt(size) * parseInt(size); block++){
        const block = document.createElement("div")
        block.classList.add("division")
        block.style.width = `${widths}px`
        
        container.appendChild(block)
    }
}

container.addEventListener("mouseover", (event) =>{
    let element = event.target
    let randomColor = colors[Math.floor((Math.random() * colors.length))]

    switch(element.className){
        case "division":
            element.style.backgroundColor = `${randomColor}`
            break;
    }
})