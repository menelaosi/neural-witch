import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import ZodiacSymbol from "./ZodiacSymbol";

export default function LeoSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x - 3);
	const yPosition = Math.round(props.y + 4);

	return (
		<ZodiacSymbol
			x={xPosition}
			y={yPosition}
			path={`m ${xPosition}, ${yPosition} -2,-1 -1,0 -2,1 -1,2 0,1 1,2 2,1 1,0 2,-1 1,-2 0,-1 -1,-2 -5,-5 -1,-2 0,-3 1,-2 2,-1 3,-1 4,0 4,1 2,2 1,2 0,3 -1,3 -3,3 -1,2 0,2 1,2 2,0 1,-1 1,-2 m -13,-5 -2,-3 -1,-2 0,-3 1,-2 1,-1 m 7,-1 3,1 2,2 1,2 0,3 -1,3 -2,3`}
		/>
	);
};