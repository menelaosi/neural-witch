import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import ZodiacSymbol from "./ZodiacSymbol";

export default function TaurusSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x - 9);
	const yPosition = Math.round(props.y - 11);

	return (
		<ZodiacSymbol
			x={xPosition}
			y={yPosition}
			path={`m ${xPosition}, ${yPosition} 1,4 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-4 m -18,0 1,3 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-3 m -11,8 -2,1 -1,1 -1,2 0,3 1,2 2,2 2,1 2,0 2,-1 2,-2 1,-2 0,-3 -1,-2 -1,-1 -2,-1 m -4,1 -2,1 -1,2 0,3 1,3 m 8,0 1,-3 0,-3 -1,-2 -2,-1`}
		/>
	);
};