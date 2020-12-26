let lista = [23,43,56,78,12,21];

//para criamos um  array com o dobro do valor de cada um
let lista2 = lista.map(function(item){
return item*2;
});
//podemos usar o for
document.getElementById('edit1').innerHTML="<br>"+lista;
document.getElementById('edit2').innerHTML="<br>"+lista2;

delete(lista2);
lista2 = lista.filter(function(item){
    if (item<30){
        return true;
    }else{
        return false;
    }
});
document.getElementById('edit3').innerHTML="<br>"+lista2;


//retorna o primeiro elemento que satisfazer a condição
let lista3 = lista.find(function(item){
    return (item>30)?true:false;
});
document.getElementById('edit4').innerHTML="<br>"+lista3;


//retorna a posição do primeiro elemento que satisfazer a condição
let lista4 = lista.findIndex(function(item){
    return (item>30)?true:false;
});
document.getElementById('edit5').innerHTML="<br>"+lista4;
