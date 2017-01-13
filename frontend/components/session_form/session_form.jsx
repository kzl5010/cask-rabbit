import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "", zip_code: "", first_name: "", last_name: ""};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		debugger
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
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

	render() {
		if (this.props.formType === "signup") {
			return (
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						Welcome to CaskRabbit!
						<br/>
						Please {this.props.formType} or {this.navLink()}
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label> Email:
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input" />
							</label>
							<br/>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<label> First Name:
								<input type="text"
									value={this.state.first_name}
									onChange={this.update("first_name")}
									className="login-input" />
							</label>
							<br/>
							<label> Last Name:
								<input type="text"
									value={this.state.last_name}
									onChange={this.update("last_name")}
									className="login-input" />
							</label>
							<br/>
							<label> Zip_code:
								<input type="text"
									value={this.state.zip_code}
									onChange={this.update("zip_code")}
									className="login-input" />
							</label>
							<br/>
							<input type="submit" value="Submit" />
						</div>
					</form>
				</div>
			);
		}
		else {
			return (
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						Welcome to CaskRabbit!
						<br/>
						Please {this.props.formType} or {this.navLink()}
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label> Email:
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input" />
							</label>
							<br/>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<input type="submit" value="Submit" />
						</div>
					</form>
				</div>
			);
		}
	}
}


export default withRouter(SessionForm);
