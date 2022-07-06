import { Link } from 'react-router-dom';

import './style.scss';

const Navbar = () => (
  <nav className="navbar">
    <h2 className="navbar__title">Math Magicians</h2>
    <ul className="navbar__links">
      <li className="navbar__links-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar__links-item">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className="navbar__links-item">
        <Link to="/quotes">Quotes</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
