// 1. Declarar variable de tipo array para almacenar los nombres
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputNombre = document.getElementById('nombreAmigo');
    const nombreAmigo = inputNombre.value.trim();
    
    // Validar la entrada - verificar que no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos usando push()
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputNombre.value = '';
    
    // Actualizar la visualización de la lista
    actualizarLista();
}

// 3. Función para actualizar la lista visual
function actualizarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Iterar sobre el arreglo usando bucle for
    for (let i = 0; i < amigos.length; i++) {
        // Crear nuevo elemento de lista
        const li = document.createElement('li');
        
        // Agregar el texto del amigo
        li.textContent = amigos[i];
        
        // Agregar elemento a la lista
        lista.appendChild(li);
    }
}

// 4. Función para sortear amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}