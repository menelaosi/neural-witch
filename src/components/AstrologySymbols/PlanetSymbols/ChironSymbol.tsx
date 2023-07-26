import AstrologySymbol from "../AstrologySymbol";

interface ChironProps {
	x: number;
	y: number;
	path: string;
	isPlanet: boolean;
	hasSecondPath: boolean;
	secondPath: string;
};

class ChironSymbol extends AstrologySymbol {
	constructor(props: ChironProps) {
		super (props); 
		const x = Math.round(props.x + 3); 
		const y = Math.round(props.y + 5);
		const headY = y - 13;

		this.state = {
			x: x,
			y: y,
			path: "m" + x + ", " + y + " a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 z",
			isPlanet: true,
			hasSecondPath: true,
			secondPath: "m" + x + ", " + headY + "   -3.942997,4.243844 4.110849,3.656151 m -4.867569,-9.009468 0,11.727251",
		};
	}
};

export default ChironSymbol;