import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AstrologySymbol from "../AstrologySymbol";

export default function AxisSymbol(props: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			x={props.x}
			y={props.y}
			path={props.path}
			strokeColor="#333"
			strokeWidth="1.6"
		/>
	);
};