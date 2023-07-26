import React from "react";

interface AstrologySymbolProps {
	x: number;
	y: number;
	path: string;
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
					stroke={"#00000"}
					strokeWidth={1.8}
					fill={"none"}
				/>
				{this.props.hasSecondPart && 
					<path 
						d={this.props.secondPath}
						stroke={"#00000"}
						strokeWidth={1.8}
						fill={"none"}
					/>
				}
			</g>
		);
	}
};

export default AstrologySymbol;