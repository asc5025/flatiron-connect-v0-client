import React from 'react';
import './Search.css';

const Search = ({searchTerm, search, industries, handleIndustryChange, handleClear, select, handleFocus}) => {

  return (
    <div className="ui form">
      <div className="fields">
        <div className="three field wide">
          <input
            input="text"
            className="user-input"
            placeholder="Search by company or industry.."
            value={searchTerm}
            onChange={search} />
        </div>
        <div className="three field wide">
          <select name="type" value={select} onChange={handleIndustryChange} onFocus={handleFocus}>
            <option value="">Select Industry...</option>
            {
              industries.map(i => <option key={i} value={i}>{i}</option>)
            }
          </select>
        </div>
        <button className="ui icon button search" onClick={handleClear}>
          <i className="times icon"></i>
        </button>
      </div>
    </div>
  )
}


export default Search;
