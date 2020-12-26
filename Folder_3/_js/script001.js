let nome = "João Paulo Pereira";
let nome2 = "             João Paulo Pereira               ";
document.getElementById("manipula1").innerHTML="O nome "+nome+" têm "+nome.length+" caracteres.<br/>";

document.getElementById("manipula2").innerHTML="O nome Paulo começa na posição "+nome.indexOf('Paulo');

document.getElementById("manipula3").innerHTML="Pegando a partir da 9° posição temos "+nome.slice(9,18);

/*
- substring funciona somente desta forma!
- substr(9,18); quando usamos esta função o segundo parâmentro é a quantidade de elementos que vamos pegar
*/

document.getElementById("manipula4").innerHTML="Pegando os 7 últimos elementos temos "+nome.slice(-7);

document.getElementById("manipula5").innerHTML="Pegando segundo nome temos "+nome.substr(5,5);

//let resultado =nome.replace(pesquise por..., substitua por...)
let resultado = nome.replace("Pereira","Machado");
document.getElementById("manipula6").innerHTML="Trocando o nome: "+resultado;

//Upper
document.getElementById("manipula7").innerHTML= "UpperCase: "+nome.toUpperCase();

//Lower
document.getElementById("manipula8").innerHTML= "LowerCase: "+nome.toLowerCase();

//concatenação
document.getElementById("manipula9").innerHTML= "Concatenação: "+nome.concat(" Machado");

//trim = remove espaços do começo e do fim
document.getElementById("manipula10").innerHTML= 
"Tirando espaços do nome<br/> Com espaços: "+nome2.length+"<br/>Sem espaços: "+nome2.trim().length;