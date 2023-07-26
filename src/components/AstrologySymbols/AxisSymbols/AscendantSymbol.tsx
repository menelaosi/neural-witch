import AxisSymbol from "./AxisSymbol";

interface AscendantProps {
	x: number;
	y: number;
	path: string;
};

class AscendantSymbol extends AxisSymbol {
	constructor(props: AscendantProps) {
		super(props);
		const x = Math.round(props.x + 12);
		const y = Math.round(props.y - 2);
		
        this.state = {
            x: x,
            y: y,
            path: "m " + x + ", " + y + " -0.563078,-1.1261527 -1.689228,-0.5630765 -1.689229,0 -1.68923,0.5630765 -0.563076,1.1261527 0.563076,1.12615272 1.126154,0.56307636 2.815381,0.56307635 1.126152,0.56307647 0.563078,1.1261526 0,0.5630763 -0.563078,1.1261528 -1.689228,0.5630764 -1.689229,0 -1.68923,-0.5630764 -0.563076,-1.1261528 m -6.756916,-10.135374 -4.504611,11.8246032 m 4.504611,-11.8246032 4.504611,11.8246032 m -7.3199925,-3.94153457 5.6307625,0",
        };
	}
};

export default AscendantSymbol;