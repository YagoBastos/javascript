function Carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `<h2>Agora são ${hora} Horas</h2>`

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src= 'img/manha.jpg'
        window.document.body.style.background = `#F9F871`
        
    }else if(hora >=12 && hora < 18){
        //Boa tarde!
        img.src= 'img/tarde.jpg'
        window.document.body.style.background = '#B87C4C'
        
    }else{
        //Boa noite!
        img.src= 'img/noite.jpg'
        window.document.body.style.background = '#412728'
        
    }
}