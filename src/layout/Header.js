import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const ModeToggle = () => {
  const [mode, setMode] = useState('human');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('siteMode');
    const initial = saved === 'machine' ? 'machine' : 'human';
    setMode(initial);
    document.body.setAttribute('data-mode', initial);
  }, []);

  const toggleMode = () => {
    const next = mode === 'human' ? 'machine' : 'human';
    setMode(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('siteMode', next);
    }
    document.body.setAttribute('data-mode', next);
  };

  return (
    <button className={`mode-toggle ${mode}`} onClick={toggleMode} aria-label="Toggle Human/Machine mode">
      <span className="label">Human</span>
      <span className={`switch`} />
      <span className="label">Machine</span>
    </button>
  );
};

const Menu = () => (
  <Fragment>
    <div className="logo hover-masks-logo">
      <a href="#">
        <span className="mask-lnk">
          Richa <strong>Gupta</strong>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          Download <strong>CV</strong>
        </span>
      </a>
    </div>
    {/* top menu */}
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            {/* Portfolio button hidden for now */}
            {/* <li className="menu-item menu-item-has-children">
              <Link href="/portfolio">
                <span className="mask-lnk">Portfolio</span>
                <span className="mask-lnk mask-lnk-hover">Portfolio</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Menu />
      <ModeToggle />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
        <ModeToggle />
      </div>
    </header>
  );
};
