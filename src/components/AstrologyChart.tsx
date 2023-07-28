import { Horoscope } from "circular-natal-horoscope-js";
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
			<AriesSymbol x={10} y={10}/>
			<TaurusSymbol x={10} y={10}/>
			<GeminiSymbol x={10} y={10}/>
			<CancerSymbol x={10} y={10}/>
			<LeoSymbol x={10} y={10}/>
			<VirgoSymbol x={10} y={10}/>
			<LibraSymbol x={10} y={10}/>
			<ScorpioSymbol x={10} y={10}/>
			<SagittariusSymbol x={10} y={10}/>
			<CapricornSymbol x={10} y={10}/>
			<AquariusSymbol x={10} y={10}/>
			<PiscesSymbol x={10} y={10}/>
		</div>
	);
};