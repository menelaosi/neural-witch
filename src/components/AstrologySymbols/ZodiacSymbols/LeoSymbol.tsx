import ZodiacSymbol from "./ZodiacSymbol";

interface LeoProps {
	x: number;
	y: number;
	path: string;
};

class LeoSymbol extends ZodiacSymbol {
	constructor(props: LeoProps) {
		super(props);
		const x = Math.round(props.x - 3);
		const y = Math.round(props.y + 4);
		
        this.state = {
            x: x,
            y: y,
            path: "m " + x + ", " + y + " -2,-1 -1,0 -2,1 -1,2 0,1 1,2 2,1 1,0 2,-1 1,-2 0,-1 -1,-2 -5,-5 -1,-2 0,-3 1,-2 2,-1 3,-1 4,0 4,1 2,2 1,2 0,3 -1,3 -3,3 -1,2 0,2 1,2 2,0 1,-1 1,-2 m -13,-5 -2,-3 -1,-2 0,-3 1,-2 1,-1 m 7,-1 3,1 2,2 1,2 0,3 -1,3 -2,3",
        };
    }
};

export default LeoSymbol;