import PlanetSymbol from "./PlanetSymbol";

interface MarsProps {
	x: number;
	y: number;
	path: string;
};

class MarsSymbol extends PlanetSymbol {
	constructor(props: MarsProps) {
		super(props);
		const x = Math.round(props.x + 2);
		const y = Math.round(props.y - 2);
		
        this.state = {
            x: x,
            y: y,
            path: "m" + x + ", " + y + " c -5.247438,-4.150623 -11.6993,3.205518 -7.018807,7.886007 4.680494,4.680488 12.036628,-1.771382 7.885999,-7.018816 z m 0,0 0.433597,0.433595 3.996566,-4.217419 m -3.239802,-0.05521 3.295015,0 0.110427,3.681507",
        };
    }
};

export default MarsSymbol;