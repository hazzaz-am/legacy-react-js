import { Component } from "react";

class Input extends Component {
	state = {
		name: "",
		country: "",
		bio: "",
		birthday: "",
		sex: "",
		agree: false,
		skills: [],
	};

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleCheckboxChange = (event) => {
		this.setState({
			agree: event.target.checked,
		});
	};

	handleSkillsChange = (event) => {
		if (event.target.checked) {
			this.setState({
				skills: [...this.state.skills, event.target.value],
			});
		} else {
			const newSkills = this.state.skills.filter(
				(skill) => skill !== event.target.value
			);
			this.setState({
				skills: newSkills,
			});
		}
	};

	render() {
		return (
			<div
				style={{
					width: "500px",
					margin: "auto",
				}}
			>
				<h2>Form Input</h2>
				<form
					onSubmit={() => {
						event.preventDefault();
						console.log(this.state);
					}}
				>
					<input
						type="text"
						placeholder="Your name"
						name="name"
						className="form-control my-2"
						onChange={this.handleInputChange}
					/>
					<select
						name="country"
						className="form-control my-2"
						onChange={this.handleInputChange}
					>
						<option>Select Country</option>
						<option value="Bangladesh">Bangladesh</option>
						<option value="Pakistan">Pakistan</option>
						<option value="China">China</option>
						<option value="Nepal">Nepal</option>
					</select>
					<textarea
						name="bio"
						className="form-control my-2"
						placeholder="Tell me About Yourself"
						onChange={this.handleInputChange}
					></textarea>
					<input
						type="date"
						name="birthday"
						className="form-control my-2"
						onChange={this.handleInputChange}
					/>
					<div className="d-flex gap-3">
						<input
							className="my-2"
							type="radio"
							name="sex"
							value="Male"
							onChange={this.handleInputChange}
						/>{" "}
						Male
						<input
							className="my-2"
							type="radio"
							name="sex"
							value="Female"
							onChange={this.handleInputChange}
						/>{" "}
						Female
					</div>
					<div className="d-flex gap-3">
						<div>
							<input
								type="checkbox"
								name="Java"
								value="Java"
								checked={this.state.skills.includes("Java")}
								onChange={this.handleSkillsChange}
							/>
							Java
						</div>
						<div>
							<input
								type="checkbox"
								name="Javascript"
								value="Javascript"
								checked={this.state.skills.includes("Javascript")}
								onChange={this.handleSkillsChange}
							/>
							Javascript
						</div>
						<div>
							<input
								type="checkbox"
								name="Python"
								value="Python"
								checked={this.state.skills.includes("Python")}
								onChange={this.handleSkillsChange}
							/>
							Python
						</div>
						<div>
							<input
								type="checkbox"
								name="Golang"
								value="Golang"
								checked={this.state.skills.includes("Golang")}
								onChange={this.handleSkillsChange}
							/>
							Golang
						</div>
					</div>
					<div className="d-flex gap-3 mt-2">
						<input
							type="checkbox"
							name="agree"
							checked={this.state.agree}
							onChange={this.handleCheckboxChange}
						/>{" "}
						I agree with the terms and conditions
					</div>
					<input
						type="submit"
						value="Submit"
						className="btn btn-primary mt-2"
					/>
				</form>
			</div>
		);
	}
}

export default Input;
