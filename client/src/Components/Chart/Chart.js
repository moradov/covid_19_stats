import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const Chart = ({ selectedCountryDailyData, dataNotFound }) => {
  return (
    <Fragment>
      {selectedCountryDailyData.length > 0 ? (
        <Line
          data={{
            labels: !dataNotFound
              ? selectedCountryDailyData.map(sec =>
                  new Date(sec.Date).toDateString()
                )
              : null,
            datasets: [
              {
                data: !dataNotFound
                  ? selectedCountryDailyData.map(sec => sec.Confirmed)
                  : null,
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
              },
              {
                data: !dataNotFound
                  ? selectedCountryDailyData.map(sec => sec.Deaths)
                  : null,
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
              }
            ]
          }}
          height={100}
        />
      ) : null}
    </Fragment>
  );
};
Chart.propTypes = {
  selectedCountryDailyData: PropTypes.array,
  dataNotFound: PropTypes.bool.isRequired
};
export default Chart;
