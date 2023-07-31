import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import AstrologySymbol from "../AstrologySymbol";

export default function AxisSymbol({
	point,
	path,
}: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			point={point}
			path={path}
			strokeColor="#333"
			strokeWidth="1.6"
		/>
	);
};