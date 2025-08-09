// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Verificar si el nombre ya existe en la lista (opcional)
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.focus();
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    actualizarListaAmigos();
    
    // Limpiar resultado anterior si existe
    limpiarResultado();
    
    // Dar foco al campo de entrada para continuar agregando nombres
    inputAmigo.focus();
}

/**
 * Función para actualizar la visualización de la lista de amigos
 */
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.setAttribute('data-index', index);
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para realizar el sorteo de amigo secreto
 */
function sortearAmigo() {
    // Verificar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega al menos un nombre para realizar el sorteo.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSeleccionado);
}

/**
 * Función para mostrar el resultado del sorteo
 * @param {string} nombreAmigo - El nombre del amigo seleccionado
 */
function mostrarResultado(nombreAmigo) {
    const resultado = document.getElementById('resultado');
    
    // Limpiar resultado anterior
    resultado.innerHTML = '';
    
    // Crear elemento para mostrar el resultado
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${nombreAmigo}!`;
    
    resultado.appendChild(li);
}

/**
 * Función para limpiar el resultado anterior
 */
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

/**
 * Función para manejar la tecla Enter en el campo de entrada
 */
function manejarEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

// Agregar event listener para la tecla Enter en el campo de entrada
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', manejarEnter);
    
    // Dar foco al campo de entrada al cargar la página
    inputAmigo.focus();
});

// Funciones adicionales para mejorar la experiencia del usuario

/**
 * Función para reiniciar el juego (opcional)
 */
function reiniciarJuego() {
    amigos = [];
    actualizarListaAmigos();
    limpiarResultado();
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

/**
 * Función para eliminar un amigo de la lista (funcionalidad extra)
 * @param {number} index - Índice del amigo a eliminar
 */
function eliminarAmigo(index) {
    if (index >= 0 && index < amigos.length) {
        amigos.splice(index, 1);
        actualizarListaAmigos();
        limpiarResultado();
    }
}