import AstrologySymbol from "./AstrologySymbol";

interface NeptuneProps {
	x: number;
	y: number;
	path: string;
};

class NeptuneSymbol extends AstrologySymbol {
	constructor(props: NeptuneProps) {
		super(props);
		const x = Math.round(props.x + 3);
		const y = Math.round(props.y - 5);
		
        this.state = {
            x: x,
            y: y,
            path: "m" + x + ", " + y + " 1.77059,-2.36312 2.31872,1.8045 m -14.44264,-0.20006 2.34113,-1.77418 1.74085,2.38595 m -1.80013,-1.77265 c -1.23776,8.40975 0.82518,9.67121 4.95106,9.67121 4.12589,0 6.18883,-1.26146 4.95107,-9.67121 m -7.05334,3.17005 2.03997,-2.12559 2.08565,2.07903 m -5.32406,9.91162 6.60142,0 m -3.30071,-12.19414 0,15.55803",
        };
    }
};

export default NeptuneSymbol;