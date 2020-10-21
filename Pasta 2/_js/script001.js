//VARIÁVEIS

var nome = "João Paulo";
var idade = 24;
var booleano = true;//verdadeiro  false=falso
var cidade;

document.getElementById('nome').innerHTML='A variável "nome" que possui o valor '+nome+' é do tipo "'+typeof(nome)+'"';
document.getElementById('idade').innerHTML='A variável "idade" que possui o valor '+idade+' é do tipo "'+typeof(idade)+'"';
document.getElementById('booleano').innerHTML='A variável "booleano" que possui o valor '+booleano+' é do tipo "'+typeof(booleano)+'"';;
document.getElementById('indefinida').innerHTML='A variável "cidade" que não possui valor é do tipo "'+typeof(cidade)+'"';;
