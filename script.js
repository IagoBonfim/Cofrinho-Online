const saldo = document.querySelector('#saldo')
let porquinho = document.querySelectorAll('.imagemPorquinho')
const imagens = ['Adicionar_porquinho.jpg', 'Quebrado.png']
let armazenado = []

function Adicionar(){
    armazenado.push(Number(adicionar.value)) 
    porquinho.innerHTML = `<img src="/imagens/${imagens[0]}">`
    console.log('aqui', porquinho);
}
function Quebrar(){
    let total = armazenado.reduce((soma, i) => {return soma + i }) 
    total > 999 ?
        saldo.innerHTML = `${(total).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})}`
            : alert('Seu porquinho não é gordo o suficiente!')
}