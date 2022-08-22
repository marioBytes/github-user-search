import React from 'react';
import propTypes from 'prop-types';

import IconSearch from './svgs/icon-search';

const SearchBar = (props) => {
  return (
    <div className="search-bar shadow">
      <label htmlFor="search">
        <IconSearch />
      </label>
      <input
        type="text"
        placeholder="Search GitHub username..."
        id="search"
        name="search"
        style={{ borderRadius: '5px' }}
        value={props.value}
        onChange={props.onChange}
      />
      <button className="search-button" onClick={props.onClick}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
};

export default SearchBar;
