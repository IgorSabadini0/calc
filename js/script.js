let digitos = '';


function addNumber(number) {
    digitos += number;
    document.getElementById("itensScreen").value = digitos; //o valor dos 'itensScreen' é igual ao que for digitado.
}

function addOp(op) {
    digitos += op;
    document.getElementById('itensScreen').value = digitos;
}

function clearScreen() {
    digitos = '';
    document.getElementById('itensScreen').value = digitos;
}

function delDigito() {
    digitos = digitos.slice(0, -1);
    document.getElementById('itensScreen').value = digitos;
}

function result() {
    document.getElementById('itensScreen').value = eval(digitos);
}