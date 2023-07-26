import React from "react";

interface AstrologyCircleProps {
	x: number;
	y: number;
	radius: number;
}

class AstrologyCircle extends React.Component<AstrologyCircleProps, {}> {
	constructor(props: AstrologyCircleProps) {
		super(props);
	}

	render() {
		return (
			<circle
				cx={this.props.x}
				cy={this.props.y}
				r={this.props.radius}
				fill="none"
			/>
		);
	}
};

export default AstrologyCircle;