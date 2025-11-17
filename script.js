const mcqueen = document.getElementById("lampada");

lampada.addEventListener("mouseover",azul);
lampada.addEventListener("mouseout",vermelho);


function azul() {
    if (mcqueen) {
        televisao.src = "azul.png"; 
        document.body.style.background = "#000000ff";
    }
}

function vermelho() {
    if (mcqueen) {
        televisao.src = "vermelho.png"; 
        document.body.style.background = "#000000";
    }
}