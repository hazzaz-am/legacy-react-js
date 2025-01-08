import PropTypes from "prop-types";

export const CheckBoxInput = ({ name, label, onChecked, isChecked }) => {
	return (
		<div className="form-check mt-3">
			<input
				className="form-check-input"
				type="checkbox"
				id={name}
				checked={isChecked}
				name={name}
				onChange={onChecked}
			/>
			<label className="form-check-label" htmlFor={name}>
				{label}
			</label>
		</div>
	);
};

CheckBoxInput.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	isChecked: PropTypes.bool,
	onChecked: PropTypes.func,
};
