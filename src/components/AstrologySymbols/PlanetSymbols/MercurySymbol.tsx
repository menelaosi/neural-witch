import PlanetSymbol from "./PlanetSymbol";

interface MercuryProps {
	x: number;
	y: number;
	path: string;
	hasSecondPath: boolean;
	secondPath: string;
}

class MercurySymbol extends PlanetSymbol {
	constructor(props: MercuryProps) {
		super (props); 
		const x = Math.round(props.x - 2); 
		const y = Math.round(props.y + 7);
		const crownX = x + 6;
		const crownY = y - 16;

		this.state = {
			x: x,
			y: y,
			path: "m" + x + ", " + y + " 4.26011,0 m -2.13005,-2.98207 0,5.11213 m 4.70312,-9.7983 a 4.70315,4.70315 0 0 1 -4.70315,4.70314 4.70315,4.70315 0 0 1 -4.70314,-4.70314 4.70315,4.70315 0 0 1 4.70314,-4.70315 4.70315,4.70315 0 0 1 4.70315,4.70315 z",
			hasSecondPath: true,
			secondPath: "m" + crownX + ", " + crownY + " a 3.9717855,3.9717855 0 0 1 -3.95541,3.59054 3.9717855,3.9717855 0 0 1 -3.95185,-3.59445",
		};
	}
}

export default MercurySymbol;