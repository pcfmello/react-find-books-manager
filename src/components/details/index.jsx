import React from 'react';

import API from "axios";

import './_styles.scss';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Details extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      item: {}
    };

    this._open = this._open.bind(this);
  }

  _open(id) {
    this.setState({ isOpen: true }, async () => {

      const response = await API.get(`http://localhost:3005/books/${id}`);
      this.setState({ item: response.data });
    })
  }

  render() {

    const { isOpen, item } = this.state;

    if (!isOpen) {
      return false;
    }

    return (
      <Modal isOpen={true} toggle={() => this.setState({ isOpen: false })}>
        <ModalHeader toggle={this._toggleDetails} className="text-uppercase">Detalhes</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="form-group col-md-12">
              <div>Título</div>
              <div className="text-uppercase font-weight-bold">{item.title}</div>
            </div>
            <div className="form-group col-md-10">
              <div>Autor</div>
              <div className="text-uppercase font-weight-bold">{item.author}</div>
            </div>
            <div className="form-group col-md-2">
              <div>Ano</div>
              <div className="text-uppercase font-weight-bold">{item.year}</div>
            </div>

            <div className="form-group col-md-12">
              <div>Editora</div>
              <div className="text-uppercase font-weight-bold">{item.publishingCompany}</div>
            </div>

            <div className="form-group col-md-6">
              <div>ISBN</div>
              <div className="text-uppercase font-weight-bold">{item.isbn}</div>
            </div>
            <div className="form-group col-md-6">
              <div>Idioma</div>
              <div className="text-uppercase font-weight-bold">{item.language}</div>
            </div>

            <div className="form-group col-md-10">
              <div>Dimensão</div>
              <div className="text-uppercase font-weight-bold">{item.size}</div>
            </div>
            <div className="form-group col-md-2">
              <div>Peso</div>
              <div className="text-uppercase font-weight-bold">{item.weight}</div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn-outline-dark h-100 font-weight-bold" onClick={() => this.setState({ isOpen: false })}>FECHAR</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default Details;
