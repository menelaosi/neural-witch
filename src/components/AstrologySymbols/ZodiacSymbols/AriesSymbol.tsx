import { AstrologySymbolProps, ColorSigns } from "@/types/AstrologyTypes";
import ZodiacSymbol from "./ZodiacSymbol";

export default function AriesSymbol({ point }: AstrologySymbolProps) {
	const x = Math.round(point.x - 9);
	const y = Math.round(point.y - 2);

	return (
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -0.9,-0.9 0,-1.8 0.9,-1.8 1.8,-0.8999998 1.8,0 1.8,0.8999998 0.9,0.9 0.9,1.8 0.9,4.5
				m -9,-5.4 1.8,-1.8 1.8,0 1.8,0.9 0.9,0.9 0.9,1.8 0.9,3.6 0,9.9
				m 8.1,-12.6 0.9,-0.9 0,-1.8 -0.9,-1.8 -1.8,-0.8999998 -1.8,0 -1.8,0.8999998 -0.9,0.9 -0.9,1.8 -0.9,4.5
				m 9,-5.4 -1.8,-1.8 -1.8,0 -1.8,0.9 -0.9,0.9 -0.9,1.8 -0.9,3.6 0,9.9
			`}
			strokeColor={ColorSigns.ColorAries}
		/>
	);
};