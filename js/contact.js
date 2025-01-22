export function initContact() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        const formData = new FormData(contactForm);
        console.log('Formulario enviado:', Object.fromEntries(formData));
        
        // Mostrar mensaje de éxito
        alert('¡Mensaje enviado con éxito!');
        contactForm.reset();
    });
}