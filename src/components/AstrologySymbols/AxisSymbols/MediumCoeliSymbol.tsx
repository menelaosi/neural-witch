import AxisSymbol from "./AxisSymbol";

interface MediumCoeliProps {
	x: number;
	y: number;
	path: string;
};

class MediumCoeliSymbol extends AxisSymbol {
	constructor(props: MediumCoeliProps) {
		super(props);
		const x = Math.round(props.x + 19);
		const y = Math.round(props.y - 4);
		
        this.state = {
            x: x,
            y: y,
			path: "m " + x + ", " + y + " -1.004085,-1.0040845 -1.004084,-0.5020423 -1.506127,0 -1.004085,0.5020423 -1.004084,1.0040845 -0.502043,1.50612689 0,1.00408458 0.502043,1.50612683 1.004084,1.0040846 1.004085,0.5020423 1.506127,0 1.004084,-0.5020423 1.004085,-1.0040846 m -17.57148,-9.0367612 0,10.5428881 m 0,-10.5428881 4.016338,10.5428881 m 4.016338,-10.5428881 -4.016338,10.5428881 m 4.016338,-10.5428881 0,10.5428881",
        };
	}
};

export default MediumCoeliSymbol;