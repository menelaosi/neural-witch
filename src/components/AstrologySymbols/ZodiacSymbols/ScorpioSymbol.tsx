import AstrologySymbol from "../AstrologySymbol";

interface ScorpioProps {
	x: number;
	y: number;
	path: string;
};

class ScorpioSymbol extends AstrologySymbol {
	constructor(props: ScorpioProps) {
		super(props);
		const x = Math.round(props.x - 9);
		const y = Math.round(props.y - 4);
		
        this.state = {
            x: x,
            y: y,
            path: "m " + x + ", " + y + " 2.3781101,-2.3781101 2.3781101,2.3781101 0,9.5124404 m -3.1708135,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.7927034,-9.5124404 2.3781101,-2.3781101 2.37811007,2.3781101 0,9.5124404 m -3.17081347,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.79270337,-9.5124404 2.37811013,-2.3781101 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854068 m -4.7562202,-11.8905505 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854067 2.3781101,-2.3781101",
        };
    }
};

export default ScorpioSymbol;