var idade = 82
if(idade < 16){
    console.log('Não vota')
}
else{
    if((idade<18)||(idade>67)){
        console.log('Voto opcional')
    }
    else{
        console.log('Voto obrigatorio')
    }
}