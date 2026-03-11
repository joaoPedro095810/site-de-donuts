
// botões da index
const btnExplorar = document.getElementById("explorar")
const btnSabores = document.getElementById("verSabores")

// botão da página sabores
const btnCardapio = document.getElementById("verCardapio")

// botão para voltar
const btnInicio = document.getElementById("voltarInicio")

// index → sabores
if(btnSabores){
btnSabores.addEventListener("click", () => {
window.location.href = "sabores.html"
})
}

// index → cardapio
if(btnExplorar){
btnExplorar.addEventListener("click", () => {
window.location.href = "cardapio.html"
})
}

// sabores → cardapio
if(btnCardapio){
btnCardapio.addEventListener("click", () => {
window.location.href = "cardapio.html"
})
}

// qualquer página → index
if(btnInicio){
btnInicio.addEventListener("click", () => {
window.location.href = "index.html"
})
}