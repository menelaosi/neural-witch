import { DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, getPointPosition } from "@/lib/AstrologyUtils";
import { ColorSigns, SignSymbol } from "@/types/AstrologyTypes";
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
	x: number;
	y: number;
	shift: number;
	radius: number;
}

function getSegments(
	x: number,
	y: number,
	shift: number,
	radius: number,
) {
	const segments: ReactElement[] = [];
	const colorList = Object.values(ColorSigns);
	for (let i = 0, step = 30, start = shift; i < colorList.length; i++) {
		const angleTo = start + step;
		const thickness = radius - (radius / INNER_CIRCLE_RADIUS_RATIO);
		segments.push(
			<AstrologySegment
				x={x}
				y={y}
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
	x: number,
	y: number,
	key: number,
) {
	const SymbolComponent = signSymbols[sign];
	return (
		<SymbolComponent
			x={x}
			y={y}
			key={key}
		/>
	);
};

function getSigns(
	x: number,
	y: number,
	shift: number,
	radius: number,
) {
	let step = 30;
	let start = 15 + shift;
	const signList = Object.values(SignSymbol);
	const signSymbols: ReactElement[] = []
	for (let i = 0; i < signList.length; i++) {
		const pointRadius = radius - radius / 16;
		const point = getPointPosition(
			x,
			y,
			pointRadius,
			start,
		);
		signSymbols.push(getSignSymbol(signList[i], point.x, point.y, i));
		start += step;
	}
	return signSymbols;
}

export default function AstrologyUniverse({
	x,
	y,
	shift,
	radius,
}: AstrologyUniverseProps) {
	const segments = getSegments(
		x,
		y,
		shift,
		radius,
	);
	const signs = getSigns(
		x,
		y,
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