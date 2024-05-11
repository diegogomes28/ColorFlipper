const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B" , "C" ,"D" ,"E", "F"]
const botao = window.document.querySelector(".button")
const cor = window.document.querySelector(".resp")
const fundo = window.document.querySelector(".main__container");



botao.addEventListener("click" , () =>{
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += hex[randomNumber()]
    };
    cor.textContent = hexColor;
    fundo.style.backgroundColor = hexColor;
})

function randomNumber(){
    return Math.floor(Math.random() * hex.length)
}


