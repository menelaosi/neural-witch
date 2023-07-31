import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import AstrologySymbol from "../AstrologySymbol";

export default function CuspSymbol({
	point,
	path,
	hasSecondPath,
	secondPath,
}: AstrologySymbolProps) {
	return (
		<AstrologySymbol
			point={point}
			path={path}
			strokeColor="#000"
			strokeWidth="1"
			hasSecondPath={hasSecondPath}
			secondPath={secondPath}
		/>
	);
};