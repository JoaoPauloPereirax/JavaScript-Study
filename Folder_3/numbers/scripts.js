let n = 10;
let decimal = 12.3213213213;
let string = "25";

//transforma o número em uma string
document.getElementById("edit1").innerHTML=n.toString()+5+"<br>"+(n+5);

//fixando duas casas decimais
document.getElementById("edit2").innerHTML=n.toFixed(2);

//transformando uma string que armazena um número em um número
document.getElementById("edit3").innerHTML=parseInt(string)+5;
/*existe ainda: 
parseFloat - para números reais
*/

