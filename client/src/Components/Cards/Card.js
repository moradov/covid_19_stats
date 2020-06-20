import React from 'react';

const Card = ({ statusName, statusNumber, lastUpdate }) => {
  let textClass;
  if (statusName == '') {
  }
  return (
    <div className='col-md-4 card-body'>
      <div className='card'>
        <div className='card-body'>
          <p className='card-title display-5 text-warning'>{statusName} </p>
          <p className='card-title display-6 text-muted '>{statusNumber} </p>
          <small className='text-muted'> {lastUpdate} </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
