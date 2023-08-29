const saldo = document.querySelector('#saldo')
const porquinho = document.querySelectorAll('.imagemPorquinho')
const imagens = ['Adicionar_porquinho.jpg', 'Quebrado.png']
let armazenado = []

function Adicionar(){
    armazenado.push(Number(adicionar.value)) 
    porquinho.img.src = `/imagens/${imagens[0]}`
}
function Quebrar(){
    let total = armazenado.reduce((soma, i) => {return soma + i }) 
    total > 999 ?
        saldo.innerHTML = `${(total).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})}`
            : alert('Seu porquinho não é gordo o suficiente!')
}