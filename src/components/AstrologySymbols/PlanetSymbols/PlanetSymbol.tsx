import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AstrologySymbol from "../AstrologySymbol";

export default function PlanetSymbol({
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
			strokeColor="#000000"
			strokeWidth="1.8"
			hasSecondPath={hasSecondPath}
			secondPath={secondPath}
		/>
	);
};