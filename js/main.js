import { initTheme } from './theme.js';
import { initProjects } from './projects.js';
import { initSkills } from './skills.js';
import { initSocial } from './social.js';
import { initContact } from './contact.js';

// Inicializar todos los módulos
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initProjects();
    initSkills();
    initSocial();
    initContact();
});