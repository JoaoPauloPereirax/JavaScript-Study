let dia = 8;
let diaNome;
function escolha(d,dn){
    if( d>0 && d<8){
        document.getElementById('dia').innerHTML = "O dia é: "+dn;
    }else{
        document.getElementById('dia').innerHTML = "Dia escolhido é inválido!";
    }
}
switch(dia){
    case 1:
        diaNome = "Domingo";
        break;
    case 2:
        diaNome = "Segunda";
        break;
    case 3:
        diaNome = "Terça";
        break;
    case 4:
        diaNome = "Quarta";
        break;
    case 5:
        diaNome = "Quinta";
        break;
    case 6:
        diaNome = "Sexta";
        break;
    case 7:
        diaNome = "Sábado";
        break;
    default:
        diaNome = "";
        break;
}
escolha(dia,diaNome);