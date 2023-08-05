import { FULL_CIRCLE, INDOOR_CIRCLE_RADIUS_RATIO, INNER_CIRCLE_RADIUS_RATIO, MARGIN, PADDING, RULER_RADIUS, WHITE } from '@/lib/AstrologyUtils';
import { Planets, Point } from '@/types/AstrologyTypes';
import { Horoscope } from 'circular-natal-horoscope-js';
import React from 'react';
import AstrologyAxis from './AstrologyAxis';
import AstrologyCircles from './AstrologyCircles';
import AstrologyCusps from './AstrologyCusps';
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
		shift = FULL_CIRCLE - cuspPositions[0];
	}

	const rulerRadius = radius / INNER_CIRCLE_RADIUS_RATIO / RULER_RADIUS;
	const pointRadius = radius - ((radius / INNER_CIRCLE_RADIUS_RATIO) + (2 * rulerRadius) + PADDING);
	return (
		<svg
			id='chart'
			height={height}
			width={width}
			viewBox={`0 0 ${height} ${width}`}
		>
			<g id='aspects' />
			<g id='radix'>
				<g id='background'>
					<AstrologySegment
						point={point}
						radius={backgroundRadius}
						angleFrom={0}
						angleTo={359.99}
						thickness={thickness}
						lFlag={1}
						fill={WHITE}
					/>
				</g>
				<AstrologyUniverse
					point={point}
					shift={shift}
					radius={radius}
					backgroundRadius={backgroundRadius}
				/>
				<AstrologyRuler
					point={point}
					radius={radius}
					rulerRadius={rulerRadius}
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
				<AstrologyCusps
					point={point}
					radius={radius}
					cuspPositions={cuspPositions}
					shift={shift}
				/>
				<AstrologyAxis
					point={point}
					radius={radius}
					cuspPositions={cuspPositions}
					shift={shift}
				/>
				<AstrologyCircles
					point={point}
					radius={radius}
					thickness={thickness}
					backgroundRadius={backgroundRadius}
				/>
			</g>
		</svg>
	);
};

export default AstrologyChart;
