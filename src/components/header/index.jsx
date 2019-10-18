import React from 'react';
import PropTypes from 'prop-types';

import './_style.scss';

const Header = ({ search, setSearch, handleSubmit }) => (
  <div className="header d-flex justify-content-between align-items-center container-fluid">
    <div className="logo">SUPERO</div>

    <input type="text" className="form-control h-100" value={search}
           onChange={setSearch} placeholder="Busque livros pelo título, autor ou ISBN" />

    <button className="btn btn-outline-dark h-100" onClick={() => handleSubmit()}>BUSCAR</button>

  </div>
);

Header.propTypes  = {
  search: PropTypes.string,
  setSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Header;
