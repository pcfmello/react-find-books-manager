import React from 'react';

import './_styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const List = () => (
  <div className="list d-flex flex-column">
    <table className="books-list">
      <thead>
        <tr>
          <th className="title">Livro</th>
          <th className="author">Autor</th>
          <th className="company">Editora</th>
          <th className="year text-right">Ano</th>
          <th className="actions  text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="title">
            <div>O pequeno príncipe - Edição de bolso</div>
            <div>(9788561706210)</div>
          </td>
          <td className="author">Mark</td>
          <td className="company">Otto</td>
          <td className="year text-right">2011</td>
          <td className="actions text-center">
            <a href="#">Detalhes</a>
          </td>
        </tr>
        <tr>
          <td className="title">
            <div>O pequeno príncipe - Edição de bolso</div>
            <div>(9788561706210)</div>
          </td>
          <td className="author">Mark</td>
          <td className="company">Otto</td>
          <td className="year text-right">2009</td>
          <td className="actions text-center">
            <a href="#">Detalhes</a>
          </td>
        </tr>
        <tr>
          <td className="title">
            <div>O pequeno príncipe - Edição de bolso</div>
            <div>(9788561706210)</div>
          </td>
          <td className="author">Mark</td>
          <td className="company">Otto</td>
          <td className="year text-right">2002</td>
          <td className="actions text-center">
            <a href="#">Detalhes</a>
          </td>
        </tr>
        <tr>
          <td className="title">
            <div>O pequeno príncipe - Edição de bolso</div>
            <div>(9788561706210)</div>
          </td>
          <td className="author">Mark</td>
          <td className="company">Otto</td>
          <td className="year text-right">2005</td>
          <td className="actions  text-center">
            <a href="#">Detalhes</a>
          </td>
        </tr>
        <tr>
          <td className="title">
            <div>O pequeno príncipe - Edição de bolso</div>
            <div>(9788561706210)</div>
          </td>
          <td className="author">Mark</td>
          <td className="company">Otto</td>
          <td className="year text-right">2016</td>
          <td className="actions text-center">
            <a href="#">Detalhes</a>
          </td>
        </tr>
      </tbody>
    </table>

    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#">
            <span aria-hidden="true"><FontAwesomeIcon className="calendar-icon" icon={faAngleDoubleLeft} /></span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <span aria-hidden="true"><FontAwesomeIcon className="calendar-icon" icon={faAngleLeft} /></span>
          </a>
        </li>

        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">4</a></li>
        <li className="page-item"><a className="page-link" href="#">5</a></li>
        <li className="page-item"><a className="page-link" href="#">6</a></li>
        <li className="page-item"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">50</a></li>

        <li className="page-item">
          <a className="page-link" href="#">
            <span aria-hidden="true"><FontAwesomeIcon className="calendar-icon" icon={faAngleDoubleRight} /></span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            <span aria-hidden="true"><FontAwesomeIcon className="calendar-icon" icon={faAngleRight} /></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default List;
