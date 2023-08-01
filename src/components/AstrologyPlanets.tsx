import { PlanetSymbol, Point } from '@/types/AstrologyTypes';
import React from 'react';

interface AstrologyPlanetsProps {
	readonly point: Point;
	readonly radius: number;
	readonly planets: Record<PlanetSymbol, number | undefined>;
	readonly rulerRadius: number;
	readonly shift: number;
}
/* Add in getPlanets later
function getPlanets(
	point: Point,
	planets: Record<PlanetSymbol, number | undefined>,
	pointPositionRadius: number,
	shift: number,
) { } */
/* Planet Symbols
const planetSymbols = {
	[PlanetSymbol.Chiron]: ChironSymbol,
	[PlanetSymbol.Jupiter]: JupiterSymbol,
	[PlanetSymbol.Lilith]: LilithSymbol,
	[PlanetSymbol.Mars]: MarsSymbol,
	[PlanetSymbol.Mercury]: MercurySymbol,
	[PlanetSymbol.Moon]: MoonSymbol,
	[PlanetSymbol.Neptune]: NeptuneSymbol,
	[PlanetSymbol.NorthNode]: NorthNodeSymbol,
	[PlanetSymbol.Pluto]: PlutoSymbol,
	[PlanetSymbol.Saturn]: SaturnSymbol,
	[PlanetSymbol.Sun]: SunSymbol,
	[PlanetSymbol.Uranus]: UranusSymbol,
	[PlanetSymbol.Venus]: VenusSymbol,
}; */
/* Get Planet Symbol
function getPlanetSymbol(
	planet: PlanetSymbol,
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
} */

/* Locate points from where? pointRadius removed
const pointerRadius = radius - ((radius / INNER_CIRCLE_RADIUS_RATIO) + rulerRadius);
const pointPositionRadius = pointerRadius - (rulerRadius / 2);
getPlanets(point, planets, pointPositionRadius, shift); */
const AstrologyPlanets: React.FC<AstrologyPlanetsProps> = () => <g />;

export default AstrologyPlanets;
