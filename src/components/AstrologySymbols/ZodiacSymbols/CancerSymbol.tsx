import AstrologySymbol from "../AstrologySymbol";

interface CancerProps {
	x: number;
	y: number;
	path: string;
};

class CancerSymbol extends AstrologySymbol {
	constructor(props: CancerProps) {
		super(props);
		const x = Math.round(props.x + 9);
		const y = Math.round(props.y - 9);
		
        this.state = {
            x: x,
            y: y,
            path: "m " + x + ", " + y + " -15,0 -2,1 -1,2 0,2 1,2 2,1 2,0 2,-1 1,-2 0,-2 -1,-2 11,0 m -18,3 1,2 1,1 2,1 m 4,-4 -1,-2 -1,-1 -2,-1 m -4,15 15,0 2,-1 1,-2 0,-2 -1,-2 -2,-1 -2,0 -2,1 -1,2 0,2 1,2 -11,0 m 18,-3 -1,-2 -1,-1 -2,-1 m -4,4 1,2 1,1 2,1",
        };
    }
};

export default CancerSymbol;