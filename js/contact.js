import Swal from 'sweetalert2'; 
export function sendMail() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Agregar el evento 'submit' al formulario
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const name = document.getElementById("name").value; 
            const parms = {
                name: name,
                email: document.getElementById("email_id").value,
                message: document.getElementById("message").value,
            };

            
            emailjs.send("service_uvav23f", "template_rs30izi", parms)
                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: `Message sent successfully, ${name}!`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    contactForm.reset();
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Success!',
                        text: `Message sent successfully, ${name}!`, 
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    contactForm.reset(); 
                });
        });
    } else {
        console.error('No se encontró el formulario con el id "contactForm".');
    }
}
