import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import ZodiacSymbol from "./ZodiacSymbol";

export default function PiscesSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 8);
	const yPosition = Math.round(y - 8);

	return (
		<ZodiacSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition} 4,2 2,2 1,3 0,3 -1,3 -2,2 -4,2
				m 0,-17 3,1 2,1 2,2 1,3
				m 0,3 -1,3 -2,2 -2,1 -3,1
				m 16,-17 -3,1 -2,1 -2,2 -1,3
				m 0,3 1,3 2,2 2,1 3,1
				m 0,-17 -4,2 -2,2 -1,3 0,3 1,3 2,2 4,2
				m -17,-9 18,0
				m -18,1 18,0
			`}
		/>
	);
};