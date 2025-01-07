/* eslint-disable react/prop-types */
import { Component } from "react";

class Button extends Component {
  render () {
    return (
			<button
				className="btn btn-primary ms-2 mt-2"
				onClick={this.props.func}
			>
        {this.props.children}
      </button>
		);
  }
}

export default Button