let digitos = '';

function addNumber(number) {
    digitos += number;
    document.getElementById("itensScreen").innerText = digitos; //o valor dos 'itensScreen' é igual ao que for digitado.
}

function addOp(op) {
    digitos += op;
    document.getElementById('itensScreen').innerText = digitos;
}

function clearScreen() {
    digitos = '';
    document.getElementById('itensScreen').innerText = digitos;
}

function delDigito() {
    digitos = digitos.slice(0, -1);
    document.getElementById('itensScreen').innerText = digitos;
}

function addPoint() {
    digitos += '.';
    document.getElementById('itensScreen').innerText = digitos;
}

function result() {
    document.getElementById('itensScreen').innerText = eval(digitos);
}