import { DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, getPointPosition } from "@/lib/AstrologyUtils";
import { Point, SignSymbol } from "@/types/AstrologyTypes";
import { ReactElement } from "react";
import AstrologySegment from "./AstrologySymbols/AstrologySegment";
import AquariusSymbol from "./AstrologySymbols/ZodiacSymbols/AquariusSymbol";
import AriesSymbol from "./AstrologySymbols/ZodiacSymbols/AriesSymbol";
import CancerSymbol from "./AstrologySymbols/ZodiacSymbols/CancerSymbol";
import CapricornSymbol from "./AstrologySymbols/ZodiacSymbols/CapricornSymbol";
import GeminiSymbol from "./AstrologySymbols/ZodiacSymbols/GeminiSymbol";
import LeoSymbol from "./AstrologySymbols/ZodiacSymbols/LeoSymbol";
import LibraSymbol from "./AstrologySymbols/ZodiacSymbols/LibraSymbol";
import PiscesSymbol from "./AstrologySymbols/ZodiacSymbols/PiscesSymbol";
import SagittariusSymbol from "./AstrologySymbols/ZodiacSymbols/SagittariusSymbol";
import ScorpioSymbol from "./AstrologySymbols/ZodiacSymbols/ScorpioSymbol";
import TaurusSymbol from "./AstrologySymbols/ZodiacSymbols/TaurusSymbol";
import VirgoSymbol from "./AstrologySymbols/ZodiacSymbols/VirgoSymbol";

interface AstrologyUniverseProps {
	point: Point;
	shift: number;
	radius: number;
}

function getSegments(
	point: Point,
	shift: number,
	radius: number,
) {
	const segments: ReactElement[] = [];
	const signList = Object.values(SignSymbol);
	for (let i = 0, step = 30, start = shift; i < signList.length; i++) {
		const angleTo = start + step;
		const thickness = radius - (radius / INNER_CIRCLE_RADIUS_RATIO);
		segments.push(
			<AstrologySegment
				point={point}
				radius={radius}
				angleFrom={start}
				angleTo={angleTo}
				thickness={thickness}
				key={i}
				stroke={DARK_GRAY}
				strokeWidth={1}
			/>
		);
		start += step;
	}
	return segments;
};

const signSymbols = {
	[SignSymbol.Aquarius]: AquariusSymbol,
	[SignSymbol.Aries]: AriesSymbol,
	[SignSymbol.Cancer]: CancerSymbol,
	[SignSymbol.Capricorn]: CapricornSymbol,
	[SignSymbol.Gemini]: GeminiSymbol,
	[SignSymbol.Leo]: LeoSymbol,
	[SignSymbol.Libra]: LibraSymbol,
	[SignSymbol.Pisces]: PiscesSymbol,
	[SignSymbol.Sagittarius]: SagittariusSymbol,
	[SignSymbol.Scorpio]: ScorpioSymbol,
	[SignSymbol.Taurus]: TaurusSymbol,
	[SignSymbol.Virgo]: VirgoSymbol
};

function getSignSymbol(
	sign: SignSymbol,
	point: Point,
	key: number,
) {
	const SymbolComponent = signSymbols[sign];
	return (
		<SymbolComponent
			point={point}
			key={key}
		/>
	);
};

function getSigns(
	point: Point,
	shift: number,
	radius: number,
) {
	let step = 30;
	let start = 15 + shift;
	const signList = Object.values(SignSymbol);
	const signSymbols: ReactElement[] = []
	for (let i = 0; i < signList.length; i++) {
		const pointRadius = radius - radius / 16;
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

export default function AstrologyUniverse({
	point,
	shift,
	radius,
}: AstrologyUniverseProps) {
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
	)
}