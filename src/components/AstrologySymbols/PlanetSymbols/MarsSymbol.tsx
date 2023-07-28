import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function MarsSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x + 2);
	const yPosition = Math.round(y - 2);

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition}
				c -5.247438,-4.150623 -11.6993,3.205518 -7.018807,7.886007 4.680494,4.680488 12.036628,-1.771382 7.885999,-7.018816
				z
				m 0,0 0.433597,0.433595 3.996566,-4.217419
				m -3.239802,-0.05521 3.295015,0 0.110427,3.681507
			`}
		/>
	);
};