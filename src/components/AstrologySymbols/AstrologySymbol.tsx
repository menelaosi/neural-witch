import { AstrologySymbolProps } from "@/types/AstrologyTypes";

export default function AstrologySymbol({
	path,
	strokeColor,
	strokeWidth,
	hasSecondPath,
	secondPath,
}: AstrologySymbolProps) {
	return (
		<svg>
			<path
				d={path}
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				fill={"none"}
			/>
			{hasSecondPath &&
				<path
					d={secondPath}
					stroke={strokeColor}
					strokeWidth={strokeWidth}
					fill={"none"}
				/>
			}
		</svg>
	);
};