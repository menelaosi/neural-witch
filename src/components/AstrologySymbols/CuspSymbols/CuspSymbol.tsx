import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AstrologySymbol from "../AstrologySymbol";

export default function CuspSymbol({
	x,
	y,
	path,
	hasSecondPath,
	secondPath,
}: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			x={x}
			y={y}
			path={path}
			strokeColor="#000"
			strokeWidth="1"
			hasSecondPath={hasSecondPath}
			secondPath={secondPath}
		/>
	);
};