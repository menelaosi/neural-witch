import { INDOOR_CIRCLE_RADIUS_RATIO, INNER_CIRCLE_RADIUS_RATIO, MARGIN, PADDING, RULER_RADIUS, WHITE, radiansToDegree } from "@/lib/AstrologyUtils";
import { PlanetSymbol } from "@/types/AstrologyTypes";
import { Horoscope } from "circular-natal-horoscope-js";
import AstrologyAxis from "./AstrologyAxis";
import AstrologyPlanets from "./AstrologyPlanets";
import AstrologyRuler from "./AstrologyRuler";
import AstrologySegment from "./AstrologySymbols/AstrologySegment";
import AstrologyUniverse from "./AstrologyUniverse";

interface AstrologyChartProps {
	horoscope: Horoscope | null;
	height?: number;
	width?: number;
}
interface Cusp {
	ChartPosition: {
		StartPosition:{
			Ecliptic: {
				DecimalDegrees: number;
			},
			Horizon: {
				DecimalDegrees: number;
			}
		},
	};
}

function getReverse(location: number): number {
	return (location + 180) % 360;
}

/**
 * Creates the astrology chart based on the provided horoscope
 * @param {AstrologyChartProps} props The horoscope passed in or null
 * @returns A div with all the SVGs for now for testing
 */
export default function AstrologyChart({
	horoscope,
	height = 800,
	width = 800,
}: AstrologyChartProps) {
	const celestialBodyPositions = Object.values(PlanetSymbol).reduce<Record<PlanetSymbol, number | undefined>>(
		(positions, bodyName) => {
		  positions[bodyName] = horoscope?.CelestialBodies[bodyName]?.ChartPosition?.Ecliptic?.DecimalDegrees;
		  return positions;
		},
		{} as Record<PlanetSymbol, number | undefined>
	);

	const cuspPositions: number[] = horoscope?.Houses.map((cusp: Cusp) => {
		return cusp.ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
	});
	
	const ascendant = horoscope?.Ascendant.ChartPosition.Horizon.DecimalDegrees || 0;
	const descendant = getReverse(ascendant);
	const midheaven = horoscope?.Midheaven.ChartPosition.Horizon.DecimalDegrees || 0;
	const immumCoeli = (midheaven + 180) % 360;
	
	console.log(celestialBodyPositions);
	console.log(cuspPositions);

	//	sets the SVG style to position: relative; overflow:hidden
	//	INNER_CIRCLE_RADIUS_RATIO = 8; RULER_RADIUS = 4;
	// drawBg()
	//	



	/**
	 * Working notes:
	 * Symbols are used in Transit.drawCusps(), Transit.drawPoints()
	 * Symbols are used in Radix.drawCusps(), Radix.drawAxis(), Radix.drawPoints()
	 * These correspond to cusps, axes, and points and can be inferred from horoscope
	 * Symbols are used in Chart.calibrate() - unsure what calibration does yet
	 * 
	 * */
	const cX = width / 2;
	const cY = height / 2;
	const radius = cY - MARGIN;
	const backgroundRadius = radius - (radius / INNER_CIRCLE_RADIUS_RATIO);
	const thickness = radius / INDOOR_CIRCLE_RADIUS_RATIO;
	let shift = 0;
	if (cuspPositions && cuspPositions[0]) {
		shift = radiansToDegree(2*Math.PI) - cuspPositions[0];
	}
	const rulerRadius = radius / INNER_CIRCLE_RADIUS_RATIO / RULER_RADIUS;
	const pointRadius = radius - (radius / INNER_CIRCLE_RADIUS_RATIO + 2 * rulerRadius + PADDING);
	const startRadius = radius - (radius / 8 + rulerRadius);
	const endRadius = startRadius + rulerRadius;
	return (
		<svg
			id="chart"
			height={height}
			width={width}
			viewBox={`0 0 ${height} ${width}`}
		>
			<g id="aspects"></g>
			<g id="radix">
				<AstrologySegment
					x={cX}
					y={cY}
					radius={backgroundRadius}
					angleFrom={0}
					angleTo={359.99}
					thickness={thickness}
					lFlag={1}
					fill={WHITE}
				/>
				<AstrologyUniverse
					x={cX}
					y={cY}
					shift={shift}
					radius={radius}
				/>
				<AstrologyRuler
					x={cX}
					y={cY}
					startRadius={startRadius}
					endRadius={endRadius}
					startAngle={shift}
				/>
				<AstrologyPlanets
					x={cX}
					y={cY}
					radius={radius}
					planets={celestialBodyPositions}
					rulerRadius={rulerRadius}
					pointRadius={pointRadius}
					shift={shift}
				/>
				<AstrologyAxis

				/>
			</g>
		</svg>
	);
};