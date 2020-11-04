let objetos = {
    nome: 'fiat',
    modelo: 'uno',
    peso: '800kg',
    ligado: false,
    ligar: function(){
        this.ligado=true;
    },
    desligar: function(){
        this.ligado=false;
    }
};

document.write(objetos.nome+"<br/>");
document.write(objetos['modelo']+"<br/>");