import { POINTS_STROKE } from "@/lib/AstrologyUtils";
import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import AstrologySymbol from "../AstrologySymbol";

export default function ZodiacSymbol({
	point,
	path,
	hasSecondPath,
	secondPath,
	strokeColor = "#000000",
}: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			point={point}
			path={path}
			hasSecondPath={hasSecondPath}
			secondPath={secondPath}
			strokeColor={strokeColor}
			strokeWidth={POINTS_STROKE.toString()}
		/>
	);
};