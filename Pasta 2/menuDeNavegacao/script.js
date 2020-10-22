/*function menuToggle(){
    let abrir = document.getElementById("menu-area");
    if(abrir.style.width == 200px){
        abrir.style.width = 0;
    }else{
        abrir.style.width = 200px;
    }
}*/

//Outra forma
function menuToggle(){
    let abrir = document.getElementById("menu-area");
    if(abrir.classList.contains('menu-close')==true){
        abrir.classList.remove('menu-close');
    }else{
        abrir.classList.add('menu-close');
    }
}