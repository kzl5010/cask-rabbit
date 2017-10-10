import React from 'react';
import { Modal, Button, Tooltip, Col, FormControl, InputGroup } from 'react-bootstrap';
//TODO ADD VERIFICATION WITHIN THE MODAL USING BOOTSTRAP
class SignupModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: "", password: "", first_name: "", last_name: "", first_buy: "true", showModal: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
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
    this.props.signup({user});
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
      <span className="login-form-container">
      <Button className="signup-button"
              bsStyle="link"
              bsSize="medium"
              onClick={this.open}
      >sign up
      </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
        <Col md={12}>
        <img src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1495010116/Logomakr_0lSyvU_j6ldwz.png" alt="logo" className="logo-img"/>
        </Col>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={this.handleSubmit} className="form-horizontal">
        <h1 className="welcome-screen-text text-center">	Get your racquet fast  </h1>
          <div className="login-form">

            {this.renderErrors()}
            {//<FormGroup>
            }
            <InputGroup>
              <InputGroup.Addon>
              <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl type="text"
                           value={this.state.email}
                           onChange={this.update("email")}
                           className="login-input" placeholder="Email"/>
            </InputGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-lock fa-fw" aria-hidden="true"></i>
              </InputGroup.Addon>

              <FormControl type="password"
                           value={this.state.password}
                           onChange={this.update("password")}
                           className="login-input" placeholder="Password"/>
            </InputGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-user fa-fw" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl type="text"
                           value={this.state.first_name}
                           onChange={this.update("first_name")}
                           className="login-input" placeholder="First Name" />
            </InputGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-user fa-fw" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl type="text"
                           value={this.state.last_name}
                           onChange={this.update("last_name")}
                           className="login-input" placeholder="Last Name" />
            </InputGroup>
            <div className="text-center">
            <Button type="submit" bsSize="medium">Sign Up</Button>
            </div>
          </div>
          </form>

          </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close} bsSize="medium">Close</Button>
        </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default SignupModal;
