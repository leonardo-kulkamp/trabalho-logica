const mcqueen = document.getElementById("lampada");

function azul() {
    if (mcqueen) {
        mcqueen.src = "vermelho.png"; 
        document.body.style.background = "#000000ff";
    }
}

function vermelho() {
    if (mcqueen) {
        mcqueen.src = "azul.png"; 
        document.body.style.background = "#000000";
    }
}