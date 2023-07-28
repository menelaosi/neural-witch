import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function UranusSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 5);
	const yPosition = Math.round(y - 7);
	const bodyX = xPosition + 7;
	const bodyY = yPosition + 14.5;

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition}  0,10.23824
				m 10.23633,-10.32764 0,10.23824
				m -10.26606,-4.6394 10.23085,0
				m -5.06415,-5.51532 0,11.94985
			`}
			hasSecondPath
			secondPath={`
				m ${bodyX},${bodyY}
				a 1.8384377,1.8384377 0 0 1 -1.83844,1.83843 1.8384377,1.8384377 0 0 1 -1.83842,-1.83843 1.8384377,1.8384377 0 0 1 1.83842,-1.83844 1.8384377,1.8384377 0 0 1 1.83844,1.83844
				z
			`}
		/>
	);
};