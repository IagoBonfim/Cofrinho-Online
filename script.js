const saldo = document.querySelector('#saldo')
const porquinho = document.querySelector('imagemPorquinho')
let armazenado = []

function Adicionar(){
    armazenado.push(Number(adicionar.value)) 
    porquinho
}
function Quebrar(){
    let total = armazenado.reduce((soma, i) => {return soma + i }) 
    total > 999 ?
        saldo.innerHTML = `${(total).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})}`
            : alert('Seu porquinho não é gordo o suficiente!')
}