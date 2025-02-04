const skills = [
    {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python'
    },
    {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap'
    },
    {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"'
    }
];

function createSkillCard(skill, index) {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.style.animationDelay = `${index * 0.1}s`;
    
    skillCard.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
        <span class="skill-name">${skill.name}</span>
    `;
    
    return skillCard;
}

export function initSkills() {
    const skillTags = document.getElementById('skillTags');
    skillTags.className = 'skills-grid';
    
    skills.forEach((skill, index) => {
        const skillCard = createSkillCard(skill, index);
        skillTags.appendChild(skillCard);
    });
}


