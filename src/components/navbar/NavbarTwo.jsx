export default function NavbarTwo() {
  return (
    <nav className="sec__nav">
      <div className="sec__nav--container">
        <div className="sec__nav--content">
          <div className="sec__nav--title">
            <a href="#" className="airpods">
              AirPods&nbsp;Pro
              <br className="break" />
              (2nd generation)
            </a>
          </div>
          <div className="sec__nav--menu">
            <div className="menu__tray">
              <ul className="menu__items">
                <li className="menu__item">
                  <a className="menu__links" href="#">
                    Overview
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__links" href="#">
                    Tech Specs
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__links" href="#">
                    Compare
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__links cta" href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
