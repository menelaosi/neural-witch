import { AstrologySymbolProps, ColorSigns } from '@/types/AstrologyTypes';
import React from 'react';
import ZodiacSymbol from './ZodiacSymbol';

const GeminiSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x - 6);
	const y = Math.round(point.y - 6);

	return (
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x},${y} 0,11.546414
				m 0.9622011,-10.5842129 0,9.6220117
				m 7.6976097,-9.6220117 0,9.6220117
				m 0.962201,-10.5842128 0,11.546414
				m -13.4708165,-14.4330172 1.9244023,1.924402 1.9244024,0.9622012 2.8866038,0.9622011 3.848804,0 2.886604,-0.9622011 1.924402,-0.9622012 1.924403,-1.924402
				m -17.3196215,17.3196207 1.9244023,-1.9244024 1.9244024,-0.9622011 2.8866038,-0.9622012 3.848804,0 2.886604,0.9622012 1.924402,0.9622011 1.924403,1.9244024
			`}
			strokeColor={ColorSigns.ColorGemini}
		/>
	);
};

export default GeminiSymbol;
