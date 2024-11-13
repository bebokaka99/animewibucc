
const episodeLinks = document.querySelectorAll('.link-tap-phim');


const currentUrl = window.location.href;  


episodeLinks.forEach(link => {
    
    if (currentUrl.includes(link.getAttribute('href'))) {
        link.classList.add('active'); 
    }
});
