import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import ZodiacSymbol from "./ZodiacSymbol";

export default function CancerSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x + 9);
	const yPosition = Math.round(y - 9);

	return(
		<ZodiacSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition} -15,0 -2,1 -1,2 0,2 1,2 2,1 2,0 2,-1 1,-2 0,-2 -1,-2 11,0
				m -18,3 1,2 1,1 2,1
				m 4,-4 -1,-2 -1,-1 -2,-1
				m -4,15 15,0 2,-1 1,-2 0,-2 -1,-2 -2,-1 -2,0 -2,1 -1,2 0,2 1,2 -11,0
				m 18,-3 -1,-2 -1,-1 -2,-1
				m -4,4 1,2 1,1 2,1
			`}
		/>
	);
};