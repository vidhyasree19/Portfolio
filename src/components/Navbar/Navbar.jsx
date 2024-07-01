import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
