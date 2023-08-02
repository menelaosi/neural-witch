import { INDOOR_CIRCLE_RADIUS_RATIO, INNER_CIRCLE_RADIUS_RATIO, MARGIN, PADDING, RULER_RADIUS, WHITE, radiansToDegree } from '@/lib/AstrologyUtils';
import { Planets, Point } from '@/types/AstrologyTypes';
import { Horoscope } from 'circular-natal-horoscope-js';
import React from 'react';
import AstrologyAxis from './AstrologyAxis';
import AstrologyPlanets from './AstrologyPlanets';
import AstrologyRuler from './AstrologyRuler';
import AstrologySegment from './AstrologySymbols/AstrologySegment';
import AstrologyUniverse from './AstrologyUniverse';

interface AstrologyChartProps {
	readonly horoscope: Horoscope;
	readonly height?: number;
	readonly width?: number;
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
/* Get reverse for later
function getReverse(location: number): number {
	return (location + 180) % 360;
} */

/**
 * Creates the astrology chart based on the provided horoscope
 * @param {AstrologyChartProps} props The horoscope passed in or undefined
 * @returns A div with all the SVGs for now for testing
 */
const AstrologyChart: React.FC<AstrologyChartProps> = ({
	horoscope,
	height = 800,
	width = 800,
}) => {
	const celestialBodyPositions = Object.values(Planets).reduce<Record<Planets, number | undefined>>(
		(positions, bodyName) => {
			positions[bodyName] = horoscope?.CelestialBodies[bodyName.toString()]?.ChartPosition?.Ecliptic?.DecimalDegrees;
			return positions;
		},
		{} as Record<Planets, number | undefined>,
	);

	const cuspPositions: number[] = horoscope?.Houses.map((cusp: Cusp) => cusp.ChartPosition.StartPosition.Ecliptic.DecimalDegrees);
	/* Ascendant and other points for later
	const ascendant = horoscope?.Ascendant.ChartPosition.Horizon.DecimalDegrees || 0;
	const descendant = getReverse(ascendant);
	const midheaven = horoscope?.Midheaven.ChartPosition.Horizon.DecimalDegrees || 0;
	const immumCoeli = (midheaven + 180) % 360; */

	//	Sets the SVG style to position: relative; overflow:hidden
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
	const x = width / 2;
	const y = height / 2;
	const point: Point = {
		x,
		y,
	};
	const radius = y - MARGIN;
	const backgroundRadius = radius - (radius / INNER_CIRCLE_RADIUS_RATIO);
	const thickness = radius / INDOOR_CIRCLE_RADIUS_RATIO;
	let shift = 0;
	if (cuspPositions && cuspPositions[0]) {
		shift = radiansToDegree(2 * Math.PI) - cuspPositions[0];
	}

	console.log(`Horoscope in Chart: ${horoscope.CelestialBodies}`);
	const rulerRadius = radius / INNER_CIRCLE_RADIUS_RATIO / RULER_RADIUS;
	const pointRadius = radius - ((radius / INNER_CIRCLE_RADIUS_RATIO) + (2 * rulerRadius) + PADDING);
	const startRadius = radius - (radius / 8) + rulerRadius;
	const endRadius = startRadius + rulerRadius;
	return (
		<svg
			id='chart'
			height={height}
			width={width}
			viewBox={`0 0 ${height} ${width}`}
		>
			<g id='aspects' />
			<g id='radix'>
				<AstrologySegment
					point={point}
					radius={backgroundRadius}
					angleFrom={0}
					angleTo={359.99}
					thickness={thickness}
					lFlag={1}
					fill={WHITE}
				/>
				<AstrologyUniverse
					point={point}
					shift={shift}
					radius={radius}
				/>
				<AstrologyRuler
					point={point}
					startRadius={startRadius}
					endRadius={endRadius}
					startAngle={shift}
				/>
				<AstrologyPlanets
					point={point}
					radius={radius}
					planets={celestialBodyPositions}
					rulerRadius={rulerRadius}
					pointRadius={pointRadius}
					shift={shift}
				/>
				<AstrologyAxis
					point={point}
					radius={radius}
					cuspPositions={cuspPositions}
					shift={shift}
				/>
			</g>
		</svg>
	);
};

export default AstrologyChart;
