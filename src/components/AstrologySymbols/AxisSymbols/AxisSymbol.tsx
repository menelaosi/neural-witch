import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import AstrologySymbol from "../AstrologySymbol";

export default function AxisSymbol({
	x,
	y,
	path,
}: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			x={x}
			y={y}
			path={path}
			strokeColor="#333"
			strokeWidth="1.6"
		/>
	);
};