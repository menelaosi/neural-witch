import { AstrologySymbolProps, ColorSigns } from "@/types/AstrologyTypes";
import ZodiacSymbol from "./ZodiacSymbol";

export default function PiscesSymbol({ point }: AstrologySymbolProps) {
	const x = Math.round(point.x - 8);
	const y = Math.round(point.y - 8);

	return (
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} 4,2 2,2 1,3 0,3 -1,3 -2,2 -4,2
				m 0,-17 3,1 2,1 2,2 1,3
				m 0,3 -1,3 -2,2 -2,1 -3,1
				m 16,-17 -3,1 -2,1 -2,2 -1,3
				m 0,3 1,3 2,2 2,1 3,1
				m 0,-17 -4,2 -2,2 -1,3 0,3 1,3 2,2 4,2
				m -17,-9 18,0
				m -18,1 18,0
			`}
			strokeColor={ColorSigns.ColorPisces}
		/>
	);
};