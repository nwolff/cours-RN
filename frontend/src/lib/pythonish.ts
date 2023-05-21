// https://gist.github.com/renaudtertrais/25fc5a2e64fe5d0e86894094c6989e10
export const zip = (...arrays) => {
	const minLen = Math.min(...arrays.map((arr) => arr.length));
	const [firstArr, ...restArrs] = arrays;
	return firstArr.slice(0, minLen).map((val, i) => [val, ...restArrs.map((arr) => arr[i])]);
};

// https://aaronmoat.com/implementing-pythons-defaultdict-in-javascript/
export class DefaultMap<K, V> extends Map<K, V> {
	constructor(
		private getDefaultValue: (key: K) => V,
		entries?: readonly (readonly [K, V])[] | null
	) {
		super(entries);
	}

	get = (key: K): V => {
		if (!this.has(key)) {
			this.set(key, this.getDefaultValue(key));
		}

		return super.get(key)!;
	};
}

// https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately/54024653#54024653
export function hsv2rgb(h: number, s: number, v: number) {
	const i = Math.floor(h * 6);
	const f = h * 6 - i;
	const p = v * (1 - s);
	const q = v * (1 - f * s);
	const t = v * (1 - (1 - f) * s);
	var r: number;
	var g: number;
	var b: number;
	switch (i % 6) {
		case 0:
			(r = v), (g = t), (b = p);
			break;
		case 1:
			(r = q), (g = v), (b = p);
			break;
		case 2:
			(r = p), (g = v), (b = t);
			break;
		case 3:
			(r = p), (g = q), (b = v);
			break;
		case 4:
			(r = t), (g = p), (b = v);
			break;
		case 5:
			(r = v), (g = p), (b = q);
			break;
	}
	return [Math.round(r! * 255), Math.round(g! * 255), Math.round(b! * 255)];
}
