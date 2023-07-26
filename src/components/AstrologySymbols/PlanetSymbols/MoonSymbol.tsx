import PlanetSymbol from "./PlanetSymbol";

interface MoonProps {
	x: number;
	y: number;
	path: string;
};

class MoonSymbol extends PlanetSymbol {
	constructor(props: MoonProps) {
		super(props);
		const x = Math.round(props.x - 2);
		const y = Math.round(props.y - 7);
		
        this.state = {
            x: x,
            y: y,
            path: "m" + x + ", " + y + " a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z",
        };
    }
};

export default MoonSymbol;