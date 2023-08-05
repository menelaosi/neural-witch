import { DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, getPointPosition } from '@/lib/AstrologyUtils';
import { Point, ZodiacSign } from '@/types/AstrologyTypes';
import React, { ReactElement } from 'react';
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
	readonly backgroundRadius: number;
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

const AstrologyUniverse: React.FC<AstrologyUniverseProps> = ({
	point,
	shift,
	radius,
	backgroundRadius,
}) => {
	const segments: ReactElement[] = [];
	const signSymbols: ReactElement[] = [];
	const signList = Object.values(ZodiacSign);
	const pointRadius = radius - (radius / INNER_CIRCLE_RADIUS_RATIO / 2);
	let segmentStart = shift;
	let signStart = segmentStart + 15;
	const step = 30;
	for (let i = 0; i < signList.length; i++) {
		const angleTo = segmentStart + step;
		segments.push(
			<AstrologySegment
				key={i}
				point={point}
				radius={radius}
				angleFrom={segmentStart}
				angleTo={angleTo}
				thickness={backgroundRadius}
				stroke={DARK_GRAY}
				strokeWidth={1}
			/>,
		);
		const pointPosition = getPointPosition(
			point,
			pointRadius,
			signStart,
		);
		signSymbols.push(
			getSignSymbol(
				signList[i],
				pointPosition,
				i + 12,
			),
		);
		segmentStart += step;
		signStart += step;
	}

	return (
		<g id='signs'>
			{ segments }
			{ signSymbols }
		</g>
	);
};

export default AstrologyUniverse;
