const saldo = document.querySelector('#saldo')

let porquinho = document.querySelector('.imagemPorquinho')
const imagens = ['Adicionar_porquinho.jpg', 'Quebrado.png', 'magro.jpg']

let armazenado = new Array();
const Adicionar = document.querySelector("#btnAdicionar")
Adicionar.addEventListener('click', evento => {
    const inputAdicionar = document.querySelector("#inputAdicionar").value

    if (inputAdicionar < 1) {
        alert('Adicione um valor maior!')
    } else {

        if (localStorage.hasOwnProperty("armazenado")) {
            armazenado = JSON.parse(localStorage.getItem('armazenado'))
        }
        armazenado.push(parseInt(inputAdicionar))
        localStorage.setItem('armazenado', JSON.stringify(armazenado))
        saldo.innerHTML = "Uhul, o dinheiro foi adicionado!"
        alert(`R$ ${(inputAdicionar)},00 adicionado com sucesso!`)
        escreverInnerHTML(imagens[0])
    }
});
const adicionarValorDoBotao = document.querySelectorAll('button')
adicionarValorDoBotao.forEach((elemento) => {
    elemento.addEventListener('click', evento => {
        if ((evento.target.textContent != 'Adicionar Dinheiro' &&
            evento.target.textContent != "Quebrar Porquinho")) {
            let valorDoBotao = parseInt((evento.target.textContent).split('+')[1])
            if (localStorage.hasOwnProperty("armazenado")) {
                armazenado = JSON.parse(localStorage.getItem('armazenado'))
            }
            armazenado.push(parseInt(valorDoBotao))
            localStorage.setItem('armazenado', JSON.stringify(armazenado))
            console.log(armazenado)
            alert(`R$ ${valorDoBotao},00 adicionado com sucesso!`)
        }
    })
})
const Quebrar = document.querySelector('#Quebrar')
Quebrar.addEventListener('click', evento => {
    let valoresResgatados =  JSON.parse(localStorage.getItem("armazenado"))
    let total = valoresResgatados.reduce((valor, soma) => valor + soma)
    
    if (total < 1 || valoresResgatados == []) {
        alert("Não há dinheiro no porquinho!")
    } else if (total < 1000) {
        saldo.innerHTML = `Seu porquinho não é gordo o suficiente!`
        escreverInnerHTML(imagens[2])
    } else {
        saldo.innerHTML = `${(total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
        escreverInnerHTML(imagens[1])
    }
})

function escreverInnerHTML(texto) {
    return porquinho.innerHTML = `<img width="300" src="./imagens/${texto}">`
}