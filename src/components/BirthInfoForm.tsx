import { Horoscope } from "circular-natal-horoscope-js";
import React, { FormEvent, SyntheticEvent, useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import GooglePlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { getHoroscope } from "../utils/Horoscope";
import "../lib/astrochart";

interface Props {
    handleDateChange?: void;
    onFormSubmit?: void;
    setCityValue?: void;
    chartHoroscope?: void;
}

interface State {
    birthDate: Date;
    latitude: number;
    longitude: number;
}

export class BirthInfoForm extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            birthDate: new Date(),
            latitude: 0,
            longitude: 0,
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.setCityValue = this.setCityValue.bind(this);
        this.chartHoroscope = this.chartHoroscope.bind(this);
    }
    
    handleDateChange(date: Date, event: SyntheticEvent) {
        console.log(date);
        this.setState({birthDate: date});
    }

    setCityValue(result: any) {
        console.log(result.value);
        geocodeByAddress(result.value.description)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng}) =>
                this.setState({
                    latitude: lat,
                    longitude: lng,
                })
            )
            .catch(error => console.error(error));
    }

    chartHoroscope(horoscope: Horoscope) {
        const chartPlanets = Object.assign(
            {},
            ...horoscope.CelestialBodies.all.map((body: any) => {
                const key = body.key.charAt(0).toUpperCase() + body.key.slice(1);
                return { [key]: [body.ChartPosition.Ecliptic.DecimalDegrees] };
            })    
        );    
        const asc = horoscope.Ascendant.ChartPosition.Horizon.DecimalDegrees;
        const desc = (asc + 180) % 360;
        const mc = horoscope.Midheaven.ChartPosition.Horizon.DecimalDegrees;
        const ic = (horoscope.Midheaven.ChartPosition.Horizon.DecimalDegrees + 180) % 360;
        const chartCusps = horoscope.Houses.map((cusp: any) => {
            return cusp.ChartPosition.StartPosition.Ecliptic.DecimalDegrees;
        });
        const chart = new astrology.Chart("chart", 800, 800);
        const data = {
            planets: chartPlanets,
            cusps: chartCusps,
        };
        const radix = chart.radix(data);    
        radix.addPointsOfInterest({ As: [asc], Mc: [mc], Ds: [desc], Ic: [ic] });
        radix.aspects();
    }

    onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const horoscope = getHoroscope(
            this.state.birthDate, 
            this.state.latitude, 
            this.state.longitude,
        );
        this.chartHoroscope(horoscope);
    }

    render() {
        return (
            <form onSubmit={ this.onFormSubmit }>
                <label>
                    Select your birthdate and time:
                    <DatePicker
                        selected={this.state.birthDate}
                        onChange={this.handleDateChange}
                        showTimeInput
                    />
                </label>
                <label>
                    Select your birthplace:
                    <div>
                        <GooglePlacesAutoComplete
                            selectProps={{
                                onChange: this.setCityValue
                            }}
                            apiKey="AIzaSyCZynalACGwF2944cAHp0oqCT7lxeEMGKs"
                        />
                    </div>
                </label>
                <div>
                    <input 
                        type="submit" 
                        value="Submit" />
                </div>
                <div id="chart" />
            </form>
        );
    }
}