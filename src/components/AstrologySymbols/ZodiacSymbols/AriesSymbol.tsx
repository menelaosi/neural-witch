import AstrologySymbol from "../AstrologySymbol";

interface AriesProps {
	x: number;
	y: number;
	path: string;
};

class AriesSymbol extends AstrologySymbol {
	constructor(props: AriesProps) {
		super(props);
		const x = Math.round(props.x - 9);
		const y = Math.round(props.y - 2);
		
        this.state = {
            x: x,
            y: y,
            path: "m " + x + ", " + y + " -0.9,-0.9 0,-1.8 0.9,-1.8 1.8,-0.8999998 1.8,0 1.8,0.8999998 0.9,0.9 0.9,1.8 0.9,4.5 m -9,-5.4 1.8,-1.8 1.8,0 1.8,0.9 0.9,0.9 0.9,1.8 0.9,3.6 0,9.9 m 8.1,-12.6 0.9,-0.9 0,-1.8 -0.9,-1.8 -1.8,-0.8999998 -1.8,0 -1.8,0.8999998 -0.9,0.9 -0.9,1.8 -0.9,4.5 m 9,-5.4 -1.8,-1.8 -1.8,0 -1.8,0.9 -0.9,0.9 -0.9,1.8 -0.9,3.6 0,9.9",
        };
    }
};

export default AriesSymbol;