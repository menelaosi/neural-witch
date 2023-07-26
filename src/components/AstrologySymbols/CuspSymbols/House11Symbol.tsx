import CuspSymbol from "./CuspSymbol";

interface House11Props {
	x: number;
	y: number;
	path: string;
	hasSecondPart: boolean;
	secondPath: string;
};

class House11Symbol extends CuspSymbol {
	constructor(props: House11Props) {
		super(props);
		const x = Math.round(props.x - 3);
		const y = Math.round(props.y - 3);
		
        this.state = {
			x: x,
			y: y,
			path: "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915",
			hasSecondPart: true,
			secondPath: "m" + (x + 6) + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915",
        };
	}
};

export default House11Symbol;