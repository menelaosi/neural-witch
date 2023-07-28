import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AstrologySymbol from "../AstrologySymbol";

export default function ZodiacSymbol({
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
			hasSecondPath={hasSecondPath}
			secondPath={secondPath}
			strokeColor="#000000"
			strokeWidth="1.8"
		/>
	);
};