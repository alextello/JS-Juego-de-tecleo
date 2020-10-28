const palabra = document.getElementById('palabra');
const texto = document.getElementById('texto');
const punteoEl = document.getElementById('punteo');
const tiempoEl = document.getElementById('tiempo');
const finjuegoEl = document.getElementById('fin-juego');
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

addPalabraDOM();

//  event listeners
texto.addEventListener('input', e => {
    const palabraInsertada = e.target.value;
    if (palabraInsertada === palabraRandom) {
        addPalabraDOM();
        actualizarPunteo();
        // limpiar
        e.target.value = '';
    }
})