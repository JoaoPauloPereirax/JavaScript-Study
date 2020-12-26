let carros = ['chevette','fusca','brasilia','variante','fiat147', 'corcel'];
let carro = 'fusca';
document.getElementById('edit1').innerHTML='1 '+carros;
//podemos usar o toString também...

//join() = transforma em uma string separando pelo parâmetro que você passar
document.getElementById('edit2').innerHTML="<br>2 "+carros.join('<br>');//neste caso usamos <br>

//indexOf Procura o elemento do parâmentro
document.getElementById('edit3').innerHTML="<br>3 O item do "+carro+" está na posição: "+carros.indexOf('fusca');

//.pop() remove o ultimo item do array
document.getElementById('edit4').innerHTML="<br>4 "+carros.pop();
//na linha de comando ele seleciona o ultimo elemento além de eliminar o ultimo
carros.pop();
document.getElementById('edit5').innerHTML="<br>5 "+carros;

//shift remove o primeiro
document.getElementById('edit6').innerHTML="<br>6 "+carros.shift();
carros.shift();
document.getElementById('edit7').innerHTML="<br>7 "+carros;

//para adicionar elementos a lista usamos o push
carros.push('Opala','fusca');//podemos adicionar quantos elementos quisermos
document.getElementById('edit8').innerHTML='<br>8 '+carros;

//alterando elementos do array
carros[0] ="fusca";
carros[3] = 'fiat147';
carros[4] = 'L200';
carros[carros.length]="Corsel";
document.getElementById('edit9').innerHTML="<br>"+carros;
document.getElementById('edit10').innerHTML="<br>"+carros[carros.length-1];

//para remover um item do array usamos a função splice
carros.splice(1,2);
document.getElementById('edit11').innerHTML="<br>"+carros;

//para ordenar o array usamor a função variavel.sort(); e para ordenar de forma decrescente usamos o sort e em seguida o variavel.reverse();