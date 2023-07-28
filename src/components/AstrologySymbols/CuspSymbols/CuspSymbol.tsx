import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AstrologySymbol from "../AstrologySymbol";

export default function CuspSymbol(props: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			x={props.x}
			y={props.y}
			path={props.path}
			strokeColor="#000"
			strokeWidth="1"
			hasSecondPath={props.hasSecondPath}
			secondPath={props.secondPath}
		/>
	);
};