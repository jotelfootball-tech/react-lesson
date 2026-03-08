import { useState } from 'react';
import { Handbag, Search, Menu, X } from 'lucide-react';
import Headerbtn from './headerbtn.jsx';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img src="/Group 9264.png" alt="logo image"/>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Offers</a></li>
          
          {/* Mobile-only icons inside dropdown */}
          <li className="mobile-only-icons">
            <div className="header-icons-mobile">
              <Search />
              <Handbag />
              <Headerbtn />
            </div>
          </li>
        </ul>
      </nav>
      
      <div className="header-icons desktop-only">
       <Search />
       <Handbag />
       <Headerbtn />
      </div>
    </div >
  )
}
export default Header;