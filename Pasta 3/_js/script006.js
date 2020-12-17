let num = 3.4566;
let num2 = -10.545846
let m1 = Math.round(num);//Faz o arredondamento padrão
let m2 = Math.floor(num);//Força o arredondamento para baixo
let m3 = Math.ceil(num);//Força o arredondamento para cima
document.getElementById('edit1').innerHTML="<h2>Número a ser arredondado: "+num+"<h2/>"; 
document.getElementById('edit2').innerHTML="Arredondamento padrão: "+m1+"<br/>";
document.getElementById('edit3').innerHTML="Arredondamento para baixo: "+m2+"<br/>";
document.getElementById('edit4').innerHTML="Arredondamento para cima: "+m3+"<br/>";
document.getElementById('edit5').innerHTML="<h2>Número para ser usado no valor absoluto: "+num2+"<h2/>";
let m4 = Math.abs(num2);//retorna o valor absoluto
document.getElementById('edit6').innerHTML="Valor absoluto: "+m4+"<br/>";
document.getElementById('edit7').innerHTML="<h2>Minimo e máximo: ";
let m5 = Math.min(num,num2);//retorna o menor entre dois números
let m6 = Math.max(num,num2);//retorna o maior entre doi números
document.getElementById('edit8').innerHTML="O menor valor é: "+m5+"<br/>";
document.getElementById('edit9').innerHTML="O maior valor é: "+m6+"<br/><br/>";
//gerando numeros aleátório entre 0 e 100
let m7 = Math.floor(Math.random()*100);//random gera um número aleatório entre 0 e 1
document.getElementById('edit10').innerHTML="O valor aleatório gerado entre 0 e 100 é: "+m7+"<br/>";

