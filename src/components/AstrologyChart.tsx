import { Horoscope } from "circular-natal-horoscope-js";
import AstrologyCircle from "./AstrologySymbols/AstrologyCircle";
interface AstrologyChartProps {
	horoscope: Horoscope | null;
}

/**
 * Creates the astrology chart based on the provided horoscope
 * @param {AstrologyChartProps} props The horoscope passed in or null
 * @returns A div with all the SVGs for now for testing
 */
export default function AstrologyChart({ horoscope }: AstrologyChartProps) {
	console.log(horoscope);
	// Draw background first 
	// const start = 0; 
	// const end = 359.99
	// segment(this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
	return (
		<div id={"chart"}>
			<svg
				height={800}
				width={800}
				viewBox={`0 0 800 800`}
			>
				<AstrologyCircle
					centerX={400}
					centerY={400}
					radius={400}
				/>
			</svg>
		</div>
	);
};