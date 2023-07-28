import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import ZodiacSymbol from "./ZodiacSymbol";

export default function VirgoSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 9);
	const yPosition = Math.round(y - 5);

	return (
		<ZodiacSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition} 2.5894868,-2.5894868 1.7263245,2.5894868 0,9.4947847
				m -2.5894868,-11.2211092 1.7263245,2.5894867 0,8.6316225
				m 0.8631623,-9.4947847 2.5894867,-2.5894868 1.72632451,2.5894868 0,8.6316224
				m -2.58948671,-10.3579469 1.72632447,2.5894867 0,7.7684602
				m 0.86316224,-8.6316224 2.58948679,-2.5894868 1.7263244,2.5894868 0,13.8105959
				m -2.5894867,-15.5369204 1.7263245,2.5894867 0,12.9474337
				m 0.8631622,-13.8105959 2.5894868,-2.5894868 0.8631622,1.7263245 0.8631623,2.5894868 0,2.5894867 -0.8631623,2.58948673 -0.8631622,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -4.3158113,1.7263245
				m 7.7684602,-15.5369204 0.8631623,0.8631622 0.8631622,2.5894868 0,2.5894867 -0.8631622,2.58948673 -0.8631623,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -3.452649,1.7263245
			`}
		/>
	);
};