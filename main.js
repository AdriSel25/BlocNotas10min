let temporizador;
let cont = 1;
let hola;
///dasd
function activarTemp(){
    if (cont !=1 ){
        clearInterval(temporizador);
        cont =1;
    }
        cont++; 
        let tiempoF = 600000;
        let timer = (tiempoF/1000);
        let minutos, segundos;
                
               temporizador = setInterval(() => {
                minutos = parseInt(timer / 60, 10); 
                segundos = parseInt(timer % 60, 10);

                minutos = minutos < 10 ? "0" + minutos : minutos;
                segundos = segundos < 10 ? "0" + segundos : segundos;

                document.getElementById("tiempo-restante").value = `Tiempo restante: ${minutos}:${segundos}`;
                
                if (--timer < 0) {
                    timer = 0;
                    console.log('Se ha borrado');
                    document.getElementById("tiempo-restante").value = "El Bloc ha sido vaciado";
                    document.getElementById("mensaje").value = "";
                    clearInterval(temporizador);
                    cont =1;
                  }
                }, 1000);
}

function reinicio(){
    document.getElementById("mensaje").value = "";
    document.getElementById("tiempo-restante").value = "El Bloc ha sido vaciado";
    clearTimeout(temporizador);
    cont =1;

}

