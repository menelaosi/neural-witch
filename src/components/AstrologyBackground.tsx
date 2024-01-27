import { WHITE } from '@/lib/AstrologyUtils';
import { Point } from '@/types/AstrologyTypes';
import React from 'react';
import AstrologySegment from './AstrologySymbols/AstrologySegment';

interface AstrologyBackgroundProps {
	readonly id: string;
	readonly point: Point;
	readonly radius: number;
	readonly thickness: number;
}

const AstrologyBackground: React.FC<AstrologyBackgroundProps> = ({
	id,
	point,
	radius,
	thickness,
}) => {
	return (
		<g id={id}>
			<AstrologySegment
				point={point}
				radius={radius}
				angleFrom={0}
				angleTo={359.99}
				thickness={thickness}
				lFlag={1}
				fill={WHITE}
			/>
		</g>
	);
};

export default AstrologyBackground;