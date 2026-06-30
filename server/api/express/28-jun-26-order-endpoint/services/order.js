const orderResolver = {
	customer: () => ({
		customer_details: { name: "John Doe" },
	}),
	delivery: () => ({
		delivery_progress: 1,
		estimated_delivery_date: "01-01-2001",
	}),
	items: () => ({
		item_list: {},
		discount_information: {},
	}),
};

export default orderResolver;