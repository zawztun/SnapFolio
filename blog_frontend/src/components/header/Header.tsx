import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="header_container">
        <Link to="/" className="header_logo">
          HOME
        </Link>
        <div>
          <ul className="header_items">
            <Link to="/userform">User Form</Link>
            <Link to="/userlist">User List</Link>
            <Link to="/articlelist">Article List</Link>
            <Link to="/articleForm">Article Form</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
