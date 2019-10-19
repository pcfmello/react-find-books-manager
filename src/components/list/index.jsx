import React from 'react';
import PropTypes from 'prop-types';

import Pagination from "react-js-pagination";
import { PulseSpinner } from "react-spinners-kit";

import './_styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import Details from "../details";

class List extends React.PureComponent {

  constructor(props) {
    super(props);

    this._details = React.createRef();
  }

  render() {

    const { list, pagination, isLoading } = this.props;

    const totalPages = Math.ceil(pagination.totalItemsCount / pagination.itemsCountPerPage);

    const handleOpenDetailsOnKeyPress = (e, id) => {

      switch(e.nativeEvent.code.toUpperCase()) {
        case 'SPACE':
        case 'ENTER':
        case 'NUMPADENTER':
          this._details._open(id);
          break;
        default: return;
      }
    };

    return (
      <div className="list">
        {
          isLoading && (
            <div className="empty-list d-flex flex-column justify-content-center align-items-center">
              <div className="loading-spinner">
                <PulseSpinner size={70} color="darkgrey" />
              </div>
              Carregando
            </div>
          )
        }
        {
          !isLoading && !list.length && (
            <div className="empty-list d-flex justify-content-center align-items-center">
              Nenhum item encontrado
            </div>
          )
        }
        {
          !isLoading && !!list.length && (
            <div className="d-flex flex-column">
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
                  {list.map((item, index) =>
                    <tr key={item.id}>
                      <td className="title">
                        <div>{item.title}</div>
                        <div>({item.isbn})</div>
                      </td>
                      <td className="author">{item.author}</td>
                      <td className="company">{item.publishingCompany}</td>
                      <td className="year text-right">{item.year}</td>
                      <td className="actions text-center">
                        <button className="btn btn-link" onClick={() => this._details._open(item.id)}
                                onKeyPress={e => handleOpenDetailsOnKeyPress(e, item.id)} tabIndex={5 + index}>Detalhes</button>
                      </td>
                  </tr>
                  )}
                </tbody>
              </table>

              <div>
                <Pagination
                  activePage={pagination.activePage}
                  itemsCountPerPage={pagination.itemsCountPerPage}
                  totalItemsCount={pagination.totalItemsCount}
                  pageRangeDisplayed={pagination.pageRangeDisplayed}
                  onChange={this.props.handleSubmit}
                  firstPageText={<FontAwesomeIcon icon={faAngleDoubleLeft} />}
                  prevPageText={<FontAwesomeIcon className="calendar-icon" icon={faAngleLeft} />}
                  nextPageText={<FontAwesomeIcon className="calendar-icon" icon={faAngleRight} />}
                  lastPageText={<FontAwesomeIcon icon={faAngleDoubleRight} />}

                />
                <div className="total-pages text-center">{totalPages} página{totalPages > 1 ? 's' : ''}</div>
              </div>
            </div>
          )
        }
        <Details ref={elm => this._details = elm} />
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default List;
