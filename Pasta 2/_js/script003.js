//Eventos de Teclado
function digitou(){
    console.log('Você digitou!');
}

function soltou(){
    console.log('Você soltou!');
}

function digitoue(evento){
    console.log(evento);
}

function pressEnter(e){
    if(e.keyCode == 13){//Enter
        let texto = document.getElementById('campo2').value;
        console.log(texto);
    }
}