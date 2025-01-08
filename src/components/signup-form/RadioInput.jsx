import PropTypes from "prop-types";

export const RadioInput = ({ name, value, label, onInputChange, error }) => {
	return (
		<div className="form-check mt-3">
			<label
				className={error ? "form-check-label is-invalid" : "form-check-label"}
				htmlFor={value}
			>
				<input
					className={error ? "form-check-input is-invalid" : "form-check-input"}
					type="radio"
					value={value}
					name={name}
					id={value}
					onChange={onInputChange}
				/>{" "}
				{label}
			</label>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

RadioInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onInputChange: PropTypes.func.isRequired,
	error: PropTypes.string,
};
