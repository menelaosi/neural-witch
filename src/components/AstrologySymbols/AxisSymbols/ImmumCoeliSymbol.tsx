import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import AxisSymbol from "./AxisSymbol";

export default function ImmumCoeliSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x + 19);
	const yPosition = Math.round(props.y + 2);
	return (
		<AxisSymbol
			x={xPosition}
			y={yPosition}
			path={`m ${xPosition}, ${yPosition} -1.208852,-1.2088514 -1.208851,-0.6044258 -1.813278,0 -1.208852,0.6044258 -1.20885,1.2088514 -0.604426,1.81327715 0,1.20885135 0.604426,1.8132772 1.20885,1.2088513 1.208852,0.6044259 1.813278,0 1.208851,-0.6044259 1.208852,-1.2088513 m -11.4840902,-10.8796629 0,12.6929401`}
		/>
	);
};