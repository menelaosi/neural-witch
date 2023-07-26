// Whole sign for the house system
export const HOUSE_SYSTEM = "whole-sign";

// Tropical rather than sidereal, etc.
export const ZODIAC = "tropical";

// Default language is English
export const LANGUAGE = "en";

// Planet collision circle radius for export const SymbolScale = 1
// Scaling changes the collision radius 
export const COLLISION_RADIUS = 10; //px

// BG color
export const COLOR_BACKGROUND = "#fff";

// Size of description text next to the planet: angle, retrograde, dignities, ...
export const POINTS_TEXT_SIZE = 8;

// Font color of signs symbols
export const SIGNS_COLOR = "#000"; 

// Signs strength of lines
export const SIGNS_STROKE = 1.5;

// Chart margin
export const MARGIN = 50; //px

// Chart Padding  
export const PADDING = 18; //px

// Module wrapper element ID
export const ID_CHART = "astrology";

// Radix chart element ID
export const ID_RADIX = "radix";

// Transit chart element ID
export const ID_TRANSIT = "transit";

// Aspects wrapper element ID
export const ID_ASPECTS = "aspects";

// Aspects wrapper element ID
export const ID_POINTS = "planets"; 

// Signs wrapper element ID
export const ID_SIGNS = "signs"; 

// Circles wrapper element ID
export const ID_CIRCLES = "circles";

// Axis wrapper element ID
export const ID_AXIS = "axis";

// Cusps wrapper element ID
export const ID_CUSPS = "cusps";

// Cusps wrapper element ID
export const ID_RULER = "ruler";

// Background wrapper element ID
export const ID_BG = "bg";

// Color of circles in charts
export const CIRCLE_COLOR = "#333";

// Circles strength of lines
export const CIRCLE_STRONG = 2;

// Color of lines in charts
export const LINE_COLOR = "#333";

// radius / INDOOR_CIRCLE_RADIUS_RATIO
export const INDOOR_CIRCLE_RADIUS_RATIO = 2;

// radius - radius/INNER_CIRCLE_RADIUS_RATIO
export const INNER_CIRCLE_RADIUS_RATIO = 8;

// ( radius / export const INNER_CIRCLE_RADIUS_RATIO ) / export const RULER_RADIUS 
export const RULER_RADIUS = 4;

// No fill, only stroke
export const STROKE_ONLY = false;

// 0 - 4
export const ANIMATION_CUSPS_ROTATION_SPEED = 2;

export const DEBUG = false;

export const SYMBOL_AXIS_FONT_COLOR = "#333";
export const SYMBOL_AXIS_STROKE = 1.6;

// Cusps strength of lines
export const CUSPS_STROKE = 1;
export const CUSPS_FONT_COLOR = "#000";

// What to do with this? Save it for now
export const ASPECTS = {
	"conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
	"square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
	"trine":{"degree":120, "orbit":8, "color":"#27AE60"},
	"opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
};

