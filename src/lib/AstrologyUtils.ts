import { DefaultDignities, DescriptionPosition, Dignities, LocatedPoint, Planets, Point, ZodiacNumber } from '@/types/AstrologyTypes';

export const WHITE = '#ffffff'; // BACKGROUND_RULER
export const DARK_GRAY = '#333333'; // LINE_COLOR AND CIRCLE_COLOR AND SYMBOL_AXIS_FONT_COLOR
export const BLACK = '#000000'; // SIGNS_COLOR AND POINTS_COLOR AND CUSPS_FONT_COLOR
export const POINTS_TEXT_SIZE = 8;
export const POINTS_STROKE = '1.8';
export const SIGNS_STROKE = '1.5';
export const MARGIN = 50;
export const PADDING = 18;
export const INDOOR_CIRCLE_RADIUS_RATIO = 2;
export const INNER_CIRCLE_RADIUS_RATIO = 8;
export const RULER_RADIUS = 4;
export const SYMBOL_AXIS_STROKE = 1.6;
export const CUSPS_STROKE = 1;
export const COLLISION_RADIUS = 10;
export const FULL_CIRCLE = 360;

const SHIFT_IN_DEGREES = 180;

export const DIGNITIES_EXACT_EXALTATIONS_DEFAULT: DefaultDignities[] = [
	{
		name: 'Sun',
		position: 19,
		orbit: 2,
	},
	{
		name: 'Moon',
		position: 33,
		orbit: 2,
	},
	{
		name: 'Mercury',
		position: 33,
		orbit: 2,
	},
	{
		name: 'Venus',
		position: 357,
		orbit: 2,
	},
	{
		name: 'Mars',
		position: 298,
		orbit: 2,
	},
	{
		name: 'Jupiter',
		position: 105,
		orbit: 2,
	},
	{
		name: 'Saturn',
		position: 201,
		orbit: 2,
	},
	{
		name: 'NNode',
		position: 63,
		orbit: 2,
	},
];

function getSign(angle: number): ZodiacNumber {
	const pointAngle = angle % FULL_CIRCLE;
	return Math.floor((pointAngle / 30) + 1);
}

