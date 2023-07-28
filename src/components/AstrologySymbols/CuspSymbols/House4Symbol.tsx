import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import CuspSymbol from "./CuspSymbol";

export default function House4Symbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x + 1);
	const yPosition = Math.round(y - 4);

	return (
		<CuspSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition} -2.28678383,7.7750651 0.91471356,0
				m 2.74414057,-9.6044922 -0.9147135,1.8294271 -2.28678386,7.7750651
				m 3.20149736,-9.6044922 -2.74414057,9.6044922
				m 2.74414057,-9.6044922 -7.3177083,6.8603516 7.3177083,0
			`}
		/>
	);
};