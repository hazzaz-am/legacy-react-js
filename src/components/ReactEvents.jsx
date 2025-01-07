import { Component } from "react";

class ReactEvents extends Component {
	state = {
		name: "",
	};

	handleInputChange = (event) => {
		this.setState({ name: event.target.value });
	};

	render() {
		return (
			<div>
				<h2>Events</h2>
				<input
					type="text"
					placeholder="Your name"
					value={this.state.name}
					onChange={this.handleInputChange}
				/>
				{this.state.name && <h3>Mr, {this.state.name}</h3>}
			</div>
		);
	}
}

export default ReactEvents;
