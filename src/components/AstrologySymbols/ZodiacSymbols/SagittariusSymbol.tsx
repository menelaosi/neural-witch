import { AstrologySymbolProps, ColorSigns } from '@/types/AstrologyTypes';
import React from 'react';
import ZodiacSymbol from './ZodiacSymbol';

const SagittariusSymbol: React.FC<AstrologySymbolProps> = ({ point }) => {
	const x = Math.round(point.x + 7);
	const y = Math.round(point.y - 9);

	return (
		<ZodiacSymbol
			point={{
				x,
				y,
			}}
			path={`
				m ${x}, ${y} -17.11444,17.11444
				m 17.11444,-17.11444 -3.2089575,1.0696525 -6.417915,0
				m 7.4875675,1.0696525 -3.2089575,0 -4.27861,-1.0696525
				m 9.6268725,-1.0696525 -1.0696525,3.2089575 0,6.41791504
				m -1.0696525,-7.48756754 0,3.2089575 1.0696525,4.27861004
				m -8.55722,0 -7.4875675,0
				m 6.417915,1.06965246 -3.2089575,0 -3.2089575,-1.06965246
				m 7.4875675,0 0,7.48756746
				m -1.0696525,-6.417915 0,3.2089575 1.0696525,3.2089575
			`}
			strokeColor={ColorSigns.ColorSagittarius}
		/>
	);
};

export default SagittariusSymbol;
