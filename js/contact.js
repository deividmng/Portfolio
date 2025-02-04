import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

export function sendMail() {
    const contactForm = document.getElementById('contactForm');
    emailjs.init('yBfuqxcNFXjnHAsfF');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value; 
            const email = document.getElementById("email_id").value; 
            const message = document.getElementById("message").value; 

            const parms = {
                from_name: name,  
                name: name,
                email_id: email,  
                message: message,
            };

            
            emailjs.send("service_raut8yg", "template_rs30izi", parms)
                .then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: `Message sent successfully, ${name}!`,
                        icon: 'success',
                        confirmButtonText: 'Cool',
                        timer:3000
                    });
                    contactForm.reset();
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Error!',
                        text: `Something went wrong, ${name}. Please try again.`,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                    contactForm.reset(); 
                });
        });
    } else {
        console.error('No se encontró el formulario con el id "contactForm".');
    }
}
