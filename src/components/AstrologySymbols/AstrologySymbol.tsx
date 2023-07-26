import React from "react";

interface AstrologySymbolProps {
	x: number;
	y: number;
	path: string;
	isPlanet?: boolean;
	hasSecondPart?: boolean;
	secondPath?: string;
};

class AstrologySymbol extends React.Component<AstrologySymbolProps, {}> {
	constructor(props: AstrologySymbolProps) {
		super(props);
	}

	render() {
		const strokeWidth = this.props.isPlanet ? 1.5 : 1.8;
		return (
			<g>
				<path
					d={this.props.path}
					stroke={"#00000"}
					strokeWidth={strokeWidth}
					fill={"none"}
				/>
				{this.props.hasSecondPart && 
					<path 
						d={this.props.secondPath}
						stroke={"#00000"}
						strokeWidth={strokeWidth}
						fill={"none"}
					/>
				}
			</g>
		);
	}
};

export default AstrologySymbol;