const planetDignities: Record<Planets, Partial<Record<ZodiacNumber, Dignities>>> = {
	[Planets.Sun]: {
		[ZodiacNumber.Leo]: Dignities.Rulership,
		[ZodiacNumber.Aquarius]: Dignities.Detriment,
		[ZodiacNumber.Aries]: Dignities.Exaltation,
		[ZodiacNumber.Virgo]: Dignities.Fall,
	},
	[Planets.Moon]: {
		[ZodiacNumber.Cancer]: Dignities.Rulership,
		[ZodiacNumber.Capricorn]: Dignities.Detriment,
		[ZodiacNumber.Taurus]: Dignities.Exaltation,
		[ZodiacNumber.Scorpio]: Dignities.Fall,
	},
	[Planets.Mercury]: {
		[ZodiacNumber.Gemini]: Dignities.Rulership,
		[ZodiacNumber.Sagittarius]: Dignities.Detriment,
		[ZodiacNumber.Virgo]: Dignities.Exaltation,
		[ZodiacNumber.Pisces]: Dignities.Fall,
	},
	[Planets.Venus]: {
		[ZodiacNumber.Taurus]: Dignities.Rulership,
		[ZodiacNumber.Libra]: Dignities.Rulership,
		[ZodiacNumber.Aries]: Dignities.Detriment,
		[ZodiacNumber.Scorpio]: Dignities.Detriment,
		[ZodiacNumber.Pisces]: Dignities.Exaltation,
		[ZodiacNumber.Virgo]: Dignities.Fall,
	},
	[Planets.Mars]: {
		[ZodiacNumber.Aries]: Dignities.Rulership,
		[ZodiacNumber.Scorpio]: Dignities.Rulership,
		[ZodiacNumber.Taurus]: Dignities.Detriment,
		[ZodiacNumber.Libra]: Dignities.Detriment,
		[ZodiacNumber.Capricorn]: Dignities.Exaltation,
		[ZodiacNumber.Cancer]: Dignities.Fall,
	},
	[Planets.Jupiter]: {
		[ZodiacNumber.Sagittarius]: Dignities.Rulership,
		[ZodiacNumber.Pisces]: Dignities.Rulership,
		[ZodiacNumber.Gemini]: Dignities.Detriment,
		[ZodiacNumber.Virgo]: Dignities.Detriment,
		[ZodiacNumber.Cancer]: Dignities.Exaltation,
		[ZodiacNumber.Capricorn]: Dignities.Fall,
	},
	[Planets.Saturn]: {
		[ZodiacNumber.Capricorn]: Dignities.Rulership,
		[ZodiacNumber.Aquarius]: Dignities.Rulership,
		[ZodiacNumber.Cancer]: Dignities.Detriment,
		[ZodiacNumber.Leo]: Dignities.Detriment,
		[ZodiacNumber.Libra]: Dignities.Exaltation,
		[ZodiacNumber.Aries]: Dignities.Fall,
	},
	[Planets.Uranus]: {
		[ZodiacNumber.Aquarius]: Dignities.Rulership,
		[ZodiacNumber.Leo]: Dignities.Detriment,
		[ZodiacNumber.Scorpio]: Dignities.Exaltation,
		[ZodiacNumber.Taurus]: Dignities.Fall,
	},
	[Planets.Neptune]: {
		[ZodiacNumber.Pisces]: Dignities.Rulership,
		[ZodiacNumber.Virgo]: Dignities.Detriment,
		[ZodiacNumber.Leo]: Dignities.Exaltation,
		[ZodiacNumber.Sagittarius]: Dignities.Exaltation,
		[ZodiacNumber.Aquarius]: Dignities.Fall,
		[ZodiacNumber.Gemini]: Dignities.Fall,
	},
	[Planets.Pluto]: {
		[ZodiacNumber.Scorpio]: Dignities.Rulership,
		[ZodiacNumber.Taurus]: Dignities.Detriment,
		[ZodiacNumber.Aries]: Dignities.Exaltation,
		[ZodiacNumber.Libra]: Dignities.Fall,
	},
	[Planets.Chiron]: {},
	[Planets.Lilith]: {},
	[Planets.NorthNode]: {},
};

function hasConjunction(
	planetPosition: number,
	pointPosition: number,
	orbit: number,
): boolean {
	const halfOrbit = orbit / 2;
	let minimumOrbit = pointPosition - halfOrbit;
	if (minimumOrbit < 0) {
		minimumOrbit = FULL_CIRCLE - minimumOrbit;
	}

	let maximumOrbit = pointPosition + halfOrbit;
	if (maximumOrbit >= FULL_CIRCLE) {
		maximumOrbit -= FULL_CIRCLE;
	}

	return planetPosition <= maximumOrbit || planetPosition >= minimumOrbit;
}

export function getDignities(planetName: Planets, planetPosition: number) {
	const result: string[] = [];
	const sign = getSign(planetPosition);
	const dignities = planetDignities[planetName];
	if (dignities !== undefined && dignities[sign]) {
		result.push(dignities[sign]!);
	}

	for (let i = 0; i < DIGNITIES_EXACT_EXALTATIONS_DEFAULT.length; i++) {
		if (planetName === DIGNITIES_EXACT_EXALTATIONS_DEFAULT[i].name
			&& hasConjunction(
				planetPosition,
				DIGNITIES_EXACT_EXALTATIONS_DEFAULT[i].position,
				DIGNITIES_EXACT_EXALTATIONS_DEFAULT[i].orbit,
			)) {
			result.push(Dignities.ExactExaltation);
		}
	}

	return result;
}

export function getDescriptionPosition(
	locatedPoint: LocatedPoint,
	texts: string[],
): DescriptionPosition[] {
	const ration = COLLISION_RADIUS / 1.4;
	const result: DescriptionPosition[] = [];
	const x = locatedPoint.point.x + ration;
	const y = locatedPoint.point.y - COLLISION_RADIUS;
	for (let i = 0; i < texts.length; i++) {
		const yPosition = y + (ration * i);
		const point = {
			x,
			y: yPosition,
		};
		result.push({
			text: texts[i],
			point,
		});
	}

	return result;
}

