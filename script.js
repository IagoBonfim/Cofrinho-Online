const saldo = document.querySelector('#saldo')
let porquinho = document.querySelector('.imagemPorquinho')
const imagens = ['Adicionar_porquinho.jpg', 'Quebrado.png','magro.jpg']
let armazenado = []

function Adicionar() {
    if (Number(adicionar.value) < 1) {
        alert('Adicione um valor maior!')
    } else {
        armazenado.push(Number(adicionar.value))
        saldo.innerHTML = "Uhul, o dinheiro foi adicionado!"
        alert(`R$ ${Number(adicionar.value)},00 adicionado com sucesso!`)
        escreverInnerHTML(imagens[0])
    }
}
function Quebrar() {
    let total = armazenado.reduce((soma, i) => { return soma + i })
    if (total < 1000) {
        saldo.innerHTML = `Seu porquinho não é gordo o suficiente!`
        escreverInnerHTML(imagens[2])
    } else {
        saldo.innerHTML = `${(total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
        escreverInnerHTML(imagens[1])
    }
}
function escreverInnerHTML(texto){
     return porquinho.innerHTML = `<img width="300" src="./imagens/${texto}">`
}
function adicionarValorPeloBotao(num){
    armazenado.push(num)
    alert(`R$ ${num},00 adicionado com sucesso!`)
}