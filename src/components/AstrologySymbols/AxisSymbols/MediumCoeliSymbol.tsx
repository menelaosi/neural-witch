import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AxisSymbol from "./AxisSymbol";

export default function MediumCoeliSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x + 19);
	const yPosition = Math.round(props.y - 4);
	return (
		<AxisSymbol
			x={xPosition}
			y={yPosition}
			path={"m ${xPosition}, ${yPosition} -1.004085,-1.0040845 -1.004084,-0.5020423 -1.506127,0 -1.004085,0.5020423 -1.004084,1.0040845 -0.502043,1.50612689 0,1.00408458 0.502043,1.50612683 1.004084,1.0040846 1.004085,0.5020423 1.506127,0 1.004084,-0.5020423 1.004085,-1.0040846 m -17.57148,-9.0367612 0,10.5428881 m 0,-10.5428881 4.016338,10.5428881 m 4.016338,-10.5428881 -4.016338,10.5428881 m 4.016338,-10.5428881 0,10.5428881"}
		/>
	);
};