import { BLACK, COLLISION_RADIUS, CUSPS_STROKE, DARK_GRAY, INNER_CIRCLE_RADIUS_RATIO, POINTS_TEXT_SIZE, assembleLocatedPoints, getDescriptionPosition, getDignities, getPointPosition, isRetrograde } from '@/lib/AstrologyUtils';
import { LocatedPoint, Planets, Point } from '@/types/AstrologyTypes';
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
	rulerRadius,
	pointRadius,
	shift,
}) => {
	console.log(planets);
	if (!planets) {
		return;
	}

	const radiusRatio = radius / INNER_CIRCLE_RADIUS_RATIO;
	const pointerRadius = radius - (radiusRatio + rulerRadius);
	const pointCollision = pointRadius * COLLISION_RADIUS;
	const elements: ReactElement[] = [];
	const halfStroke = CUSPS_STROKE / 2;
	let key = 0;
	let locatedPoints: LocatedPoint[] = [];
	Object.keys(planets).forEach(planet => {
		const planetValue = planets[planet as Planets];

		if (!planetValue) {
			return;
		}

		let planetShift = planetValue + shift;
		const position = getPointPosition(
			point,
			pointRadius,
			planetShift,
		);

		const locatedPoint: LocatedPoint = {
			name: planet as Planets,
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

		locatedPoints.forEach((locatedPoint: LocatedPoint) => {
			let startPosition = getPointPosition(
				point,
				pointerRadius,
				planetShift,
			);
			let endPosition = getPointPosition(
				point,
				pointerRadius - (rulerRadius / 2),
				planetShift,
			);
			elements.push(
				<AstrologyLine
					startingPoint={startPosition}
					endingPoint={endPosition}
					stroke={DARK_GRAY}
					strokeWidth={CUSPS_STROKE}
				/>,
			);
			planetShift = planets[locatedPoint.name]! + shift;
			if (planetShift !== locatedPoint.angle) {
				startPosition = endPosition;
				endPosition = getPointPosition(
					point,
					pointCollision,
					locatedPoint.angle,
				);
				elements.push(
					<AstrologyLine
						startingPoint={startPosition}
						endingPoint={endPosition}
						stroke={DARK_GRAY}
						strokeWidth={halfStroke}
					/>,
				);
			}
		});

		const planetName = locatedPoint.name;
		elements.push(getPlanetSymbol(
			planetName,
			locatedPoint.point,
			key,
		));
		key++;
		const locatedPlanet = planets[planetName];
		if (locatedPlanet !== undefined) {
			const texts = [Math.round(locatedPlanet % 30).toString()];
			if (isRetrograde(locatedPlanet)) {
				texts.push('R');
			} else {
				texts.push('');
			}

			texts.concat(getDignities(
				planetName,
				locatedPlanet,
			).join(','));
			const descriptions = getDescriptionPosition(locatedPoint, texts);
			for (let i = 0; i < descriptions.length; i++) {
				elements.push(
					<AstrologyText
						text={descriptions[i].text}
						point={descriptions[i].point}
						size={POINTS_TEXT_SIZE}
						color={BLACK}
					/>,
				);
			}
		}
	});
	return (
		<g id='points'>
			{ elements }
		</g>
	);
};

export default AstrologyPlanets;
