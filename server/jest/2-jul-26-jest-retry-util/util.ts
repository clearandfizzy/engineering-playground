export type RetryType = (
	fn: () => Promise<Function>,
	obj: {
		retries: number;
		delay: number // milliseconds;
	}
) => Promise<Function>;

/**
 * Waits for a fixed number of milliseconds before resolving.
 */
const sleep = (ms: number): Promise<void> => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Attempts to run a function up to `retries` times and waits `delay` ms between failed attempts.
 */
export const retry: RetryType = async (fn, obj) => {
	const {retries, delay} = obj;

	for (let i = 1; i < retries; i++) {
		console.log(`Attempt ${i} of ${retries}`);
		try {
			return await fn();
		} catch (e) {
			await sleep(delay);
		}
	}

	return await fn();
}






