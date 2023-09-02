import './header.css'


const Header = () => {
    

    return (
        <header className="header">
            <a href="#" className="logo">EcoPoints</a>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#objetivos">Objetivos</a>
                <a href="#premios">Prêmios</a>
                <a href="#cadastro">Cadastro</a>
            </nav>

            <div className="bx bx-moon" id="darkMode-icon" onClick={() => {
                let darkModeIcon = document.querySelector('#darkMode-icon');
                darkModeIcon.classList.toggle('bx-sun');
                document.body.classList.toggle('modo-escuro');
            }}></div>


            <div className="bx bx-menu" id="menu-icon" onClick={() => {
                const menuIcon = document.querySelector('#menu-icon');
                let navbar = document.querySelector('.navbar');
                menuIcon.classList.toggle('bx-x');
                navbar.classList.toggle('active');
            }}></div>
        </header>
    )
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })



    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
};


export default Header