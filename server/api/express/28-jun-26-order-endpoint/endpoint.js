const endpoint = (req, res) => {
	const orderId = req.params.id;
	const include = req.query.include ? req.query.include.split(',') : [];

	const mockOrder = {
		id: orderId,
		status: "shipped",
		total: 89.99,
	};

	const includedData = include.reduce((acc, key) => {
		const resolver = orderResolver[key.trim()];
		if (!resolver) {
			return acc;
		}

		return { ...acc, ...resolver() };
	}, {});

	return res.json({
		...mockOrder,
		...includedData,
	});

}

export default endpoint;