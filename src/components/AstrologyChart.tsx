import { COLLISION_RADIUS, FULL_CIRCLE, INDOOR_CIRCLE_RADIUS_RATIO, INNER_CIRCLE_RADIUS_RATIO, MARGIN, PADDING, RULER_RADIUS, assembleLocatedPoints, getPointPosition } from '@/lib/AstrologyUtils';
import { LocatedPoint, Planets, Point } from '@/types/AstrologyTypes';
import { Horoscope } from 'circular-natal-horoscope-js';
import React from 'react';
import AstrologyAxis from './AstrologyAxis';
import AstrologyBackground from './AstrologyBackground';
import AstrologyCircles from './AstrologyCircles';
import AstrologyCusps from './AstrologyCusps';
import AstrologyPlanets from './AstrologyPlanets';
import AstrologyRuler from './AstrologyRuler';
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

function getCelestialBodyPositions(horoscope: Horoscope): Record<Planets, number | undefined> {
	return Object.values(Planets).reduce<Record<Planets, number | undefined>>(
		(positions, bodyName) => {
			positions[bodyName] = horoscope?.CelestialBodies[bodyName.toString()]
				?.ChartPosition
				?.Ecliptic
				?.DecimalDegrees;
			return positions;
		},
		{} as Record<Planets, number | undefined>,
	);
}

function getCuspPositions(horoscope: Horoscope): number[] {
	return horoscope?.Houses
		.map((cusp: Cusp) => cusp.ChartPosition
			.StartPosition
			.Ecliptic
			.DecimalDegrees,
		);
}

function getLocatedPoints(
	celestialBodyPositions: Record<Planets, number | undefined>,
	point: Point,
	pointRadius: number,
	shift: number,
): LocatedPoint[] {
	let locatedPoints: LocatedPoint[] = [];
	const planetNames = Object.keys(celestialBodyPositions);
	planetNames.forEach(planet => {
		const planetName = planet as Planets;
		const planetShift = (celestialBodyPositions[planetName] || 0) + shift;
		const position = getPointPosition(
			point,
			pointRadius,
			planetShift,
		);
		const locatedPoint = {
			planetName,
			point: position,
			radius: COLLISION_RADIUS,
			angle: planetShift,
			pointer: planetShift,
		};
		locatedPoints = assembleLocatedPoints(
			locatedPoints,
			locatedPoint,
			point,
			pointRadius,
		);
	});

	return locatedPoints;
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
	const x = width / 2;
	const y = height / 2;
	const point: Point = {
		x,
		y,
	};

	const radius = y - MARGIN;

	const radiusRatio = radius / INNER_CIRCLE_RADIUS_RATIO;
	const radixRadius = radius - radiusRatio;
	const transitRadius = radius + radiusRatio;

	const thickness = radius / INDOOR_CIRCLE_RADIUS_RATIO;

	const rulerRadius = radiusRatio / RULER_RADIUS;
	const radixRulerRadius = radius - (radiusRatio + rulerRadius);
	const pointRadius = radius - (radiusRatio + (2 * rulerRadius) + PADDING);
	const numbersRadius = (radius / INDOOR_CIRCLE_RADIUS_RATIO) + COLLISION_RADIUS;
	const endDashedLineRadius = radius - (radiusRatio + rulerRadius);

	const celestialBodyPositions = getCelestialBodyPositions(horoscope);

	const cuspPositions = getCuspPositions(horoscope);

	const shift = (cuspPositions && cuspPositions[0])
		? FULL_CIRCLE - cuspPositions[0]
		: 0;

	const locatedPoints = getLocatedPoints(
		celestialBodyPositions,
		point,
		pointRadius,
		shift,
	);

	return (
		<svg
			id='chart'
			height={height}
			width={width}
			viewBox={`0 0 ${height} ${width}`}
		>
			<g id='aspects' />
			<g id='radix'>
				<AstrologyBackground
					id={'radix-background'}
					point={point}
					radius={radixRadius}
					thickness={thickness}
				/>
				<AstrologyUniverse
					point={point}
					shift={shift}
					radius={radius}
					backgroundRadius={radixRadius}
				/>
				<AstrologyRuler
					point={point}
					startRadius={radius}
					rulerRadius={rulerRadius}
					startAngle={shift}
				/>
				<AstrologyPlanets
					point={point}
					radius={radius}
					planets={celestialBodyPositions}
					locatedPoints={locatedPoints}
					rulerRadius={rulerRadius}
					pointRadius={pointRadius}
					shift={shift}
				/>
				<AstrologyCusps
					point={point}
					numbersRadius={numbersRadius}
					pointRadius={pointRadius}
					endDashedLineRadius={endDashedLineRadius}
					cuspPositions={cuspPositions}
					shift={shift}
					locatedPoints={locatedPoints}
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
					backgroundRadius={radixRadius}
				/>
			</g>
			<g id='transits'>
				<AstrologyBackground
					id={'transit-background'}
					point={point}
					radius={transitRadius}
					thickness={thickness}
				/>
				<AstrologyPlanets
					point={point}
					radius={radius}
					planets={celestialBodyPositions}
					locatedPoints={locatedPoints}
					rulerRadius={rulerRadius}
					pointRadius={pointRadius}
					shift={shift}
				/>
				<AstrologyRuler
					point={point}
					startRadius={transitRadius}
					rulerRadius={rulerRadius}
					startAngle={shift}
					isTransit
				/>
			</g>
		</svg>
	);
};

export default AstrologyChart;
