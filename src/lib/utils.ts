export function range(from: number, to: number): number[] {
	return Array.from({ length: to - from }, (_, i) => i + from);
}

export function zip2<A, B>(as: A[], bs: B[]): [A, B][] {
	const minLen = Math.min(as.length, bs.length);
	return as.slice(0, minLen).map((a, i) => [a, bs[i]]);
}

export function zip3<A, B, C>(as: A[], bs: B[], cs: C[]): [A, B, C][] {
	const minLen = Math.min(as.length, bs.length, cs.length);
	return as.slice(0, minLen).map((a, i) => [a, bs[i], cs[i]]);
}

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
