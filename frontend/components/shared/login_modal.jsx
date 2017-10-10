import React from 'react';
import { Modal, Button, Tooltip, Col, FormControl, Clearfix, InputGroup, Image } from 'react-bootstrap';

class LoginModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: "", password: "", showModal: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.headertype = this.props.headertype || "header-link";
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
      <span className="login1-form-container">
      <Button className="pull-right"
              bsStyle="link"
              bsSize="sm"
              onClick={this.open}
      > Login
      </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

        <h1 className="welcome-screen-text text-center">	Get Learning!  </h1>
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <div className="login-form">


            {this.renderErrors()}
            <InputGroup>
              <InputGroup.Addon>
              <i className="fa fa-envelope fa-fw fa-fh" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl type="text"
                           value={this.state.email}
                           onChange={this.update("email")}
                           className="login-input" placeholder="Email"/>
            </InputGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-lock fa-fw fa-fh" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl type="password"
                           value={this.state.password}
                           onChange={this.update("password")}
                           className="login-input" placeholder="Password"/>
            </InputGroup>
            <div className="text-center">
            <Button type="submit" bsSize="medium">Sign in</Button>
            </div>
          </div>
          </form>
          </Modal.Body>

          <Clearfix visibleSmBlock />
        <Modal.Footer>
          <Button onClick={this.close} bsSize="medium">Close</Button>
        </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default LoginModal;
