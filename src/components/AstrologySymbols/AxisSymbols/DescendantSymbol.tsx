import AxisSymbol from "./AxisSymbol";

interface DescendantProps {
	x: number;
	y: number;
	path: string;
};

class DescendantSymbol extends AxisSymbol {
	constructor(props: DescendantProps) {
		super(props);
		const x = Math.round(props.x + 22);
		const y = Math.round(props.y - 1);
		
        this.state = {
            x: x,
            y: y,
			path: "m " + x + ", " + y + " -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0",            
        };
	}
};

export default DescendantSymbol;