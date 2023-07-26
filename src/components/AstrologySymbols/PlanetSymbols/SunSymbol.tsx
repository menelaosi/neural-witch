import AstrologySymbol from "../AstrologySymbol";

interface SunProps {
	x: number;
	y: number;
	path: string;
	isPlanet: boolean;
};

class SunSymbol extends AstrologySymbol {
	constructor(props: SunProps) {
		super(props);
		const x = Math.round(props.x - 1);
		const y = Math.round(props.y - 8);
		
        this.state = {
            x: x,
            y: y,
            path: "m" + x + ", " + y +  " -2.18182,0.727268 -2.181819,1.454543 -1.454552,2.18182 -0.727268,2.181819 0,2.181819 0.727268,2.181819 1.454552,2.18182 2.181819,1.454544 2.18182,0.727276 2.18181,0 2.18182,-0.727276 2.181819,-1.454544 1.454552,-2.18182 0.727268,-2.181819 0,-2.181819 -0.727268,-2.181819 -1.454552,-2.18182 -2.181819,-1.454543 -2.18182,-0.727268 -2.18181,0 m 0.727267,6.54545 -0.727267,0.727276 0,0.727275 0.727267,0.727268 0.727276,0 0.727267,-0.727268 0,-0.727275 -0.727267,-0.727276 -0.727276,0 m 0,0.727276 0,0.727275 0.727276,0 0,-0.727275 -0.727276,0",
			isPlanet: true,
        };
    }
};

export default SunSymbol;