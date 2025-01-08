import PropTypes from "prop-types";

export default function TextInput(props) {
	return (
		<div className="form-group">
			<label htmlFor={props.name}>{props.label}</label>
			<input
				type={props.type}
				name={props.name}
				id={props.name}
				placeholder={props.placeholder}
				className="form-control mt-2"
				value={props.value}
				onChange={props.handleInputChange}
				autoComplete="off"
			/>
		</div>
	);
}

TextInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
};
