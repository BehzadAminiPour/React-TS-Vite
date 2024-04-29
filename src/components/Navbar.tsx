import { Link } from "react-router-dom";

interface Props {
  items: number;
}

const Navbar = ({ items }: Props) => {
  return (
    <nav className="navbar bg-secondary p-1 navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/namelist" className="nav-link">
              Name List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/form" className="nav-link">
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/listgroup" className="nav-link">
              List Group
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/like" className="nav-link">
              Like
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/game" className="nav-link">
              Game
            </Link>
          </li>
        </ul>
        <li className="nav-item d-flex">Numbur of items : {items}</li>
      </div>
    </nav>
  );
};

export default Navbar;
