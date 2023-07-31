import { BLACK, POINTS_STROKE } from "@/lib/AstrologyUtils";
import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import AstrologySymbol from "../AstrologySymbol";

export default function PlanetSymbol({
	point,
	path,
	hasSecondPath,
	secondPath,
}: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			point={point}
			path={path}
			strokeColor={BLACK}
			strokeWidth={POINTS_STROKE.toString()}
			hasSecondPath={hasSecondPath}
			secondPath={secondPath}
		/>
	);
};