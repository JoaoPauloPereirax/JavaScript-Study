let nome = "João Paulo Pereira";

document.getElementById("manipula1").innerHTML="O nome "+nome+" têm "+nome.length+" caracteres.<br/>";

document.getElementById("manipula2").innerHTML="O nome Paulo começa na posição "+nome.indexOf('Paulo');

document.getElementById("manipula3").innerHTML="Pegando a partir da 9° posição temos "+nome.slice(9,18);

/*
- substring funciona somente desta forma!
- substr(9,18); quando usamos esta função o segundo parâmentro é a quantidade de elementos que vamos pegar
*/

document.getElementById("manipula4").innerHTML="Pegando os 7 últimos elementos temos "+nome.slice(-7);

document.getElementById("manipula5").innerHTML="Pegando segundo nome temos "+nome.substr(5,5);