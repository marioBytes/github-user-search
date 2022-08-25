import React from 'react';

import IconLight from './svgs/icon-sun';
import IconDark from './svgs/icon-moon';

const Topbar = ({ switchTheme, theme }) => {
  return (
    <nav className="topbar" role="navigation">
      <div>
        <h1>devfinder</h1>
      </div>
      <button className="theme-switcher" onClick={switchTheme}>
        {theme === 'dark' ? (
          <React.Fragment>
            LIGHT
            <IconLight fill="#ffffff" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            DARK
            <IconDark fill="#1e2a47" />
          </React.Fragment>
        )}
      </button>
    </nav>
  );
};

export default Topbar;
