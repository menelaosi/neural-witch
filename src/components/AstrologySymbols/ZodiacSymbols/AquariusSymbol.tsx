import { AstrologySymbolProps, ColorSigns } from "@/types/AstrologyTypes";
import ZodiacSymbol from "./ZodiacSymbol";

export default function AquariusSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 8);
	const yPosition = Math.round(y - 2);

	return (
		<ZodiacSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition} 2.8866035,-2.8866035 3.8488047,1.9244023
				m -4.8110059,-0.9622011 3.8488047,1.9244023 2.8866035,-2.8866035 2.8866035,1.9244023
				m -3.84880467,-0.9622011 2.88660347,1.9244023 2.8866035,-2.8866035 1.9244024,1.9244023
				m -2.8866035,-0.9622011 1.9244023,1.9244023 2.8866035,-2.8866035
				m -17.319621,8.6598105 2.8866035,-2.88660348 3.8488047,1.92440238
				m -4.8110059,-0.96220121 3.8488047,1.92440231 2.8866035,-2.88660348 2.8866035,1.92440238
				m -3.84880467,-0.96220121 2.88660347,1.92440231 2.8866035,-2.88660348 1.9244024,1.92440238
				m -2.8866035,-0.96220121 1.9244023,1.92440231 2.8866035,-2.88660348
			`}
			strokeColor={ColorSigns.ColorAquarius}
		/>
	);
};