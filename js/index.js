const btnMobile = document.getElementById('btn-mobile');
// const imgBotao = document.getElementById('hamburguer');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu)