import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import '../styles/swiperSp.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const techIcons = {
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' // Puedes cambiar a PostgreSQL si es necesario
};


const projects = [
    {
        title: 'Flashcards App',
        description: 'A modern web application with unique features and responsive design.',
        image: '/flash.png',
        technologies: ['HTML', 'CSS', 'Python'],
        link: 'https://github.com/deividmng/quizPy',
        linkGit: 'https://github.com/deividmng/quizPy'
    },
    
    {
        title: 'S-P-R-Game',
        description: 'Interactive platform developed with the latest web technologies.',
        image: '/spr.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://deividmng.github.io/S-P-R-Game/',
        linkGit: 'https://github.com/deividmng/S-P-R-Game'
    },
    {
        title: 'Blackjack Game',
        description: 'A modern web application with unique features and responsive design.',
        image: '/game.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://blackjackgame22.netlify.app/',
        linkGit: 'https://github.com/deividmng/BlackJackGame/tree/autoDeal'
    },
    {
        title: 'WeatherApp',
        description: 'A modern web application with unique features and responsive design.',
        image: '/weather.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://weatherapp22david.netlify.app/',
        linkGit: 'https://github.com/deividmng/WeatherApp'
    },
    {
        title: 'To doo',
        description: 'A modern web application with unique features and responsive design.',
        image: '/todo.png',
        technologies: ['HTML', 'CSS', 'Python'],
        link: 'https://tareas-py.onrender.com/tasks/create/',
        linkGit: 'https://github.com/deividmng/tareas_py'
    },
   
    {
        title: 'S-P-R-Game',
        description: 'Interactive platform developed with the latest web technologies.',
        image: '/spr.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://deividmng.github.io/S-P-R-Game/',
        linkGit: 'https://github.com/deividmng/S-P-R-Game'
    },


   
];

function createProjectSlide(project) {
    return `
        <div class="swiper-slide">
        <p class="project-description">${project.description}</p> 
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-background">
                <div class="project-info">                   
                    <div class="project-tech">
                        ${project.technologies?.map(tech => 
                            techIcons[tech] ? `<img src="${techIcons[tech]}" alt="${tech}" class="tech-icon">` : ''
                        ).join('')}
                    </div>
                    <a href="${project.link}" class="btn primary" target="_blank">View Project</a>
                    <a href="${project.linkGit}" class="btn primary" target="_blank">Git</a>
                </div>
            </div>
        </div>
    `;
}


function initializeSwiper() {
    return new Swiper('.swiper', {
        modules: [EffectCoverflow, Navigation, Pagination],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopAdditionalSlides: 1,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}

export function initProjects() {
    const projectsContainer = document.getElementById('projectsGrid');
    projectsContainer.className = 'projects-slider';
    
    projectsContainer.innerHTML = `
        <div class="swiper">
            <div class="swiper-wrapper">
                ${projects.map(createProjectSlide).join('')}
            </div>
            <div class="swiper-pagination"></div>
            <div class="slider-nav">
                <button class="slider-button swiper-button-prev">←</button>
                <button class="slider-button swiper-button-next">→</button>
            </div>
        </div>
    `;

    initializeSwiper();
}