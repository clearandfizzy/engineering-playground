import {retry} from "./util.js";

/**
 * Demo function used to test the retry utility.
 */
const customFetch = (): Promise<Function> => {
	return new Promise((resolve, reject) => {
		fetch('http://google.com/')
			.then(res => resolve(() => (res.statusText)))
			.catch(e => reject(e))
	});
};

const main = async () => {
	const getStatusText = await retry(customFetch, {retries: 3, delay: 1000});
	console.log(getStatusText());
};

main().then();