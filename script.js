// Validación de formulario
document.getElementById('inscripcion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Obtener valores del formulario
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contacto = document.getElementById('contacto').value;
    const grupo = document.getElementById('grupo').value; // Obtener el valor del select

    // Validar que los campos estén completos
    if (nombres && apellidos && correo && contacto && grupo) {
        alert('Registro Exitoso. ¡Gracias por inscribirte!');
        document.getElementById('inscripcion-form').reset(); // Limpiar el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para mostrar el semestre seleccionado
function mostrarSemestre(semestre) {
    // Ocultar todas las tablas de semestres
    const tablas = document.querySelectorAll('.semestre-tabla');
    tablas.forEach(tabla => tabla.style.display = 'none');

    // Mostrar la tabla del semestre seleccionado
    document.getElementById('semestre' + semestre).style.display = 'block';
}
