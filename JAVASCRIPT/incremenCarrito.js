
document.querySelector("#btnRestar").addEventListener("click", restarUno);
document.querySelector("#btnSumar").addEventListener("click", sumarUno);

let contador = 0;

function restarUno() {
    if (contador > 0)
        contador = contador - 1;
    document.querySelector("#msgContador").innerHTML = contador
}

function sumarUno() {
    contador = contador + 1;
    document.querySelector("#msgContador").innerHTML = contador

}

