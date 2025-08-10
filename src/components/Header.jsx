import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h2>Welcome to my Portfolio</h2>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About me</Link> |{' '}
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;
