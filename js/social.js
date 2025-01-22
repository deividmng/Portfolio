export function initSocial() {
    const socialLinks = [
        { name: 'GitHub', url: '#', icon: '📦' },
        { name: 'LinkedIn', url: '#', icon: '💼' },
        { name: 'Twitter', url: '#', icon: '🐦' }
    ];

    const socialContainer = document.getElementById('socialLinks');
    
    socialLinks.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.className = 'social-link';
        link.innerHTML = `${social.icon} ${social.name}`;
        link.target = '_blank';
        socialContainer.appendChild(link);
    });
}