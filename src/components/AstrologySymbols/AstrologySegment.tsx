import React from "react";

interface AstrologySegmentProps {
	x: number;
	y: number;
	radius: number;
	angleFrom: number;
	angleTo: number;
	thickness: number;
	lFlag?: number;
	sFlag?: number;
};

class AstrologySegment extends React.Component<AstrologySegmentProps, {}> {
	constructor(props: AstrologySegmentProps) {
		super(props);
	}

	convertShiftInDegrees(angle: number): number {
		return ((180 - angle) % 360) * Math.PI / 180;
	}

	render() {
		const {
			x,
			y,
			radius,
			angleFrom,
			angleTo,
			thickness,
			lFlag,
			sFlag,
		} = this.props;
		const angleFromShift = this.convertShiftInDegrees(angleFrom);
		const angleToShift = this.convertShiftInDegrees(angleTo);
		const lFlagSet = lFlag || 0;
		const sFlagSet = sFlag || 0;
		return (
			<path
				d={"M " + (x + thickness * Math.cos(angleFromShift)) + ", " + (y + thickness * Math.sin(angleFromShift)) + " l " + ((radius-thickness) * Math.cos(angleFromShift)) + ", " + ((radius - thickness) * Math.sin(angleFromShift)) + " A " + radius + ", " + radius + ",0 ," +  lFlagSet + ", " + sFlagSet + ", " + ( x + radius * Math.cos(angleToShift) ) + ", " + ( y + radius * Math.sin(angleToShift) ) + " l " + ( (radius - thickness)  * -Math.cos(angleToShift) ) + ", " + ( (radius - thickness) * -Math.sin(angleToShift) ) + " A " + thickness + ", " + thickness + ",0 ," +  lFlagSet + ", " + 1 + ", " + ( x + thickness * Math.cos(angleFromShift) ) + ", " + ( y + thickness * Math.sin(angleFromShift))}
				fill={"none"}
			/>
		);
	}
};

export default AstrologySegment;