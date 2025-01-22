import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
    {
        title: 'Project 1',
        description: 'A modern web application with unique features and responsive design.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Interactive platform developed with the latest web technologies.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['React', 'Node.js'],
        link: '#'
    },
   
];

function createProjectSlide(project) {
    return `
        <div class="swiper-slide">
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                    <a href="${project.link}" class="btn primary" target="_blank">View Project</a>
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