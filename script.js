let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receber ValorConta)
function receber ValorConta (evento) {
conta Number (evento.target.value)
calcular()

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
   calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
✓ botoesGorjeta.forEach(botao => {
botao.addEventListener("click", receberPorcentagem)
})


function receberPorcentagem (evento) {
    botoesGorjeta.forEach(botao => {
    botao.classList.remove("botao-ativo")

    if(botao.value === evento.target.value) {
    botao.classList.add("botao-ativo")
    }
    })

    if(evento.target.value !== "") {
        porcentagem = parseFloat(evento.target.value) / 100
        } else {
        porcentagem = 0
        }

        calcular()
        }
    
    
    const gorjetaInput = document.querySelector("#outra")
    gorjetaInput.addEventListener("input", receberPorcentagem)


    
    function calcular() {
        if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = R$ ${(conta porcentagem / pessoas).toFixed(2)}^

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML = R$ ${((conta + (conta porcentagem)) / pessoas).toFixed(2)
   }

 }


    const botaoLimpar document.querySelector(".resultados button")
    botaoLimpar.addEventListener("click", limpar)

    function limpar() {
    contaInput.value = ""
    
    botoesGorjeta.forEach(botao => {
    botao.classList.remove("botao-ativo")

    })
    gorjetaInput.value = ""

    pessoas Input.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"

    }