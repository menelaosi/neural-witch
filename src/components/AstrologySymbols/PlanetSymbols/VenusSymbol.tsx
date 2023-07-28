import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function VenusSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x + 2);
	const yPosition = Math.round(props.y + 7);

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`m${xPosition}, ${yPosition} -4.937669,0.03973 m 2.448972,2.364607 0,-5.79014 c -3.109546,-0.0085 -5.624617,-2.534212 -5.620187,-5.64208 0.0044,-3.107706 2.526514,-5.621689 5.635582,-5.621689 3.109068,0 5.631152,2.513983 5.635582,5.621689 0.0044,3.107868 -2.510641,5.633586 -5.620187,5.64208`}
		/>
	);
};