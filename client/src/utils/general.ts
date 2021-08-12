export class General {
	static mod(n: number, op: number) {
		return ((n % op) + op) % op;
	}

	static doCallback = (callback: Function, args: any[]): any => {
		return callback.apply(callback, args);
	};
}
