// o Date é uma classe
let d = new Date(1996/*ano*/,5/*mês começando no 0*/,16/*dia*/);
let primeiraDataRegistradaComputadores = new Date(0);
document.getElementById('edit5').innerHTML=("Primeira data registrada: "+primeiraDataRegistradaComputadores.toUTCString());
//meu aniversário
document.getElementById('edit1').innerHTML=(d+"<br/>");
//data de forma completa
document.getElementById('edit2').innerHTML=(d+"<br/>");//toString funciona da mesma forma

//data de forma resumida
document.getElementById('edit3').innerHTML=(d.toDateString()+"<br/>");

//data sem fusorário 
document.getElementById('edit4').innerHTML=(d.toUTCString()+"<br/>");


//usando a função get... podemos basicamente pegar qualquer informação da data
document.getElementById('edit5').innerHTML=(d.getDate()+"<br/>");

//usando a função set... podemos alterar qualquer infomação da data
d.setMonth(0);//alterando para janeiro
document.getElementById('edit6').innerHTML=(d.toString()+"<br/>");