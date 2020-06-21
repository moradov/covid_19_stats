import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const Cards = ({ selectedCountryLatestData, dataNotFound }) => {
  return (
    <Fragment>
      {selectedCountryLatestData ? (
        <div className='container text-center'>
          <div className='row'>
            <div className='col-md-4 card-body'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-title display-5 text-warning'>Confirmed</p>
                  <p className='card-title display-6 text-muted '>
                    {!dataNotFound ? (
                      selectedCountryLatestData.Confirmed
                    ) : (
                      <small className='text-danger'>Not Available</small>
                    )}
                  </p>
                  <small className='text-muted'>
                    {new Date(selectedCountryLatestData.Date).toDateString()}
                  </small>
                </div>
              </div>
            </div>
            <div className='col-md-4 card-body'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-title display-5 text-danger'>Deaths</p>
                  <p className='card-title display-6 text-muted '>
                    {!dataNotFound ? (
                      selectedCountryLatestData.Deaths
                    ) : (
                      <small className='text-danger'>Not Available</small>
                    )}
                  </p>
                  <small className='text-muted'>
                    {new Date(selectedCountryLatestData.Date).toDateString()}
                  </small>
                </div>
              </div>
            </div>
            <div className='col-md-4 card-body'>
              <div className='card'>
                <div className='card-body'>
                  <p className='card-title display-5 text-success'>Recovered</p>
                  <p className='card-title display-6 text-muted '>
                    {!dataNotFound ? (
                      selectedCountryLatestData.Recovered
                    ) : (
                      <small className='text-danger'>Not Available</small>
                    )}
                  </p>
                  <small className='text-muted'>
                    {new Date(selectedCountryLatestData.Date).toDateString()}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
Cards.propTypes = {
  dataNotFound: PropTypes.bool.isRequired
};
export default Cards;
