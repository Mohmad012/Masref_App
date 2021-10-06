import { NavLink } from "react-router-dom";

const SecHeader = ({Logo , dropdownItem , MenuInfo}) => {

  return (
      <nav className="navbar navbar-expand-md navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#"><span><img src={Logo} alt="logo" /></span> Masref</a>
          {/* Toggler/collapsibe Button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Home</a>
                <div className="dropdown-menu">
                  {dropdownItem && dropdownItem.map((item , key) => (
                      <NavLink key={key} className="dropdown-item" to={item.path}>{item.nameLink}</NavLink>
                  ))}
                </div>
              </li>
              {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <NavLink className="nav-link" to={item.path}>{item.nameLink}</NavLink>
                </li>
              ))}
              <a href="#test-popup" data-toggle="modal" data-target="#test-popup" className="open-popup-link btn login-btn mr-im">Log in</a>
              <a href="#signup-popup" data-toggle="modal" data-target="#signup-popup" className="open-signup-link btn login-btn login-last">Signup </a>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default SecHeader;