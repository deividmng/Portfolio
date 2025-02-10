

 export function downloadCV() {
     const cvUrl = '../public/DavidEHaro.pdf'; 
     const link = document.createElement('a');
     link.href = cvUrl;
     link.download = 'DavidEHaro.pdf';  
     link.click();  
 }
 

 document.getElementById('downloadButton').addEventListener('click', downloadCV);
 