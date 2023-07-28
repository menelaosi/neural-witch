import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AxisSymbol from "./AxisSymbol";

export default function DescendantSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x + 22);
	const yPosition = Math.round(props.y - 1);
	return (
		<AxisSymbol
			x={xPosition}
			y={yPosition}
			path={`m ${xPosition}, ${yPosition} -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0`}
		/>
	);
};