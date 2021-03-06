import React from 'react';
import PropTypes from 'prop-types';

import './_styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Filter = ({ startYear, endYear, setStartYear, setEndYear, total }) => (
  <div className="filter d-flex justify-content-between">
    <div className="w-75 d-flex align-items-center">
      Filtrar por ano de publicação:
      <div className="date-input d-flex">
        <input
          type="number"
          className="form-control"
          value={startYear}
          onChange={setStartYear}
          tabIndex="2"
        />
        <FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} />
      </div>
      até
      <div className="date-input d-flex">
        <input
          type="number"
          className="form-control"
          value={endYear}
          onChange={setEndYear}
          tabIndex="3"
        />
        <FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} />
      </div>

      </div>
    {total > 0 && <div className="w-25 d-flex align-items-center justify-content-end">
      {total} resultado{total > 1 ? 's' : ''} encontrado{total > 1 ? 's' : ''}</div>
    }
  </div>
);

Filter.propTypes = {
  startYear: PropTypes.string,
  endYear: PropTypes.string,
  setStartYear: PropTypes.func.isRequired,
  setEndYear: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

export default Filter;
