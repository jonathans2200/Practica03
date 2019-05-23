window.onload = function () {
    pantalla = document.getElementById("textoPantalla");

}
x = "0";
xi = 1;
coma = 0;
ni = 0;
op = "no";


function numero(xx) {
    if (x == "0" || xi == 1) {
        pantalla.innerHTML = xx;
        x = xx;
        if (xx == ".") {
            pantalla.innerHTML = "0.";
            x = xx;
            coma = 1;
        }
    } else {
        if (xx == "." && coma == 0) {
            pantalla.innerHTML += xx;
            x += xx;
            coma = 1;
        } else if (xx == "." && coma == 1) {

        } else {
            pantalla.innerHTML += xx;
            x += xx
        }
    }
    xi = 0
}

function operar(s) {
    igualar()
    ni = x;
    op = s;
    xi = 1;
}

function igualar() {
    if (op == "no") {
        pantalla.innerHTML = x;
    } else {
        sl = ni + op + x;
        sol = eval(sl)
        pantalla.innerHTML = sol
        x = sol;
        op = "no";
        xi = 1;
    }
}



function borradoTotal() {
    pantalla.innerHTML = 0;
    x = "0"; //reiniciar número en pantalla
    coma = 0; //reiniciar estado coma decimal 
    ni = 0 //indicador de número oculto a 0;
    op = "no" //borrar operación en curso.
}
