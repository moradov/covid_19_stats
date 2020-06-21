import React from 'react';
import PropTypes from 'prop-types';
import { availableContries } from '../../data';

const CountryPicker = ({ selectInputHandler, selectedCountry }) => {
  const countriesList = availableContries.map(coun => coun.Country);
  const sortedCountriesList = countriesList.sort();
  return (
    <div>
      <div className='form-group form-inline'>
        <select
          defaultValue={selectedCountry}
          className='form-control m-auto'
          onChange={event => selectInputHandler(event)}
        >
          {sortedCountriesList.map(country => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

CountryPicker.propTypes = {
  selectInputHandler: PropTypes.func.isRequired,
  selectedCountry: PropTypes.string.isRequired
};
export default CountryPicker;
