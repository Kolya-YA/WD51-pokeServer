const info = (...params) => {
	// biome-ignore lint/suspicious/noConsoleLog: <explanation>
	console.log(...params);
};

const error = (...params) => {
	console.error(...params);
};

export default { info, error };