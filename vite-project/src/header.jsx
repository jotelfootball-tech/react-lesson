import { Handbag } from 'lucide-react';
import { Search } from 'lucide-react';
import Headerbtn from './headerbtn.jsx';


function Header() {
  return (
    <div className="header">
    <div className="header-logo">
    <img src="/Group 9264.png" alt="logo image"/>
    </div>

    <nav  className ="nav-links">
      <ul>
        <li><a href="#"></a>Home</li>
        <li><a href="#"></a>Menu</li>
        <li><a href="#"></a>About Us</li>
        <li><a href="#"></a>Services</li>
        <li><a href="#"></a>Offers</li>
      </ul>
    </nav>
      
      <div className="header-icons">
       <Search />
       <Handbag />
       <Headerbtn />
      </div>
  
    </div >
  )
}
export default Header;