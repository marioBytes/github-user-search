import React from 'react';
import propTypes from 'prop-types';

import IconSearch from './svgs/icon-search';

const SearchBar = (props) => {
  return (
    <div className="search-bar shadow">
      <div className="search-bar__input-container">
        <div className="search-bar__input-container__group">
          <label htmlFor="search">
            <IconSearch />
          </label>
          <input
            type="text"
            placeholder="Search GitHub username..."
            id="search"
            name="search"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
        {props.errorMessage && <p className="search-bar__input-container__error-message">{props.errorMessage}</p>}
      </div>
      <button className="search-button" disabled={props.loading} onClick={props.onClick}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  errorMessage: propTypes.string,
  loading: propTypes.bool,
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  value: propTypes.string,
};

export default SearchBar;