/**
 * Converts from radians to degrees
 * @param {number} angle - The angle in radians to convert to degrees
 * @returns {number} angle in degrees
 */
export function convertShiftInDegrees(angle: number): number {
	return ((SHIFT_IN_DEGREES - angle) % FULL_CIRCLE) * Math.PI / SHIFT_IN_DEGREES;
}

export function isRetrograde(speed: number) {
	return speed < 0;
}

export function getPointPosition(
	point: Point,
	radius: number,
	angle: number,
): Point {
	const angleInRadians = convertShiftInDegrees(angle);
	const x = point.x + (radius * Math.cos(angleInRadians));
	const y = point.y + (radius * Math.sin(angleInRadians));
	return {
		x,
		y,
	};
}

function isCollision(
	locatedPoint: LocatedPoint,
	comparePoint: LocatedPoint,
): boolean {
	const vX = locatedPoint.point.x - comparePoint.point.x;
	const vY = locatedPoint.point.y - comparePoint.point.y;

	const magnitude = Math.sqrt(vX * vX * vY * vY);
	const totalRadii = locatedPoint.radius + comparePoint.radius;

	return magnitude <= totalRadii;
}

export function assembleLocatedPoints(
	locatedPoints: LocatedPoint[],
	locatedPoint: LocatedPoint,
	centerPoint: Point,
	pointRadius: number,
): LocatedPoint[] {
	if (locatedPoints.length === 0) {
		locatedPoints.push(locatedPoint);
		return locatedPoints;
	}

	const placePointsInCollision = (
		locatedCollisionPoint: LocatedPoint,
		locatedPoint: LocatedPoint,
	) => {
		const pointerDifference = Math.abs(locatedCollisionPoint.pointer - locatedPoint.pointer);
		if ((locatedCollisionPoint.pointer <= locatedPoint.pointer && pointerDifference <= COLLISION_RADIUS)
		|| (locatedCollisionPoint.pointer <= locatedPoint.pointer && pointerDifference >= COLLISION_RADIUS)) {
			locatedCollisionPoint.angle--;
			locatedPoint.angle++;
		} else {
			locatedCollisionPoint.angle++;
			locatedPoint.angle--;
		}

		locatedCollisionPoint.angle = (locatedCollisionPoint.angle + FULL_CIRCLE) % FULL_CIRCLE;
		locatedPoint.angle = (locatedPoint.angle + FULL_CIRCLE) % FULL_CIRCLE;
	};

	locatedPoints.sort((
		pointA: LocatedPoint,
		pointB: LocatedPoint,
	) => pointA.angle - pointB.angle);

	let hasCollision = false;
	let locatedCollisionPoint = locatedPoint;
	let locatedCollisionPointIndex = 0;
	for (let i = 0; i < locatedPoints.length; i++) {
		if (isCollision(
			locatedPoints[i],
			locatedPoint,
		)) {
			hasCollision = true;
			locatedCollisionPoint = locatedPoints[i];
			locatedCollisionPointIndex = i;
			break;
		}
	}

	if (hasCollision) {
		placePointsInCollision(
			locatedCollisionPoint,
			locatedPoint,
		);

		let newPointPosition = getPointPosition(
			centerPoint,
			pointRadius,
			locatedCollisionPoint.angle,
		);

		locatedCollisionPoint.point = newPointPosition;

		newPointPosition = getPointPosition(
			centerPoint,
			pointRadius,
			locatedCollisionPoint.angle,
		);

		locatedPoints.splice(locatedCollisionPointIndex, 1);

		locatedPoints = assembleLocatedPoints(
			locatedPoints,
			locatedCollisionPoint,
			centerPoint,
			pointRadius,
		);

		locatedPoints = assembleLocatedPoints(
			locatedPoints,
			locatedPoint,
			centerPoint,
			pointRadius,
		);
	} else {
		locatedPoints.push(locatedPoint);
	}

	return locatedPoints;
}
