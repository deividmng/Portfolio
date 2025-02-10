import { initTheme } from './theme.js';
import { initProjects } from './projects.js';
import { initSkills } from './skills.js';
import { sendMail } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    initTheme();
    initProjects();
    initSkills();
    sendMail(); 

});



