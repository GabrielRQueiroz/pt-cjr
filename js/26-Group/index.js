import stock from '../18,25-stock.js';

const group = (array, fn) => {
	return array.reduce((acc, item) => {
		const key = fn(item);
		if (!acc[key]) acc[key] = [];
		acc[key].push(item);
		return acc;
	}, {});
};

console.log(group(stock, ({ category }) => category));
