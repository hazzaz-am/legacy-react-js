import { Component } from "react";
import { Form } from "./Form";

const initialInputs = {
	name: "",
	email: "",
	password: "",
	birthDate: "",
	sex: "",
};

class SignupForm extends Component {
	state = {
		values: initialInputs,
		agree: false,
		errors: {},
	};

	handleInputChange = (event) => {
		this.setState({
			values: {
				...this.state.values,
				[event.target.name]: event.target.value,
			},
		});
	};

	handleAgreement = (event) => {
		this.setState({
			agree: event.target.checked,
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		const { errors, isValidate } = this.validateInputField();

		if (isValidate) {
			console.log(this.state.values);
			event.target.reset();
			this.setState({
				values: initialInputs,
				agree: false,
				errors: {},
			});
		} else {
			this.setState({
				errors,
			});
		}
	};

	validateInputField = () => {
		const errors = {};
		const {
			values: { name, email, password, sex, birthDate },
		} = this.state;

		if (!name) {
			errors.name = "Name Can not be empty";
		}

		if (!email) {
			errors.email = "Email Can not be empty";
		}

		if (!password) {
			errors.password = "Password Can not be empty";
		}

		if (!sex) {
			errors.sex = "Sex Can not be empty";
		}

		if (!birthDate) {
			errors.birthDate = "BirthDate Can not be empty";
		}

		return {
			errors,
			isValidate: Object.keys(errors).length === 0,
		};
	};

	render() {
		return (
			<div
				style={{
					width: "500px",
					margin: "2rem auto",
				}}
			>
				<h2 className="text-center">Signup Form</h2>
				<Form
					onInputChange={this.handleInputChange}
					onFormSubmit={this.handleFormSubmit}
					onChecked={this.handleAgreement}
					agree={this.state.agree}
					values={this.state.values}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

export default SignupForm;
