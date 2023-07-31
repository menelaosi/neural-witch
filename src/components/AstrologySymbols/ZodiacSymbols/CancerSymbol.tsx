import { AstrologySymbolProps, ColorSigns } from "@/types/AstrologyTypes";
import ZodiacSymbol from "./ZodiacSymbol";

export default function CancerSymbol({ point }: AstrologySymbolProps) {
	const x = Math.round(point.x + 9);
	const y = Math.round(point.y - 9);

	return(
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} -15,0 -2,1 -1,2 0,2 1,2 2,1 2,0 2,-1 1,-2 0,-2 -1,-2 11,0
				m -18,3 1,2 1,1 2,1
				m 4,-4 -1,-2 -1,-1 -2,-1
				m -4,15 15,0 2,-1 1,-2 0,-2 -1,-2 -2,-1 -2,0 -2,1 -1,2 0,2 1,2 -11,0
				m 18,-3 -1,-2 -1,-1 -2,-1
				m -4,4 1,2 1,1 2,1
			`}
			strokeColor={ColorSigns.ColorCancer}
		/>
	);
};