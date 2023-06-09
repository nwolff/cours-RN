// https://gist.github.com/renaudtertrais/25fc5a2e64fe5d0e86894094c6989e10
export const zip = (...arrays: any[]) => {
	const minLen = Math.min(...arrays.map((arr) => arr.length));
	const [firstArr, ...restArrs] = arrays;
	return firstArr
		.slice(0, minLen)
		.map((val: any, i: any) => [val, ...restArrs.map((arr) => arr[i])]);
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
