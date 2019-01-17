import React from 'react';

const Search = ({searchTerm, search, industries, handleIndustryChange, handleClear, select, handleFocus}) => {

  return (
    <div className="ui form">
      <div className="two fields">
        <div className="field">
          <label>Search by Company, Industry</label>
          <input
            input="text"
            placeholder="Search by company or industry.."
            value={searchTerm}
            onChange={search} />
        </div>
        <div className="field">
          <label>Select Industry</label>
          <select name="type" value={select} onChange={handleIndustryChange} onFocus={handleFocus}>
            <option value="">Please select...</option>
            {
              industries.map(i => <option key={i} value={i}>{i}</option>)
            }
          </select>
        </div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}

export default Search;
