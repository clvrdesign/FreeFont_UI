// toggle menu
document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');

    toggleMenu.addEventListener('click', () => {
        menu.classList.toggle('-translate-y-[750px]');
        if(menu.classList.contains('-translate-y-[750px]')){
            toggleMenu.innerHTML= '<i class="bi bi-three-dots-vertical"></i>';
        } else {
            toggleMenu.innerHTML= '<i class="bi bi-x"></i>';
        }
        
    })
})

// copyright
document.addEventListener('DOMContentLoaded', () => {
    const copyright = document.getElementById('copyright');
    const year = new Date().getFullYear();
    copyright.innerHTML = year;
})