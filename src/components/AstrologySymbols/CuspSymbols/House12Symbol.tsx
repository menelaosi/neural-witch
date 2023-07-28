import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import CuspSymbol from "./CuspSymbol";

export default function House12Symbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 3);
	const yPosition = Math.round(y - 3);
	const x2Position = xPosition + 4;
	const y2Position = yPosition + 1;

	return (
		<CuspSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition} -2.28795747,7.7790553 0.91518297,0
				m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553
				m 3.20314038,-9.6094213 -2.7455489,9.6094213
				m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915
				m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915
			`}
			hasSecondPath
			secondPath={`
				m ${x2Position},${y2Position} 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818
				m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909
				m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269
				m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454
				m -5,0 2.27272732,0.9090909 2.27272728,0
				m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455
			`}
		/>
	);
};