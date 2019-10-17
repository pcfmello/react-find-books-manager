import React from 'react';

import './_style.scss';

const Index = () => (
  <div className="header d-flex justify-content-between align-items-center container-fluid">
    <div className="logo">SUPERO</div>

    <input type="text" className="form-control h-100"
           placeholder="Busque livros pelo título, autor ou ISBN" />

    <button className="btn btn-outline-dark h-100">BUSCAR</button>

  </div>
);

export default Index;
