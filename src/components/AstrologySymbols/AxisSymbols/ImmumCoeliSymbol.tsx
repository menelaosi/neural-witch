import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import AxisSymbol from "./AxisSymbol";

export default function ImmumCoeliSymbol({ point }: AstrologySymbolProps) {
	const x = Math.round(point.x + 19);
	const y = Math.round(point.y + 2);
	return (
		<AxisSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -1.208852,-1.2088514 -1.208851,-0.6044258 -1.813278,0 -1.208852,0.6044258 -1.20885,1.2088514 -0.604426,1.81327715 0,1.20885135 0.604426,1.8132772 1.20885,1.2088513 1.208852,0.6044259 1.813278,0 1.208851,-0.6044259 1.208852,-1.2088513 
				m -11.4840902,-10.8796629 0,12.6929401
			`}
		/>
	);
};