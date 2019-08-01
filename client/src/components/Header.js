import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import SignInButton from "./SignInButton";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			whichModal: "None",
			burgerActive: false
		};
	}

	componentDidMount() {
		this.incompleteProfileCheck();
	}

	renderModal() {
		if (this.state.whichModal !== "None") {
			return (
				<div className="modal is-active">
					<div
						className="modal-background"
						onClick={() => {
							this.setState({ whichModal: "None" });
						}}
					/>
					{this.chooseForm()}
					<button
						className="modal-close is-large"
						aria-label="close"
						onClick={() => {
							this.setState({ whichModal: "None" });
						}}
					/>
				</div>
			);
		}
	}

	chooseForm() {
		switch (this.state.whichModal) {
			case "EditInfo":
				return (
					<div className="modal-content">
						<ProfileForm
							exitModal={() => {
								this.setState({ whichModal: "None" });
							}}
						/>
					</div>
				);

			default:
		}
	}

	incompleteProfileCheck() {
		if (this.props.auth) {
			if (!this.props.auth.city) {
				return (
					<div className="modal is-active">
						<div
							className="modal-background"
							onClick={() => {
								this.setState({ whichModal: "None" });
							}}
						/>
						<div className="modal-content">
							<ProfileForm
								exitModal={() => {
									this.setState({ whichModal: "None" });
								}}
							/>
						</div>
					</div>
				);
			}
		}
	}

	renderEditButton() {
		switch (this.props.auth) {
			case null:
				return <div />;
			case false:
				return <div />;
			default:
				return (
					<button
						className="button is-link"
						onClick={() => {
							this.setState({ whichModal: "EditInfo" });
						}}
					>
						<span className="icon">
							<i className="fas fa-user-cog" />
						</span>{" "}
						<strong>Edit Profile</strong>
					</button>
				);
		}
	}

	renderHomeTab() {
		switch (this.props.auth) {
			case null:
				return <div />;
			case false:
				return <div />;
			default:
				return (
					<Link
						to={this.props.auth ? "/home" : "/"}
						className="is-size-5 has-text-weight-medium navbar-item"
					>
						<span className="icon is-medium has-text-danger">
							<i className="fas fa-university" />
						</span>
						<span> Home</span>
					</Link>
				);
		}
	}

	renderHighSchoolPageTab() {
		switch (this.props.auth) {
			case null:
				return <div />;
			case false:
				return <div />;
			default:
				return (
					<Link
						to={this.props.auth ? "/highschoolpage" : "/"}
						className="is-size-5 has-text-weight-medium navbar-item"
					>
						<span className="icon is-medium has-text-primary">
							<i className="fas fa-school" />
						</span>{" "}
						<span> {this.props.auth.highSchool}</span>
					</Link>
				);
		}
	}

	renderCityPageTab() {
		switch (this.props.auth) {
			case null:
				return <div />;
			case false:
				return <div />;
			default:
				return (
					<Link
						to={this.props.auth ? "/citypage" : "/"}
						className="is-size-5  has-text-weight-medium navbar-item"
					>
						<span className="icon is-medium has-text-info">
							<i className="fas fa-globe-asia" />
						</span>{" "}
						<span> {this.props.auth.city}</span>
					</Link>
				);
		}
	}

	render() {
		return (
			<nav
				className="navbar is-fixed-top is-marginless is-paddingless box"
				role="navigation"
				aria-label="main navigation"
			>
				{this.incompleteProfileCheck()}
				{this.renderModal()}
				<div className="container ">
					<div className="navbar-brand">
						<div className="navbar-item">
							<Link
								className="title is-3 has-text-link "
								to={this.props.auth ? "/" : "/"}
							>
								<span className="icon is-medium">
									<i className="fas fa-globe-americas" />
								</span>{" "}
								hana
							</Link>
						</div>

						<div
							role="button"
							className={
								"navbar-burger burger" +
								(this.state.burgerActive ? " is-active" : "")
							}
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
							onClick={() => {
								if (this.state.burgerActive) {
									this.setState({ burgerActive: false });
								} else {
									this.setState({ burgerActive: true });
								}
							}}
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</div>
					</div>

					<div
						id="navbarBasicExample"
						className={
							"navbar-menu" +
							(this.state.burgerActive ? "is-active" : "")
						}
					>
						<div className="navbar-start">
							{this.renderHomeTab()}
							{this.renderCityPageTab()}
							{this.renderHighSchoolPageTab()}
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								<Link
									to="/about"
									className="is-size-6 has-text-dark"
								>
									About
								</Link>
							</div>
							<div className="navbar-item">
								<div>{this.renderEditButton()}</div>
							</div>
							<div className="navbar-item">
								<SignInButton />
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
