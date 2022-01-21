function Verificar(){
    //declarações

    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('ano_txt');
    var res = window.document.getElementById('res');

    //codigo

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var sexo_rad = window.document.getElementsByName("sexo_rad")
        var idade = ano - fano.value 
        var genero = " ";
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        sexo_rad[0].checked? genero="Homen": genero="Mulher";
        if(genero=="Homen"){
            if(idade < 10){
                //criança
                img.setAttribute('src','img/crianca-m.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','img/jovem-m.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','img/adulto-m.jpg')
            }else{
                //velho
                img.setAttribute('src','img/idoso-m.jpg')
            }
        }else{
            if(idade < 10){
                //criança
                img.setAttribute('src','img/crianca-f.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','img/jovem-f.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','img/adulto-f.jpg')
            }else{
                //velho
                img.setAttribute('src','img/idoso-f.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `<p>Detectamos: ${genero} com ${idade} anos</p>`
        res.appendChild(img,)
    }
}