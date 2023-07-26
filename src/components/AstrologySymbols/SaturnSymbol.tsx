import AstrologySymbol from "./AstrologySymbol";

interface SaturnProps {
	x: number;
	y: number;
	path: string;
};

class SaturnSymbol extends AstrologySymbol {
	constructor(props: SaturnProps) {
		super(props);
		const x = Math.round(props.x + 5);
		const y = Math.round(props.y + 10);
		
        this.state = {
            x: x,
            y: y,
            path: "m" + x + ", " + y + " c -0.52222,0.52221 -1.04445,1.04444 -1.56666,1.04444 -0.52222,0 -1.56667,-0.52223 -1.56667,-1.56667 0,-1.04443 0.52223,-2.08887 1.56667,-3.13332 1.04444,-1.04443 2.08888,-3.13331 2.08888,-5.22219 0,-2.08888 -1.04444,-4.17776 -3.13332,-4.17776 -1.97566,0 -3.65555,1.04444 -4.69998,3.13333 m -2.55515,-5.87499 6.26664,0 m -3.71149,-2.48054 0,15.14438",
        };
    }
};

export default SaturnSymbol;