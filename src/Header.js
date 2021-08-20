import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Etusivu</NavLink>
          </li>
          <li>
            <NavLink to="/about">Tietoa meistä!</NavLink>
          </li>
          <li>
            <NavLink to="/services">Palvelut</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Yhteystiedot</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
