import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import CuspSymbol from "./CuspSymbol";

export default function House11Symbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 3);
	const yPosition = Math.round(y - 3);
	const x2Position = xPosition + 6;

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
				m ${x2Position},${yPosition} -2.28795747,7.7790553 0.91518297,0
				m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553
				m 3.20314038,-9.6094213 -2.7455489,9.6094213
				m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915
				m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915
			`}
		/>
	);
};