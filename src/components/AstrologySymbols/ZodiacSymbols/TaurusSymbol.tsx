import AstrologySymbol from "../AstrologySymbol";

interface TaurusProps {
	x: number;
	y: number;
	path: string;
};

class TaurusSymbol extends AstrologySymbol {
	constructor(props: TaurusProps) {
		super(props);
		const x = Math.round(props.x - 9);
		const y = Math.round(props.y - 11);
		
        this.state = {
            x: x,
            y: y,
            path: "m " + x + ", " + y + " 1,4 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-4 m -18,0 1,3 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-3 m -11,8 -2,1 -1,1 -1,2 0,3 1,2 2,2 2,1 2,0 2,-1 2,-2 1,-2 0,-3 -1,-2 -1,-1 -2,-1 m -4,1 -2,1 -1,2 0,3 1,3 m 8,0 1,-3 0,-3 -1,-2 -2,-1",
        };
    }
};

export default TaurusSymbol;