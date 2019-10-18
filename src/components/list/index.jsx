import React from 'react';
import PropTypes from 'prop-types';

import Pagination from "react-js-pagination";

import './_styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

class List extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activePage: 4
    };

    this._handlePageChange = this._handlePageChange.bind(this);
  }

  _handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {

    const { activePage } = this.state;

    return (
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

        <div>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={11}
            totalItemsCount={450}
            pageRangeDisplayed={6}
            onChange={this._handlePageChange}
            firstPageText={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
            prevPageText={<FontAwesomeIcon className="calendar-icon" icon={faAngleLeft} />}
            nextPageText={<FontAwesomeIcon className="calendar-icon" icon={faAngleRight} />}
            lastPageText={<FontAwesomeIcon icon={faAngleDoubleRight} />}

          />
        </div>

      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired
};

export default List;
