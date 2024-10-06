const container = document.querySelector(".container")
let size = prompt("How many squares per Line do you want? (Between 20 - 100)")
const resetButton = document.querySelector(".reset")
const heights = document.body.clientHeight / parseInt(size)
const widths = parseInt(document.body.clientWidth) / parseInt(size) -2
const colors = ["red", "blue", "yellow", "green"]


while (parseInt(size) < 20 || parseInt(size) > 100){
    alert("Your Number is not permissable!")
    size = prompt("How many squares per Line do you want? (Between 20 - 100)")
} //checks if pixelsize is not to small or to big
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

// creates the divisions 
function createBlocks(){
    for (block = 0; block < parseInt(size) * parseInt(size); block++){
        const block = document.createElement("div")
        block.classList.add("division")
        block.style.width = `${widths}px`
        container.appendChild(block)
    }
} 

//chanegs colors of the devisions
container.addEventListener("mouseover", (event) =>{
    let element = event.target
    let randomColor = colors[Math.floor((Math.random() * colors.length))]

    if (element.className === "division") {
        // Prüfen, ob das Div bereits eine eigene Opacity-Eigenschaft hat
        let currentOpacity = element.getAttribute("data-opacity");

        if (!currentOpacity) {
            currentOpacity = 1; // Standardwert für die Opacity
        }

        currentOpacity -= 0.1; // Reduziert die Opacity um 0.1
        currentOpacity = Math.max(currentOpacity, 0); // Verhindert, dass die Opacity unter 0 fällt

        element.setAttribute("data-opacity", currentOpacity); // Speichere die neue Opacity

        element.style.backgroundColor = randomColor;
        element.style.opacity = currentOpacity; // Wendet die Opacity auf das einzelne Div an
    }
})