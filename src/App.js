import React from 'react';

import API from "axios";

import Header from './components/header';
import Filter from './components/filter';
import List from './components/list';

import './_styles.scss';


class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      startYear: '',
      endYear: '',
      list: [],
      errorMessage: '',
      showDetails: false,
      pagination: {
        totalItemsCount: 0,
        activePage: 1,
        itemsCountPerPage: 11,
        pageRangeDisplayed: 6,
      }
    };

    this._getBooks();

    this._getBooks = this._getBooks.bind(this);
  }

  setError(errorMessage) {
    this.setState({ errorMessage });
  }

  _getBooks = async (page = 1) => {

    try {

      this.setError('');

      if (this.state.endYear && this.state.startYear > this.state.endYear) {
        throw new Error('Ano final deve ser maior ou igual ao ano inicial');
      }

      let query = '';

      if (this.state.search.length === 13 && Number(this.state.search)) {
        query = `&isbn=${this.state.search}`;

      } else {

        if(this.state.search.trim()) {
          query += `&title_like=^${this.state.search}`;
        }

        if (this.state.startYear) {
          query += `&year_gte=${this.state.startYear}`;
        }

        if (this.state.endYear) {
          query += `&year_lte=${this.state.endYear}`;
        }
      }

      query += `&_page=${page}&_limit=${this.state.pagination.itemsCountPerPage}`;

      const response = await API.get(`http://localhost:3005/books/?${query}`);

      if(response.status !== 200) {

      }

      this.setState({
        list: response.data,
        pagination: { ...this.state.pagination, totalItemsCount: Number(response.headers['x-total-count']), activePage: page }
      });

    } catch(e) {
      if (e.message === 'Network Error') {
        this.setError('Erro ao efetuar sua consulta. Verifique sua conexão com a internet');
      } else if(e.response && e.response.status !== 200) {
        this.setError('Houve um erro ao efetuar sua consulta. Tente novamente mais tarde ou contate o Administrador.')
      }
      else {
        this.setError(e.message);
      }
    }
  };

  isValidYear(value) {
    if (value < 1) {
      return '';
    }

    if (value.length > 4 || value > new Date().getFullYear()) {
      return new Date().getFullYear().toString();
    }

    return value;
  }

  render() {

    const { search, startYear, endYear, list, errorMessage, pagination } = this.state;

    return (
      <div className="app">
        {errorMessage &&
          <div className="alert alert-warning" role="alert">
            <div className="d-flex flex-column">
              <button type="button" onClick={() => this.setState({ errorMessage: ''})} className="close text-right" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              {errorMessage}
            </div>
          </div>
        }
        <header>
          <Header
            setSearch={e => this.setState({search : e.target.value })}
            handleSubmit={this._getBooks}
            {...{search}}
          />
        </header>
        <main>
          <Filter
            {...{startYear, endYear}}
            total={this.state.pagination.totalItemsCount}
            setStartYear={e => this.setState({startYear: this.isValidYear(e.target.value)})}
            setEndYear={e => this.setState({ endYear: this.isValidYear(e.target.value) })}
          />
          <List {...{list, pagination}} handleSubmit={this._getBooks} />
        </main>
      </div>
    );
  }
}

export default App;
