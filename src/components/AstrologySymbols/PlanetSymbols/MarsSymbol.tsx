import { AstrologySymbolProps } from "@/types/AstrologyTypes";
import PlanetSymbol from "./PlanetSymbol";

export default function MarsSymbol({ point }: AstrologySymbolProps) {
	const x = Math.round(point.x + 2);
	const y = Math.round(point.y - 2);

	return (
		<PlanetSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y}
				c -5.247438,-4.150623 -11.6993,3.205518 -7.018807,7.886007 4.680494,4.680488 12.036628,-1.771382 7.885999,-7.018816
				z
				m 0,0 0.433597,0.433595 3.996566,-4.217419
				m -3.239802,-0.05521 3.295015,0 0.110427,3.681507
			`}
		/>
	);
};