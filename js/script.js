const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERA = 'tijera';

var puntosUser = 0;
var puntosMachine = 0;

puntos(puntosUser, puntosMachine);

const btnPiedra = document.getElementById('piedra');
const btnPapel = document.getElementById('papel');
const btnTijera = document.getElementById('tijera');

const reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    resetPoints();
});

const jugadaUser = document.getElementById('jugada-user');
const jugadaMachine = document.getElementById('jugada-machine');

btnPiedra.addEventListener('click', (e)=>{
    jugar(PIEDRA, machineOption());
    puntos(puntosUser, puntosMachine);
    terminarJuego();
});
btnPapel.addEventListener('click', (e)=>{
    jugar(PAPEL, machineOption());
    puntos(puntosUser, puntosMachine);
    terminarJuego();
});
btnTijera.addEventListener('click', (e)=>{
    jugar(TIJERA, machineOption());
    puntos(puntosUser, puntosMachine);
    terminarJuego();
});

function jugar(selUser, selMachine){
    cambiarImagen(selUser, selMachine);
    mostraGanador(revisarJugada(selUser, selMachine));
    colocarPuntos(revisarJugada(selUser, selMachine));
}

function resetPoints(){
    puntosUser = 0;
    puntosMachine = 0;
    puntos(puntosUser, puntosMachine);
}

function machineOption(){
    let option = Math.floor(Math.random()*3);
    let select = '';
    switch(option){
        case 0: select = PIEDRA;
        break;
        case 1: select = PAPEL;
        break;
        case 2: select = TIJERA;
        break;
    }

    return select;
}

function cambiarImagen(selUser, selMachine){
    jugadaUser.src = `./img/${selUser}.png`;
    jugadaMachine.src = `./img/${selMachine}.png`;
}

function mostraGanador(result){
    let texto = document.getElementById('text-result');
    switch (result) {
        case 'win': texto.innerHTML = '<h1>Tu Ganas!!!</h1>';
            
            break;
        case 'lose': texto.innerHTML = '<h1>Tu Pierdes!!!</h1>';

            break;
    
        default: texto.innerHTML = '<h1>¡Empate!</h1>';
            break;
    }
}

function colocarPuntos(result){

    switch (result) {
        case 'win': puntosUser++;
            
            break;
        case 'lose': puntosMachine++;

            break;
    }

}

function revisarJugada(selUser, selMachine){
    let result = '';
    if(selUser == PIEDRA){

        if(selMachine == PAPEL){
            result = 'lose';
        }else if(selMachine == TIJERA){
            result = 'win';
        }
    }else if(selUser == PAPEL){
        
        if(selMachine == TIJERA){
            result = 'lose';
        }else if(selMachine == PIEDRA){
            result = 'win';
        }
    }else if(selUser == TIJERA){

        if(selMachine == PIEDRA){
            result = 'lose';
        }else if(selMachine == PAPEL){
            result = 'win';
        }
    }else{
        result = 'tie';
    }

    return result;
}


function puntos(pUser, pMachine){
    document.getElementById('puntos-user').innerText = pUser;
    document.getElementById('puntos-machine').innerText = pMachine;
}

function terminarJuego(){
    if(puntosUser == 10){
        alert('Eres el Ganador!!!');
        resetPoints();
    }else if(puntosMachine == 10){
        alert('¡Lo siento has perdido!');
        resetPoints();
    }
}




