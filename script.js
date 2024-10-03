// Validación de formulario
document.getElementById('inscripcion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Obtener valores del formulario
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contacto = document.getElementById('contacto').value;
    const programa = document.getElementById('programa').value;

    // Validar que los campos estén completos
    if (nombres && apellidos && correo && contacto && programa) {
        alert('Inscripción exitosa. ¡Gracias por inscribirte!');
        document.getElementById('inscripcion-form').reset(); // Limpiar el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
