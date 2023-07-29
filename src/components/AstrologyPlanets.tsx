import { INNER_CIRCLE_RADIUS_RATIO, getPointPosition } from "@/lib/AstrologyUtils";
import { PlanetSymbol } from "@/types/AstrologyTypes";
import ChironSymbol from "./AstrologySymbols/PlanetSymbols/ChironSymbol";
import JupiterSymbol from "./AstrologySymbols/PlanetSymbols/JupiterSymbol";
import LilithSymbol from "./AstrologySymbols/PlanetSymbols/LilithSymbol";
import MarsSymbol from "./AstrologySymbols/PlanetSymbols/MarsSymbol";
import MercurySymbol from "./AstrologySymbols/PlanetSymbols/MercurySymbol";
import MoonSymbol from "./AstrologySymbols/PlanetSymbols/MoonSymbol";
import NeptuneSymbol from "./AstrologySymbols/PlanetSymbols/NeptuneSymbol";
import NorthNodeSymbol from "./AstrologySymbols/PlanetSymbols/NorthNodeSymbol";
import PlutoSymbol from "./AstrologySymbols/PlanetSymbols/PlutoSymbol";
import SaturnSymbol from "./AstrologySymbols/PlanetSymbols/SaturnSymbol";
import SunSymbol from "./AstrologySymbols/PlanetSymbols/SunSymbol";
import UranusSymbol from "./AstrologySymbols/PlanetSymbols/UranusSymbol";
import VenusSymbol from "./AstrologySymbols/PlanetSymbols/VenusSymbol";

interface AstrologyPlanetsProps {
	x: number;
	y: number;
	radius: number;
	planets: Record<PlanetSymbol, number | undefined>;
	rulerRadius: number;
	pointRadius: number;
	shift: number;
}

function getPlanets(
	x:number,
	y:number,
	planets: Record<PlanetSymbol, number | undefined>,
	pointPositionRadius: number,
	shift: number,
) {
	const planetPointList = [];
	for (let planet in planets) {
		const planetPoint = planets[planet as PlanetSymbol];
		if (planetPoint) {
			const planetShift = planetPoint + shift;
			const planetPosition = getPointPosition(
				x,
				y,
				pointPositionRadius,
				planetShift,
			);
			const startPosition = getPointPosition(
				x,
				y,
				pointPositionRadius,
				planetShift,
			);
			planetPointList.push(

			);
		}
	}
};

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
};

function getPlanetSymbol(
	planet: PlanetSymbol,
	x: number,
	y: number,
	key: number,
) {
	const PlanetComponent = planetSymbols[planet]
	return (
		<PlanetComponent
			x={x}
			y={y}
			key={key}
		/>
	);
}


export default function AstrologyPlanets({
	x,
	y,
	radius,
	planets,
	rulerRadius,
	pointRadius,
	shift,
}: AstrologyPlanetsProps) {
	// Locate points from where?
	const pointerRadius = radius - (radius / INNER_CIRCLE_RADIUS_RATIO + rulerRadius);
	const pointPositionRadius = pointerRadius - rulerRadius / 2;

	return (
		<g>
		</g>
	);
};