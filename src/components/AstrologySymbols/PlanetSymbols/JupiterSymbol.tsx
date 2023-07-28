import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function JupiterSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x - 5);
	const yPosition = Math.round(props.y - 2);

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`m${xPosition}, ${yPosition} c -0.43473,0 -1.30422,-0.40572 -1.30422,-2.02857 0,-1.62285 1.73897,-3.2457 3.47792,-3.2457 1.73897,0 3.47792,1.21715 3.47792,4.05713 0,2.83999 -2.1737,7.30283 -6.52108,7.30283 m 12.17269,0 -12.60745,0 m 9.99902,-11.76567 0,15.82279`}
		/>
	);
};