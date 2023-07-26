import AstrologySymbol from "./AstrologySymbol";

interface JupiterProps {
	x: number;
	y: number;
	path: string;
};

class JupiterSymbol extends AstrologySymbol {
	constructor(props: JupiterProps) {
		super(props);
		const x = Math.round(props.x - 5);
		const y = Math.round(props.y - 2);
		
        this.state = {
            x: x,
            y: y,
            path: "m" + x + ", " + y + " c -0.43473,0 -1.30422,-0.40572 -1.30422,-2.02857 0,-1.62285 1.73897,-3.2457 3.47792,-3.2457 1.73897,0 3.47792,1.21715 3.47792,4.05713 0,2.83999 -2.1737,7.30283 -6.52108,7.30283 m 12.17269,0 -12.60745,0 m 9.99902,-11.76567 0,15.82279",
        };
    }
};

export default JupiterSymbol;