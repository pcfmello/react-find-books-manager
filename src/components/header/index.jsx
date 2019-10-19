import React from 'react';
import PropTypes from 'prop-types';

import './_style.scss';

const Header = ({ search, setSearch, handleSubmit }) => {

   const handleSubmitOnEnterKeyPress = e => {
     if (e.key.toUpperCase() !== 'ENTER') {
       return;
     }

    handleSubmit();
   };

  return (
  <div className="header d-flex justify-content-between align-items-center container-fluid">
    <div className="logo">SUPERO</div>

    <input id="input-search" className="form-control h-100" value={search}
           onChange={setSearch} onKeyPress={handleSubmitOnEnterKeyPress}
           placeholder="Busque livros pelo título, autor ou ISBN" autoFocus tabIndex="1" />

    <button className="btn btn-outline-dark h-100" onClick={() => handleSubmit()} tabIndex="4">BUSCAR</button>

  </div>
)};

Header.propTypes  = {
  search: PropTypes.string,
  setSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Header;
