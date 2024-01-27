import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';
import styles from "./astrologySymbol.css";

const AstrologySymbol: React.FC<AstrologySymbolProps> = ({
	path,
	strokeColor,
	strokeWidth,
	hasSecondPath,
	secondPath,
}) => (
	<svg>
		<path
			className={styles.astrologySymbol}
			d={path}
			stroke={strokeColor}
			strokeWidth={strokeWidth}
		/>
		{hasSecondPath
			&& <path
				className={styles.astrologySymbol}
				d={secondPath}
				stroke={strokeColor}
				strokeWidth={strokeWidth}
			/>}
	</svg>
);

export default AstrologySymbol;
