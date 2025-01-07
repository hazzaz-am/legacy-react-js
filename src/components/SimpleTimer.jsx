import { Component } from "react";
import Button from "./Button";

const containerStyle = {
	width: "250px",
	display: "flex",
	justifyContent: "space-between",
	margin: "auto",
};

class SimpleTimer extends Component {
	state = {
		count: 0,
	};

	intervalId = null;

	incrementCounter = () => {
		this.setState((prev) => {
			return {
				count: prev.count + 1,
			};
		});
	};

	decrementCounter = () => {
		if (this.state.count > 0) {
			this.setState((prev) => {
				return {
					count: prev.count - 1,
				};
			});
		}
	};

	startCounter = () => {
		if (this.state.count > 0 && !this.intervalId) {
			this.intervalId = setInterval(() => {
				this.setState(
					(prev) => {
						return {
							count: prev.count - 1,
						};
					},
					() => {
						if (this.state.count === 0) {
							alert("0 Reached");
							clearInterval(this.intervalId);
							this.intervalId = null;
						}
					}
				);
			}, 1000);
		}
	};

	stopCounter = () => {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	};

	resetCounter = () => {
		this.setState({ count: 0 });
		clearInterval(this.intervalId);
		this.intervalId = null;
	};

	render() {
		return (
			<div>
				<h2 className="text-center mb-3">Simple Timer</h2>

				<div style={containerStyle}>
					<Button func={this.incrementCounter}>+</Button>
					<h2 className="text-center">{this.state.count}</h2>
					<Button func={this.decrementCounter}>-</Button>
				</div>
				<div style={containerStyle}>
					<Button func={this.startCounter}>Start</Button>
					<Button func={this.stopCounter}>Stop</Button>
					<Button func={this.resetCounter}>Reset</Button>
				</div>
			</div>
		);
	}
}

export default SimpleTimer;
