import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import ZodiacSymbol from "./ZodiacSymbol";

export default function CapricornSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 9);
	const yPosition = Math.round(y - 3);

	return (
		<ZodiacSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition} 1.8047633,-3.6095267 4.5119084,9.0238168
				m -4.5119084,-7.2190534 4.5119084,9.0238167 2.707145,-6.3166717 4.5119084,0 2.707145,-0.9023817 0.9023817,-1.8047633 0,-1.8047634 -0.9023817,-1.8047633 -1.8047634,-0.9023817 -0.9023816,0 -1.8047634,0.9023817 -0.9023817,1.8047633 0,1.8047634 0.9023817,2.707145 0.9023817,1.80476336 0.9023817,2.70714504 0,2.707145 -1.8047634,1.8047633
				m 1.8047634,-16.2428701 -0.9023817,0.9023817 -0.9023817,1.8047633 0,1.8047634 1.8047634,3.6095267 0.9023816,2.707145 0,2.707145 -0.9023816,1.8047634 -1.8047634,0.9023816
			`}
		/>
	);
};