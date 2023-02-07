import "./Navbar.scss";

export default function NavbarOne() {
  return (
    <nav className="navbar__one">
      <div className="nav__container">
        <ul className="nav__menu">
          <li className="nav__item ">
            <a className="nav__link logo" href="#"></a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Store
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Mac
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              iPad
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Watch
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              AirPods
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              TV & Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Only On Apple
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Accessories
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Support
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link search" href="#"></a>
          </li>
          <li className="nav__item">
            <a className="nav__link cart" href="#"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
