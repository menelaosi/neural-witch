import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AstrologySymbol from "../AstrologySymbol";

export default function ZodiacSymbol(props: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			x={props.x}
			y={props.y}
			path={props.path}
			hasSecondPath={props.hasSecondPath}
			secondPath={props.secondPath}
			strokeColor="#000000"
			strokeWidth="1.8"
		/>
	);
};