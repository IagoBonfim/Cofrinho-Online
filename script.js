const saldo = document.querySelector('#saldo')

let porquinho = document.querySelector('.imagemPorquinho')
const imagens = ['Adicionar_porquinho.jpg', 'Quebrado.png', 'magro.jpg']

const Adicionar = document.querySelector("#btnAdicionar")
let armazenado = new Array();
Adicionar.addEventListener('click', evento => {
    const inputAdicionar = document.querySelector("#inputAdicionar").value

    if (inputAdicionar < 1) {
        alert('Adicione um valor maior!')
    } else {
        
        if(localStorage.hasOwnProperty("armazenado")){
             armazenado = JSON.parse(localStorage.getItem('armazenado'))
        }
        armazenado.push(inputAdicionar)
        localStorage.setItem('armazenado', JSON.stringify(armazenado))
        saldo.innerHTML = "Uhul, o dinheiro foi adicionado!"
        alert(`R$ ${(inputAdicionar)},00 adicionado com sucesso!`)
        escreverInnerHTML(imagens[0])
    }
});
const Quebrar = document.querySelector('#Quebrar')
Quebrar.addEventListener('click', evento => {
    let valoresResgatados = localStorage.getItem("armazenado", JSON.stringify('armazenado'))
    let total = []
    JSON.parse(valoresResgatados).forEach(item => {
        total.push(parseInt(item))
        console.log(total)
    });

    let acumulado = total.reduce((valor, soma) => valor + soma)

    if (acumulado < 1 || total == []) {
        alert("Não há dinheiro no porquinho!")
    } else if (acumulado < 1000) {
        saldo.innerHTML = `Seu porquinho não é gordo o suficiente!`
        escreverInnerHTML(imagens[2])
    } else {
        saldo.innerHTML = `${(acumulado).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
        escreverInnerHTML(imagens[1])
    }

})

function escreverInnerHTML(texto) {
    return porquinho.innerHTML = `<img width="300" src="./imagens/${texto}">`
}
const adicionarValor = document.querySelectorAll('button')

adicionarValor.forEach((elemento) => {

    elemento.addEventListener('click', evento => {
        if ((evento.target.textContent != 'Adicionar Dinheiro' &&
            evento.target.textContent != "Quebrar Porquinho")) {
            let valor = parseInt((evento.target.textContent).split('+')[1])
            armazenado.push(valor)
            alert(`R$ ${valor},00 adicionado com sucesso!`)
        }

    })
})