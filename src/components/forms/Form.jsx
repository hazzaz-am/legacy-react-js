import TextInput from "./TextInput";
import PropTypes from "prop-types";

export const Form = (props) => {
	return (
		<form onSubmit={props.handleSubmitForm}>
			<TextInput
				type="text"
				name="name"
				label="Name"
				placeholder="Hazzaz Abdul Mannan"
				value={props.values.name}
				handleInputChange={props.handleInputChange}
			/>
			<TextInput
				type="email"
				name="email"
				label="Email"
				placeholder="7CQ3I@example.com"
				value={props.values.email}
				handleInputChange={props.handleInputChange}
			/>
			<TextInput
				type="password"
				name="password"
				label="Password"
				placeholder="******"
				value={props.values.password}
				handleInputChange={props.handleInputChange}
			/>
			<input type="submit" value="Submit" className="btn btn-primary mt-2" />
		</form>
	);
};

Form.propTypes = {
	handleSubmitForm: PropTypes.func.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	values: PropTypes.object.isRequired,
};
