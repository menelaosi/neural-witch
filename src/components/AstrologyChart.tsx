import { Horoscope } from "circular-natal-horoscope-js";
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
interface AstrologyChartProps {
	horoscope: Horoscope | null;
}

/**
 * Creates the astrology chart based on the provided horoscope
 * @param {AstrologyChartProps} props The horoscope passed in or null
 * @returns A div with all the SVGs for now for testing
 */
export default function AstrologyChart(props: AstrologyChartProps) {
	return (
		<div>
			<ChironSymbol x={10} y={10}/>
			<JupiterSymbol x={10} y={10}/>
			<LilithSymbol x={10} y={10}/>
			<MarsSymbol x={10} y={10}/>
			<MercurySymbol x={10} y={10}/>
			<MoonSymbol x={10} y={10}/>
			<NeptuneSymbol x={10} y={10}/>
			<NorthNodeSymbol x={10} y={10}/>
			<PlutoSymbol x={10} y={10}/>
			<SaturnSymbol x={10} y={10}/>
			<SunSymbol x={10} y={10}/>
			<UranusSymbol x={10} y={10}/>
			<VenusSymbol x={10} y={10}/>
		</div>
	);
};