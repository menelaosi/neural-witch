import { AstrologySymbolProps, ColorSigns } from '@/types/AstrologyTypes';
import React from 'react';
import ZodiacSymbol from './ZodiacSymbol';

const AquariusSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 8);
	const y = Math.round(point.y - 2);

	return (
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} 2.8866035,-2.8866035 3.8488047,1.9244023
				m -4.8110059,-0.9622011 3.8488047,1.9244023 2.8866035,-2.8866035 2.8866035,1.9244023
				m -3.84880467,-0.9622011 2.88660347,1.9244023 2.8866035,-2.8866035 1.9244024,1.9244023
				m -2.8866035,-0.9622011 1.9244023,1.9244023 2.8866035,-2.8866035
				m -17.319621,8.6598105 2.8866035,-2.88660348 3.8488047,1.92440238
				m -4.8110059,-0.96220121 3.8488047,1.92440231 2.8866035,-2.88660348 2.8866035,1.92440238
				m -3.84880467,-0.96220121 2.88660347,1.92440231 2.8866035,-2.88660348 1.9244024,1.92440238
				m -2.8866035,-0.96220121 1.9244023,1.92440231 2.8866035,-2.88660348
			`}
			strokeColor={ColorSigns.ColorAquarius}
		/>
	);
};

export default AquariusSymbol;
