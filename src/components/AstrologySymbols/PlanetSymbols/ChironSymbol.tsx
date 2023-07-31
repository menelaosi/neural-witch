import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import PlanetSymbol from "./PlanetSymbol";

export default function ChironSymbol({ point }: AstrologySymbolProps) {
	const x = Math.round(point.x + 3);
	const y = Math.round(point.y + 5);
	const headY = y - 13;

	return (
		<PlanetSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y}
				a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 
				z
			`}
			hasSecondPath
			secondPath={`
				m ${x},${headY} -3.942997,4.243844 4.110849,3.656151
				m -4.867569,-9.009468 0,11.727251
			`}
		/>
	);
};