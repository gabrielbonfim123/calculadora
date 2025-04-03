let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receber ValorConta)
function receber ValorConta (evento) {
conta Number (evento.target.value)

}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receber Quantidade Pessoas)
function receber Quantidade Pessoas (evento) {
const paragrafoErro = document.querySelector(".pessoas #erro")
const divErro document.querySelector(".pessoas .input-box")

if(evento.target.value === "0") {
paragrafoErro.style.display = "block"
divErro.setAttribute("id", "erro-div")

} else {
paragrafo Erro.style.display = "none"
divErro.setAttribute("id", "")
pessoas Number (evento.target.value)

}

}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
✓ botoesGorjeta.forEach(botao => {
botao.addEventListener("click", receber Porcentagem)
})

✓ function receber Porcentagem (evento) {
console.log(evento.target.value)
// porcentagem = Number(evento.target.value) / 180
// console.log(porcentagem)
}