import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		console.log(props);
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
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
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
				<h1 className="welcome-screen-text">	Get Help Fast  </h1>
						<div className="login-form">
							<p>
							Please {this.props.formType} or {this.navLink()}
							</p>
							{this.renderErrors()}
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input" placeholder="Email" />
							<br/>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" placeholder="Password" />
							<br/>
								<input type="text"
									value={this.state.first_name}
									onChange={this.update("first_name")}
									className="login-input" placeholder="First Name" />
							<br/>
								<input type="text"
									value={this.state.last_name}
									onChange={this.update("last_name")}
									className="login-input" placeholder="Last Name" />
							<br/>
								<input type="text"
									value={this.state.zip_code}
									onChange={this.update("zip_code")}
									className="login-input" placeholder="Zip Code"/>
							<br/>
							<input className="submit-button" type="submit" value="Register" />
						</div>
					</form>
				</div>
			);
		}
		else {
			return (
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">

					<h1 className="welcome-screen-text">	Get Help Fast  </h1>
						<div className="login-form">
						<p>
						Please {this.props.formType} or {this.navLink()}
						</p>

							{this.renderErrors()}
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input" placeholder="Email"/>
							<br/>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" placeholder="Password"/>
							<br/>
							<input type="submit" value="Sign In" />
						</div>
					</form>
				</div>
			);
		}
	}
}


export default withRouter(SessionForm);
