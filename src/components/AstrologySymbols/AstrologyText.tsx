import React from "react";

interface AstrologyTextProps {
	text: string;
	x: number;
	y: number;
	size: string;
	color: string;
}

class AstrologyText extends React.Component<AstrologyTextProps, {}> {
	constructor(props: AstrologyTextProps) {
		super(props);
	}

	render() {
		return (
			<text
				x={this.props.x}
				y={this.props.y}
				fontSize={this.props.size}
				fill={this.props.color}
				fontFamily="serif"
				dominantBaseline="central"
			>
				{this.props.text}
			</text>
		);
	}
};

export default AstrologyText;