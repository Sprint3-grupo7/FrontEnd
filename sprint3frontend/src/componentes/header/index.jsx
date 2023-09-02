import './header.css'


const Header = () => {
    let darkModeIcon = document.querySelector('#darkMode-icon');
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
                darkModeIcon.classList.toggle('bx-sun');
                document.body.classList.toggle('modo-escuro');
            }}></div>


            <div className="bx bx-menu" id="menu-icon" onClick="menuFunction()"></div>
        </header>
    )
}



export default Header