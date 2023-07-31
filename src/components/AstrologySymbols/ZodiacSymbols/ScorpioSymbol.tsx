import { AstrologySymbolProps, ColorSigns } from "@/types/AstrologyTypes";
import ZodiacSymbol from "./ZodiacSymbol";

export default function ScorpioSymbol({ point }: AstrologySymbolProps) {
	const x = Math.round(point.x - 9);
	const y = Math.round(point.y - 4);

	return (
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} 2.3781101,-2.3781101 2.3781101,2.3781101 0,9.5124404
				m -3.1708135,-11.0978471 2.3781101,2.3781101 0,8.719737
				m 0.7927034,-9.5124404 2.3781101,-2.3781101 2.37811007,2.3781101 0,9.5124404
				m -3.17081347,-11.0978471 2.3781101,2.3781101 0,8.719737
				m 0.79270337,-9.5124404 2.37811013,-2.3781101 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854068
				m -4.7562202,-11.8905505 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854067 2.3781101,-2.3781101
			`}
			strokeColor={ColorSigns.ColorScorpio}
		/>
	);
};