import { AstrologySymbolProps } from '@/types/AstrologyTypes';
import React from 'react';

const AstrologySymbol: React.FC<AstrologySymbolProps> = ({
	path,
	strokeColor,
	strokeWidth,
	hasSecondPath,
	secondPath,
}) => (
	<svg>
		<path
			d={path}
			stroke={strokeColor}
			strokeWidth={strokeWidth}
			fill='none'
		/>
		{hasSecondPath
			&& <path
				d={secondPath}
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				fill='none'
			/>}
	</svg>
);

export default AstrologySymbol;
