const palabra = document.getElementById('palabra');
const texto = document.getElementById('texto');
const punteoEl = document.getElementById('punteo');
const tiempoEl = document.getElementById('tiempo');
const finjuegoEl = document.getElementById('fin-juego-container');
const ajustesBtn = document.getElementById('ajustes-btn');
const ajustes = document.getElementById('ajustes');
const ajustesForm = document.getElementById('ajustes-form');
const dificultadSelect = document.getElementById('dificultad');

// Lista de plabras
const palabras = [
    'inmigrantes',
    'ojal',
    'sala',
    'germen',
    'condición',
    'golpear',
    'comisario',
    'etiqueta',
    'condición',
    'espuelas',
    'reducido',
    'sujetos',
    'oficina',
    'tazón',
    'ocasión',
    'tremendo',
    'jabón',
    'frecuente',
    'señorío',
    'fino',
    'disgusto',
];

// Iniciar palabra
let palabraRandom;

// Iniciar el punteo
let punteo = 0;

// Iniciar tiempo
let tiempo = 10;

// dificultad seleccionada
let dificultad = localStorage.getItem('dificultad') ? localStorage.getItem('dificultad') : 'medio';

// establecer dificutad al select
dificultadSelect.value = dificultad;

// autofocus
texto.focus();

// empieza conteo regresivo
const tiempoInterval = setInterval(actualizarTiempo, 1000);

// Generar palabra aleatoria del arreglo
function getPalabraRandom() {
    return palabras[Math.floor(Math.random() * palabras.length)];
}

// add palabra al DOM
function addPalabraDOM() {
    palabraRandom = getPalabraRandom();
    palabra.innerHTML = palabraRandom;
}

function actualizarPunteo() {
    punteo++;
    punteoEl.innerHTML = punteo;
}

// actualizar tiempo
function actualizarTiempo() {
    tiempo--;
    tiempoEl.innerHTML = tiempo + 's';
    if (tiempo === 0) {
        clearInterval(tiempoInterval);
        // Finalizar el juego
        gameOver();
    }
}

addPalabraDOM();

//  event listeners

// tecleando
texto.addEventListener('input', e => {
    const palabraInsertada = e.target.value;
    if (palabraInsertada === palabraRandom) {
        addPalabraDOM();
        actualizarPunteo();
        // limpiar
        e.target.value = '';
        if (dificultad === 'dificil') {
            tiempo += 1;
        } else if (dificultad === 'medio') {
            tiempo += 2;
        } else {
            tiempo += 3;
        }
    }
})

// Finalizacion del juego

function gameOver() {
    finjuegoEl.innerHTML = `
        <h1>El tiempo acabó</h1>
        <p>Tu punteo final es: ${punteo}</p>
        <button onclick="location.reload()">
            Recargar
        </button>
    `;
    finjuegoEl.style.display = 'flex';
}

// ajustes
ajustesBtn.addEventListener('click', () => {
    ajustes.classList.toggle('hide');
});

// seleccion ajustes
ajustesForm.addEventListener('change', (e) => {
    dificultad = e.target.value;
    localStorage.setItem('dificultad', dificultad);
});