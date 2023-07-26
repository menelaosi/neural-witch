import ZodiacSymbol from "./ZodiacSymbol";

interface PiscesProps {
	x: number;
	y: number;
	path: string;
};

class PiscesSymbol extends ZodiacSymbol {
	constructor(props: PiscesProps) {
		super(props);
		const x = Math.round(props.x - 8);
		const y = Math.round(props.y - 8);
		
        this.state = {
            x: x,
            y: y,
            path: "m " + x + ", " + y + " 4,2 2,2 1,3 0,3 -1,3 -2,2 -4,2 m 0,-17 3,1 2,1 2,2 1,3 m 0,3 -1,3 -2,2 -2,1 -3,1 m 16,-17 -3,1 -2,1 -2,2 -1,3 m 0,3 1,3 2,2 2,1 3,1 m 0,-17 -4,2 -2,2 -1,3 0,3 1,3 2,2 4,2 m -17,-9 18,0 m -18,1 18,0",
        };
    }
};

export default PiscesSymbol;