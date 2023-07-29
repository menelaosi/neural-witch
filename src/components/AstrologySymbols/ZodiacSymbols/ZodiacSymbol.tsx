import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import AstrologySymbol from "../AstrologySymbol";

export default function ZodiacSymbol({
	x,
	y,
	path,
	hasSecondPath,
	secondPath,
	strokeColor = "#000000",
}: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			x={x}
			y={y}
			path={path}
			hasSecondPath={hasSecondPath}
			secondPath={secondPath}
			strokeColor={strokeColor}
			strokeWidth="1.8"
		/>
	);
};