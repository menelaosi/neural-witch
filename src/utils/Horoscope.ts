import { Origin, Horoscope } from "circular-natal-horoscope-js";
import * as HoroscopeSettings from "../settings/HoroscopeSettings";

function createOrigin(date: Date, 
    latitude: number, 
    longitutude: number,
    ): Origin {
        return new Origin({
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            latitude: latitude,
            longitude: longitutude,
        });
}

export function getHoroscope(date: Date, 
    latitude: number,
    longitude: number,
    ): Horoscope {
        return new Horoscope({
            origin: createOrigin(
                date,
                latitude,
                longitude,
            ),
            houseSystem: HoroscopeSettings.HOUSE_SYSTEM,
            zodiac: HoroscopeSettings.ZODIAC,
            aspectPoints: HoroscopeSettings.ASPECTS,
            aspectWithPoints: HoroscopeSettings.ASPECTS,
            aspectTypes: HoroscopeSettings.ASPECT_TYPES,
            customOrbs: {
                conjunction: 8,
                opposition: 8,
                trine: 8,
                square: 7,
                sextile: 6,
                quintile: 1,
                septile: 1,
                "semi-square": 1,
                "semi-sextile": 1,
            },
            language: HoroscopeSettings.LANGUAGE,
        });
    }