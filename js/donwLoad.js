

 export function downloadCV() {
     const cvUrl = '../public/DavidHaro.pdf'; // Ruta al archivo CV
     const link = document.createElement('a');
     link.href = cvUrl;
     link.download = 'DavidHaro.pdf';  // Nombre del archivo descargado
     link.click();  // Simula el clic para iniciar la descarga
 }
 
 // Asociar el evento de clic al botón
 document.getElementById('downloadButton').addEventListener('click', downloadCV);
 