import { Horoscope, Origin } from 'circular-natal-horoscope-js';
import dynamic from 'next/dynamic';
import React, { FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { Option } from 'react-google-places-autocomplete/build/types';
import { SingleValue } from 'react-select';
import AstrologyChart from './AstrologyChart';

/**
 * Returns the origin point for the Horoscope
 * @param {Date} date - Date for the horoscope
 * @param {number} latitude - Number representing the latitude coordinates
 * @param {number} longitutude - Number representing the longitude coordinates
 * @returns {Origin} Returns an origin from the information provided
 */
function createOrigin(
	date: Date,
	latitude: number,
	longitutude: number,
): Origin {
	return new Origin({
		year: date.getFullYear(),
		month: date.getMonth(),
		date: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		latitude,
		longitude: longitutude,
	});
}

/**
 * Gets a horoscope to map
 * @param {Date} date - Date for the chart
 * @param {number} latitude - Number representing the latitude coordinates
 * @param {number} longitutude - Number representing the longitude coordinates
 * @returns {Horoscope} - The horoscope using circular-natal-horoscope
 */
function getHoroscope(
	date: Date,
	latitude: number,
	longitude: number,
): Horoscope {
	return new Horoscope({
		origin: createOrigin(
			date,
			latitude,
			longitude,
		),
		houseSystem: 'whole-sign',
		zodiac: 'tropical',
		aspectTypes: ['major', 'minor'],
		customOrbs: {
			conjunction: 8,
			opposition: 8,
			trine: 8,
			square: 7,
			sextile: 6,
			quincunx: 5,
			quintile: 1,
			septile: 1,
			'semi-square': 1,
			'semi-sextile': 1,
		},
		language: 'en',
	});
}

const GooglePlacesAutoComplete = dynamic(
	() => import('react-google-places-autocomplete'),
	{ ssr: false },
);

const BirthInfoForm: React.FC = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [place, setPlace] = useState<Option | null>(null);
	const [horoscope, setHoroscope] = useState<Horoscope|undefined>(undefined);

	const setAddress = (selectedPlace: SingleValue<Option>) => {
		setPlace(selectedPlace);
	};

	const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (place) {
			try {
				const results = await geocodeByAddress(place.label);
				const latLng = await getLatLng(results[0]);
				const horoscope = await getHoroscope(startDate, latLng.lat, latLng.lng);
				setHoroscope(horoscope);
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<form onSubmit={onFormSubmit}>
			<label>
				Select your birthdate and time:
				<DatePicker
					showTimeInput
					selected={startDate}
					onChange={(date: Date) => setStartDate(date)}
				/>
			</label>
			<label>
				Select your birthplace:
				<div>
					<GooglePlacesAutoComplete
						selectProps={{
							value: place,
							onChange: setAddress,
						}}
						apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
					/>
				</div>
			</label>
			<button type='submit'>Submit</button>
			{horoscope && <AstrologyChart horoscope={horoscope} />}
		</form>
	);
};

export default BirthInfoForm;
