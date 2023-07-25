import { Horoscope } from "circular-natal-horoscope-js";
import React from "react";

interface Props {
	selectProps: {
		onChange: (horoscope: Horoscope) => void;
	}
}

interface State {

}

export class AstrologyChart extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return <div/>;
	}
}