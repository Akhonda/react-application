// Menu.jsx
import "../../App.css";
import Logo from "../../assets/logo.png";

const Menu = () => {
  return (
    <header className="menu-header">
      <div className="menu-container">
        {/* Logo */}
        <a href="/" className="menu-logo">
          <img src={Logo} alt="Logo" />
        </a>

        {/* Navigation */}
        <nav className="menu-nav">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">History</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="menu-buttons">
          <a href="/" className="login-btn">
            Login
          </a>
          <a href="/" className="register-btn">
            Register
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Menu;
