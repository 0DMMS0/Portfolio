const name = "Mauricio";

function Header() {
  return (
    <header>
      <h2>Hola soy, {name}</h2>
      <nav>
        <a href="<About />">About me</a> | <a href="#projects">Projects</a> | <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
