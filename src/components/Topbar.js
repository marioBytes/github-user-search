import React from 'react';

import IconLight from './svgs/icon-sun';
import IconDark from './svgs/icon-moon';

const Topbar = ({ switchTheme, theme }) => {
  return (
    <div className="topbar">
      <div>
        <h1>devfinder</h1>
      </div>
      <button className="theme-switcher" onClick={switchTheme}>
        {theme === 'dark' ? (
          <React.Fragment>
            <p>LIGHT</p>
            <IconLight fill="#ffffff" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>DARK</p>
            <IconDark fill="#1e2a47" />
          </React.Fragment>
        )}
      </button>
    </div>
  );
};

export default Topbar;
