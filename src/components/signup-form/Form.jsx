import { CheckBoxInput } from "./CheckBoxInput";
import { RadioInput } from "./RadioInput";
import { TextInput } from "./TextInput";
import PropTypes from "prop-types";

export const Form = ({
	values,
	agree,
	onFormSubmit,
	onInputChange,
	onChecked,
	errors,
}) => {
	const { name, email, password, birthDate } = values;
	return (
		<form onSubmit={onFormSubmit}>
			<TextInput
				name="name"
				label="Name"
				placeholder="Hazzaz Abdul Mannan"
				value={name}
				error={errors.name}
				onInputChange={onInputChange}
			/>
			<TextInput
				type="email"
				name="email"
				label="Email"
				placeholder="hazzaz@gmail.com"
				value={email}
				error={errors.email}
				onInputChange={onInputChange}
			/>
			<TextInput
				type="password"
				name="password"
				label="Password"
				placeholder="******"
				value={password}
				error={errors.password}
				onInputChange={onInputChange}
			/>
			<TextInput
				type="date"
				name="birthDate"
				label="Birth Date"
				placeholder="******"
				value={birthDate}
				error={errors.birthDate}
				onInputChange={onInputChange}
			/>
			<RadioInput
				name="sex"
				value="male"
				label="Male"
				error={errors.sex}
				onInputChange={onInputChange}
			/>
			<RadioInput
				name="sex"
				value="female"
				label="Female"
				error={errors.sex}
				onInputChange={onInputChange}
			/>
			<CheckBoxInput
				name="agree"
				label="I agree with the terms & conditions"
				onChecked={onChecked}
				isChecked={agree}
			/>

			<button type="submit" className="btn btn-primary mt-3" disabled={!agree}>
				Submit
			</button>
		</form>
	);
};

Form.propTypes = {
	values: PropTypes.object,
	name: PropTypes.string,
	email: PropTypes.string,
	password: PropTypes.string,
	sex: PropTypes.string,
	birthDate: PropTypes.string,
	agree: PropTypes.bool,
	onFormSubmit: PropTypes.func,
	onInputChange: PropTypes.func,
	onChecked: PropTypes.func,
	errors: PropTypes.object.isRequired,
};
