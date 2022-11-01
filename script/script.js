function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; //comando para acresentar numero
}
function clean(){
    document.getElementById('resultado').innerHTML = '' //comando para limpar tudo
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1) //comando para apagar um numero
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); //comando para fazer calculadora somar os numeros
    }else{
        document.getElementById('resultado').innerHTML ='nada...'
    }
}