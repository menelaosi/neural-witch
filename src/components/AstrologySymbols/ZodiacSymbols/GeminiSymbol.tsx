import ZodiacSymbol from "./ZodiacSymbol";

interface GeminiProps {
	x: number;
	y: number;
	path: string;
};

class GeminiSymbol extends ZodiacSymbol {
	constructor(props: GeminiProps) {
		super(props);
		const x = Math.round(props.x - 6);
		const y = Math.round(props.y - 6);
		
        this.state = {
            x: x,
            y: y,
            path: "m " + x + ", " + y + " 0,11.546414 m 0.9622011,-10.5842129 0,9.6220117 m 7.6976097,-9.6220117 0,9.6220117 m 0.962201,-10.5842128 0,11.546414 m -13.4708165,-14.4330172 1.9244023,1.924402 1.9244024,0.9622012 2.8866038,0.9622011 3.848804,0 2.886604,-0.9622011 1.924402,-0.9622012 1.924403,-1.924402 m -17.3196215,17.3196207 1.9244023,-1.9244024 1.9244024,-0.9622011 2.8866038,-0.9622012 3.848804,0 2.886604,0.9622012 1.924402,0.9622011 1.924403,1.9244024",
        };
    }
};

export default GeminiSymbol;