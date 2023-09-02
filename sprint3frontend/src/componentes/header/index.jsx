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
    
        <div className="bx bx-moon" id="darkMode-icon"></div>
    
        <div className="bx bx-menu" id="menu-icon" onClick="menuFunction()"></div>
      </header>
    )
}

export default Header