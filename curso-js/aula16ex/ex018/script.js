let numtxt = window.document.getElementById('numtxt')
let lista = window.document.getElementById('salnum')
let res = window.document.getElementById('res')
let vet = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100)
    {
        return true
    }
    else
    {
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
}

function Adicionar(){
    res.innerHTML = " "
    if(isNumero(numtxt.value) && !inLista(numtxt.value, vet))
    {
        vet.push(Number(numtxt.value))
        let item = document.createElement('option')
        item.text = `Valor: ${numtxt.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('[ERRO] Valor invalido ou já existente na lista!')
    }
    numtxt.value = " "
    numtxt.focus()
}
function Finalizar(){
    if(vet.length == 0){
        window.alert('[ERRO] Adicione os valores antes de finalizar!')
    }
    else{
        let tot = vet.length
        let menor = vet[0]
        let maior = vet[0]
        let soma = 0
        let media = 0
        for(let i in vet)
        {
            soma+=vet[i]
            if(vet[i]<menor){
                menor=vet[i]
            }
            if(vet[i]>maior){
                maior=vet[i]
            }
        }
        media=soma/vet.length

        res.innerHTML= " "
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número cadastrado é: ${maior}</p>`
        res.innerHTML += `<p>O menor número cadastrado é: ${menor}</p>`
        res.innerHTML += `<p>A soma dos números cadastrados é: ${soma}</p>`
        res.innerHTML += `<p>Média dos velores é: ${media}</p>`
    }
}