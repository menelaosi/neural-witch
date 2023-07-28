import { Horoscope } from "circular-natal-horoscope-js";
import AscendantSymbol from "./AstrologySymbols/AxisSymbols/AscendantSymbol";
import DescendantSymbol from "./AstrologySymbols/AxisSymbols/DescendantSymbol";
import ImmumCoeliSymbol from "./AstrologySymbols/AxisSymbols/ImmumCoeliSymbol";
import MediumCoeliSymbol from "./AstrologySymbols/AxisSymbols/MediumCoeliSymbol";
import House10Symbol from "./AstrologySymbols/CuspSymbols/House10Symbol";
import House11Symbol from "./AstrologySymbols/CuspSymbols/House11Symbol";
import House12Symbol from "./AstrologySymbols/CuspSymbols/House12Symbol";
import House1Symbol from "./AstrologySymbols/CuspSymbols/House1Symbol";
import House2Symbol from "./AstrologySymbols/CuspSymbols/House2Symbol";
import House3Symbol from "./AstrologySymbols/CuspSymbols/House3Symbol";
import House4Symbol from "./AstrologySymbols/CuspSymbols/House4Symbol";
import House5Symbol from "./AstrologySymbols/CuspSymbols/House5Symbol";
import House6Symbol from "./AstrologySymbols/CuspSymbols/House6Symbol";
import House7Symbol from "./AstrologySymbols/CuspSymbols/House7Symbol";
import House8Symbol from "./AstrologySymbols/CuspSymbols/House8Symbol";
import House9Symbol from "./AstrologySymbols/CuspSymbols/House9Symbol";
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
			<DescendantSymbol x={10} y={10}/>
			<AscendantSymbol x={10} y={10}/>
			<ImmumCoeliSymbol x={10} y={10}/>
			<MediumCoeliSymbol x={10} y={10}/>
			<House1Symbol x={10} y={10}/>
			<House2Symbol x={10} y={10}/>
			<House3Symbol x={10} y={10}/>
			<House4Symbol x={10} y={10}/>
			<House5Symbol x={10} y={10}/>
			<House6Symbol x={10} y={10}/>
			<House7Symbol x={10} y={10}/>
			<House8Symbol x={10} y={10}/>
			<House9Symbol x={10} y={10}/>
			<House10Symbol x={10} y={10}/>
			<House11Symbol x={10} y={10}/>
			<House12Symbol x={10} y={10}/>
		</div>
	);
};