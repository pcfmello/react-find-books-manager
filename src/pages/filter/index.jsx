import React from 'react';

import './_styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Filter = () => (
  <div className="filter d-flex justify-content-between">
    <div className="w-75 d-flex align-items-center">
      Filtrar por ano de publicação:
      <div className="date-input d-flex">
        <input className="form-control" /><FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} />
      </div>
      até
      <div className="date-input d-flex">
        <input className="form-control" /><FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} />
      </div>

      </div>
    <div className="w-25 d-flex align-items-center justify-content-end">837 resultados encontrados</div>
  </div>
);

export default Filter;
