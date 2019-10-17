import React from 'react';

import './_styles.scss';

import Header from "./components/header";
import Filter from "./components/filter";
import List from "./components/list";

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      startYear: '',
      endYear: '',
      list: [],
      errorMessage: '',
      pagination: {
        page: 1,
        totalPage: 500/10,
        perPage: 10,
        total: 500
      }
    };

    this._handleChangeStartYear = this._handleChangeStartYear.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {

    if (this.state.startYear > this.state.endYear) {
      this.setState({ errorMessage: 'Ano final deve ser maior ou igual ao ano inicial' });
      return;
    }
    console.log(this.state);
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

  _handleChangeStartYear(value) {
    this.setState({startYear: this.isValidYear(value) });
  }

  render() {

    const { search, startYear, endYear, list, errorMessage } = this.state;

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
            handleSubmit={this._handleSubmit}
            {...{search}}
          />
        </header>
        <main>
          <Filter
            {...{startYear, endYear}}
            total={this.state.pagination.total}
            setStartYear={e => this.setState({startYear: this.isValidYear(e.target.value)})}
            setEndYear={e => this.setState({ endYear: this.isValidYear(e.target.value) })}
          />
          <List {...{list}} />
        </main>
      </div>
    );
  }
}

export default App;
