var txt_inicial = window.document.getElementById('num_inicial')
var txt_final = window.document.getElementById('num_final')
var txt_passo = window.document.getElementById('num_passo')
var res = window.document.getElementById('res')

function Contar(){
    
    if(txt_inicial.value.length == 0 || txt_final.value.length == 0 || txt_passo.value.length == 0){
        window.alert(`[ERRO] Faltam dados!`)
    }
    else{
        res.innerHTML = "Contando: <br>"

        var i = Number(txt_inicial.value)
        var f = Number(txt_final.value)
        var p = Number(txt_passo.value)
        if(p <= 0){
            window.alert('[ERRO] valor do passo não pode ser zero ou menor. passo foi alterado para 1')
            p=1;
        }
        if(i<f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else if(i>f){
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}