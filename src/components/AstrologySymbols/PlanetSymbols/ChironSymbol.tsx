import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function ChironSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x + 3);
	const yPosition = Math.round(props.y + 5);
	const headY = yPosition - 13;

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`m${xPosition}, ${yPosition} a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 z`}
			hasSecondPath
			secondPath={`m${xPosition}, ${headY}   -3.942997,4.243844 4.110849,3.656151 m -4.867569,-9.009468 0,11.727251`}
		/>
	);
};