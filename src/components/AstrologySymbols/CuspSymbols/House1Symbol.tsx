import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import CuspSymbol from "./CuspSymbol";

export default function House1Symbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x);
	const yPosition = Math.round(props.y - 3);
	return (
		<CuspSymbol
			x={xPosition}
			y={yPosition}
			path={`m${xPosition}, ${yPosition} -2.5128753,7.7578884 1.00515009,0 m 3.01545031,-9.5832737 -1.0051501,1.8253853 -2.51287527,7.7578884 m 3.51802537,-9.5832737 -3.01545031,9.5832737 m 3.01545031,-9.5832737 -1.5077251,1.3690388 -1.50772521,0.9126929 -1.00515009,0.4563463 m 2.5128753,-0.9126927 -1.00515016,0.4563464 -1.50772514,0.4563463`}
		/>
	);
};