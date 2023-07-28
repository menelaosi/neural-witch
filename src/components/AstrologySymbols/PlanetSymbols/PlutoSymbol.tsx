import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function PlutoSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x + 5);
	const yPosition = Math.round(y - 5);
	const headX = xPosition - 2.3;

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition}
				a 5.7676856,5.7676856 0 0 1 -2.88385,4.99496 5.7676856,5.7676856 0 0 1 -5.76768,0 5.7676856,5.7676856 0 0 1 -2.88385,-4.99496
				m 5.76771,13.93858 0,-8.17088
				m -3.84512,4.32576 7.69024,0
			`}
			hasSecondPath
			secondPath={`
				m ${headX},${yPosition}
				a 3.3644834,3.3644834 0 0 1 -3.36448,3.36449 3.3644834,3.3644834 0 0 1 -3.36448,-3.36449 3.3644834,3.3644834 0 0 1 3.36448,-3.36448 3.3644834,3.3644834 0 0 1 3.36448,3.36448
				z
			`}
		/>
	);
};