import React from 'react';
import PropTypes from 'prop-types';
import { availableContries } from '../../data';

const CountryPicker = ({ selectInputHandler, selectedCountry }) => {
  return (
    <div>
      <div className='form-group form-inline'>
        <select
          defaultValue={selectedCountry}
          className='form-control m-auto'
          onChange={event => selectInputHandler(event)}
        >
          {availableContries.map(country => (
            <option value={country.Country} key={country.Country}>
              {country.Country}
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
