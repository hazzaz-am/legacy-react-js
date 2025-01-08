import { Component } from "react";
import { Form } from "./Form";

class ControlledForm extends Component {
	state = {
		name: "",
		email: "",
		password: "",
	};

	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmitForm = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.setState({
			name: "",
			email: "",
			password: "",
		});
	};

	render() {
		return (
			<div style={{ width: "500px", margin: "auto" }}>
				<h2 className="mt-3">Controlled Form</h2>
				<Form
					values={this.state}
					handleInputChange={this.handleInputChange}
					handleSubmitForm={this.handleSubmitForm}
				/>
			</div>
		);
	}
}

export default ControlledForm;
