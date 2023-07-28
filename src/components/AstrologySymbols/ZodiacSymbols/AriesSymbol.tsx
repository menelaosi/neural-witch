import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import ZodiacSymbol from "./ZodiacSymbol";

export default function AriesSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x - 9);
	const yPosition = Math.round(props.y - 2);

	return (
		<ZodiacSymbol
			x={xPosition}
			y={yPosition}
			path={`m ${xPosition}, ${yPosition} -0.9,-0.9 0,-1.8 0.9,-1.8 1.8,-0.8999998 1.8,0 1.8,0.8999998 0.9,0.9 0.9,1.8 0.9,4.5 m -9,-5.4 1.8,-1.8 1.8,0 1.8,0.9 0.9,0.9 0.9,1.8 0.9,3.6 0,9.9 m 8.1,-12.6 0.9,-0.9 0,-1.8 -0.9,-1.8 -1.8,-0.8999998 -1.8,0 -1.8,0.8999998 -0.9,0.9 -0.9,1.8 -0.9,4.5 m 9,-5.4 -1.8,-1.8 -1.8,0 -1.8,0.9 -0.9,0.9 -0.9,1.8 -0.9,3.6 0,9.9`}
		/>
	);
};