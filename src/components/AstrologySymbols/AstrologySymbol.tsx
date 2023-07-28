import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";

export default function AstrologySymbol(props: AstrologySymbolProps) {
	return (
		<svg>
			<path
				d={props.path}
				stroke={props.strokeColor}
				strokeWidth={props.strokeWidth}
				fill={"none"}
			/>
			{props.hasSecondPath &&
				<path
					d={props.secondPath}
					stroke={props.strokeColor}
					strokeWidth={props.strokeWidth}
					fill={"none"}
				/>
			}
		</svg>
	);
};