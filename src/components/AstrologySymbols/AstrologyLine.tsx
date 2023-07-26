import React from "react";

interface AstrologyLineProps {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	color: string;
};

class AstrologyLine extends React.Component<AstrologyLineProps, {}> {
	constructor(props: AstrologyLineProps) {
		super(props);
	}

	render() {
		return (
			<line
				x1={this.props.x1}
				y1={this.props.y1}
				x2={this.props.x2}
				y2={this.props.y2}
				color={this.props.color}
			/>
		);
	}
};

export default AstrologyLine;