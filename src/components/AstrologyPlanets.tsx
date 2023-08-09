import { BLACK, COLLISION_RADIUS, CUSPS_STROKE, DARK_GRAY, INDOOR_CIRCLE_RADIUS_RATIO, INNER_CIRCLE_RADIUS_RATIO, POINTS_TEXT_SIZE, getDescriptionPosition, getDignities, getPointPosition } from '@/lib/AstrologyUtils';
import { DescriptionPosition, LocatedPoint, Planets, Point } from '@/types/AstrologyTypes';
import React, { ReactElement } from 'react';
import AstrologyLine from './AstrologySymbols/AstrologyLine';
import AstrologyText from './AstrologySymbols/AstrologyText';
import ChironSymbol from './AstrologySymbols/PlanetSymbols/ChironSymbol';
import JupiterSymbol from './AstrologySymbols/PlanetSymbols/JupiterSymbol';
import LilithSymbol from './AstrologySymbols/PlanetSymbols/LilithSymbol';
import MarsSymbol from './AstrologySymbols/PlanetSymbols/MarsSymbol';
import MercurySymbol from './AstrologySymbols/PlanetSymbols/MercurySymbol';
import MoonSymbol from './AstrologySymbols/PlanetSymbols/MoonSymbol';
import NeptuneSymbol from './AstrologySymbols/PlanetSymbols/NeptuneSymbol';
import NorthNodeSymbol from './AstrologySymbols/PlanetSymbols/NorthNodeSymbol';
import PlutoSymbol from './AstrologySymbols/PlanetSymbols/PlutoSymbol';
import SaturnSymbol from './AstrologySymbols/PlanetSymbols/SaturnSymbol';
import SunSymbol from './AstrologySymbols/PlanetSymbols/SunSymbol';
import UranusSymbol from './AstrologySymbols/PlanetSymbols/UranusSymbol';
import VenusSymbol from './AstrologySymbols/PlanetSymbols/VenusSymbol';

interface AstrologyPlanetsProps {
	readonly point: Point;
	readonly radius: number;
	readonly planets: Record<Planets, number | undefined>;
	readonly locatedPoints: LocatedPoint[];
	readonly rulerRadius: number;
	readonly pointRadius: number;
	readonly shift: number;
}

const planetSymbols = {
	[Planets.Chiron]: ChironSymbol,
	[Planets.Jupiter]: JupiterSymbol,
	[Planets.Lilith]: LilithSymbol,
	[Planets.Mars]: MarsSymbol,
	[Planets.Mercury]: MercurySymbol,
	[Planets.Moon]: MoonSymbol,
	[Planets.Neptune]: NeptuneSymbol,
	[Planets.NorthNode]: NorthNodeSymbol,
	[Planets.Pluto]: PlutoSymbol,
	[Planets.Saturn]: SaturnSymbol,
	[Planets.Sun]: SunSymbol,
	[Planets.Uranus]: UranusSymbol,
	[Planets.Venus]: VenusSymbol,
};

function getPlanetSymbol(
	planet: Planets,
	point: Point,
	key: number,
) {
	const PlanetComponent = planetSymbols[planet];
	return (
		<PlanetComponent
			key={key}
			point={point}
		/>
	);
}

const AstrologyPlanets: React.FC<AstrologyPlanetsProps> = ({
	point,
	radius,
	planets,
	locatedPoints,
	rulerRadius,
	pointRadius,
	shift,
}) => {
	const elements: ReactElement[] = [];
	const pointerRadius = radius + ((radius / INNER_CIRCLE_RADIUS_RATIO) + (radius / INDOOR_CIRCLE_RADIUS_RATIO));
	let key = 0;
	locatedPoints.forEach((locatedPoint: LocatedPoint) => {
		const {
			planetName,
			angle,
		} = locatedPoint;
		const planetPoint = locatedPoint.point;
		const planetAngle = planets[planetName] || -1;
		const planetShift = planetAngle + shift;
		let startPosition = getPointPosition(
			point,
			pointerRadius,
			planetShift,
		);
		let endPosition = getPointPosition(
			point,
			pointerRadius + (rulerRadius / 2),
			planetShift,
		);
		elements.push(
			<AstrologyLine
				key={key}
				startingPoint={startPosition}
				endingPoint={endPosition}
				stroke={DARK_GRAY}
				strokeWidth={CUSPS_STROKE}
			/>,
		);
		key++;

		if (planetShift !== angle) {
			startPosition = endPosition;
			endPosition = getPointPosition(
				point,
				pointRadius - COLLISION_RADIUS,
				angle,
			);
			elements.push(
				<AstrologyLine
					key={key}
					startingPoint={startPosition}
					endingPoint={endPosition}
					stroke={DARK_GRAY}
					strokeWidth={CUSPS_STROKE}
				/>,
			);
			key++;
		}

		const planetSymbol = getPlanetSymbol(
			planetName,
			planetPoint,
			key,
		);
		elements.push(planetSymbol);
		key++;
		let textsToShow = [
			Math.round(planetAngle % 30).toString(),
		];

		if (planetAngle < 0) {
			textsToShow.push('R');
		}

		textsToShow = textsToShow.concat(
			getDignities(
				planetName,
				planetAngle,
			),
		);
		getDescriptionPosition(
			locatedPoint,
			textsToShow,
		).forEach((description: DescriptionPosition) => {
			elements.push(
				<AstrologyText
					key={key}
					text={description.text}
					point={description.point}
					size={POINTS_TEXT_SIZE}
					color={BLACK}
				/>,
			);
			key++;
		});
	});
	return (
		<g id='points'>
			{ elements }
		</g>
	);
};

export default AstrologyPlanets;
