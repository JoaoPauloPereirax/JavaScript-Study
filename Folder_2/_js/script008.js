//FOR LOOP
for(let i=0; i<10; i++){
    document.write((i+1)+"<br/>");
}
//FOR LOOP ARRAY
let carros =["fusca","onix","L200","S10","Pampa","Corcel","Passat"];
let html = "<h1>Carros</h1><ul>";
for(let carro in carros){
    html += '<li>'+carros[carro]+'</li>'
}
html += '</ul>';
document.write(html);