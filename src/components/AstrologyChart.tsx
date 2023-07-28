import { Horoscope } from "circular-natal-horoscope-js";
import AscendantSymbol from "./AstrologySymbols/AxisSymbols/AscendantSymbol";
import DescendantSymbol from "./AstrologySymbols/AxisSymbols/DescendantSymbol";
import ImmumCoeliSymbol from "./AstrologySymbols/AxisSymbols/ImmumCoeliSymbol";
import MediumCoeliSymbol from "./AstrologySymbols/AxisSymbols/MediumCoeliSymbol";
interface AstrologyChartProps {
	horoscope: Horoscope | null;
}

export default function AstrologyChart(props: AstrologyChartProps) {
	return (
		<div>
			<DescendantSymbol x={10} y={10}/>
			<AscendantSymbol x={20} y={20}/>
			<ImmumCoeliSymbol x={30} y={30}/>
			<MediumCoeliSymbol x={40} y={40}/>
		</div>
	);
};