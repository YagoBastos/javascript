let num = [5,8,2,9,3]
console.log(num)
num.push(1)//add um numero no final 
console.log(num)
num.sort() // deixa em ordem crescente 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
//
console.log(``)// só para pular linha
//
for(let i = 0; i<num.length;i++){
    console.log(`Posição ${i} vale = ${num[i]}`)
}
//
console.log(``)// só para pular linha
//
for(let j in num){ // uma simplificação do for 
    console.log(`${j} vale = ${num[j]}`)
}
//
console.log(``)// só para pular linha
//
let pos = num.indexOf(8) // enconta a posição de algum valor, se não tiver retorna: -1 
if(pos != -1){
    console.log(`O valor 8 está na posição: ${pos}`)
}
else{
    console.log(`[ERRO] Valor não encontrado`)
}