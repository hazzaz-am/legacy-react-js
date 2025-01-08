import PropTypes from "prop-types";

export const TextInput = ({
	type,
	name,
	label,
	error,
	placeholder,
	value,
	onInputChange,
}) => {
	return (
		<div className="form-group mt-3">
			<label htmlFor={name}>{label}</label>
			<input
				className={error ? "form-control is-invalid" : "form-control"}
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				value={value}
				onChange={onInputChange}
				autoComplete="off"
			/>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

TextInput.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onInputChange: PropTypes.func,
	error: PropTypes.string,
};
