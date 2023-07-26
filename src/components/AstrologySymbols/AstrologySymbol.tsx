import React from "react";

interface AstrologySymbolProps {
	x: number;
	y: number;
	path: string;
	strokeColor?: string;
	strokeWidth?: number;
	hasSecondPart?: boolean;
	secondPath?: string;
};

class AstrologySymbol extends React.Component<AstrologySymbolProps, {}> {
	constructor(props: AstrologySymbolProps) {
		super(props);
	}

	render() {
		return (
			<g>
				<path
					d={this.props.path}
					stroke={this.props.strokeColor}
					strokeWidth={this.props.strokeWidth}
					fill={"none"}
				/>
				{this.props.hasSecondPart && 
					<path 
						d={this.props.secondPath}
						stroke={this.props.strokeColor}
						strokeWidth={this.props.strokeWidth}
						fill={"none"}
					/>
				}
			</g>
		);
	}
};

export default AstrologySymbol;