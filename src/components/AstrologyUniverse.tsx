import { DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, getPointPosition } from '@/lib/AstrologyUtils';
import { Point, ZodiacSign } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologySegment from './AstrologySymbols/AstrologySegment';
import AquariusSymbol from './AstrologySymbols/ZodiacSymbols/AquariusSymbol';
import AriesSymbol from './AstrologySymbols/ZodiacSymbols/AriesSymbol';
import CancerSymbol from './AstrologySymbols/ZodiacSymbols/CancerSymbol';
import CapricornSymbol from './AstrologySymbols/ZodiacSymbols/CapricornSymbol';
import GeminiSymbol from './AstrologySymbols/ZodiacSymbols/GeminiSymbol';
import LeoSymbol from './AstrologySymbols/ZodiacSymbols/LeoSymbol';
import LibraSymbol from './AstrologySymbols/ZodiacSymbols/LibraSymbol';
import PiscesSymbol from './AstrologySymbols/ZodiacSymbols/PiscesSymbol';
import SagittariusSymbol from './AstrologySymbols/ZodiacSymbols/SagittariusSymbol';
import ScorpioSymbol from './AstrologySymbols/ZodiacSymbols/ScorpioSymbol';
import TaurusSymbol from './AstrologySymbols/ZodiacSymbols/TaurusSymbol';
import VirgoSymbol from './AstrologySymbols/ZodiacSymbols/VirgoSymbol';

interface AstrologyUniverseProps {
	readonly point: Point;
	readonly shift: number;
	readonly radius: number;
}

function getSegments(
	point: Point,
	shift: number,
	radius: number,
) {
	const segments: React.ReactElement[] = [];
	const signList = Object.values(signSymbols);
	for (let i = 0, step = 30, start = shift; i < signList.length; i++) {
		const angleTo = start + step;
		const thickness = radius - (radius / INNER_CIRCLE_RADIUS_RATIO);
		segments.push(
			<AstrologySegment
				key={i}
				point={point}
				radius={radius}
				angleFrom={start}
				angleTo={angleTo}
				thickness={thickness}
				stroke={DARK_GRAY}
				strokeWidth={1}
			/>,
		);
		start += step;
	}

	return segments;
}

const signSymbols = {
	[ZodiacSign.Aquarius]: AquariusSymbol,
	[ZodiacSign.Aries]: AriesSymbol,
	[ZodiacSign.Cancer]: CancerSymbol,
	[ZodiacSign.Capricorn]: CapricornSymbol,
	[ZodiacSign.Gemini]: GeminiSymbol,
	[ZodiacSign.Leo]: LeoSymbol,
	[ZodiacSign.Libra]: LibraSymbol,
	[ZodiacSign.Pisces]: PiscesSymbol,
	[ZodiacSign.Sagittarius]: SagittariusSymbol,
	[ZodiacSign.Scorpio]: ScorpioSymbol,
	[ZodiacSign.Taurus]: TaurusSymbol,
	[ZodiacSign.Virgo]: VirgoSymbol,
};

function getSignSymbol(
	sign: ZodiacSign,
	point: Point,
	key: number,
) {
	const SymbolComponent = signSymbols[sign];
	return (
		<SymbolComponent
			key={key}
			point={point}
		/>
	);
}

function getSigns(
	point: Point,
	shift: number,
	radius: number,
) {
	const step = 30;
	let start = 15 + shift;
	const signList = Object.values(ZodiacSign);
	const signSymbols: React.ReactElement[] = [];
	for (let i = 0; i < signList.length; i++) {
		const pointRadius = radius - (radius / 16);
		const pointPosition = getPointPosition(
			point,
			pointRadius,
			start,
		);
		signSymbols.push(getSignSymbol(signList[i], pointPosition, i));
		start += step;
	}

	return signSymbols;
}

const AstrologyUniverse: React.FC<AstrologyUniverseProps> = ({
	point,
	shift,
	radius,
}) => {
	const segments = getSegments(
		point,
		shift,
		radius,
	);
	const signs = getSigns(
		point,
		shift,
		radius,
	);
	return (
		<g>
			{ segments }
			{ signs }
		</g>
	);
};

export default AstrologyUniverse;
