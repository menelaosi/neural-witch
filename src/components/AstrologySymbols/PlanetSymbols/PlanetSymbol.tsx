import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AstrologySymbol from "../AstrologySymbol";

export default function PlanetSymbol(props: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			x={props.x}
			y={props.y}
			path={props.path}
			strokeColor="#000000"
			strokeWidth="1.8"
			hasSecondPath={props.hasSecondPath}
			secondPath={props.secondPath}
		/>
	);
};