//Eventos de Click
function clicando(){
    alert ("Você clicou no botão!");
}

function trocando(){
    document.getElementById("titulo").innerHTML="Trocamos o texto";
}

function trocandoCampo(texto){
    document.getElementById('campo').value=texto;
}

function trocandoVolta(){
    document.getElementById("titulo").innerHTML="Seja bem vindo aos eventos de Click";
}