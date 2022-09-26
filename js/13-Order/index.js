const orderArrayOfArrays = (array) => {
	unifiedArray = [];
	array.forEach((subArray) => {
		unifiedArray.push(...subArray);
	});

	return unifiedArray.sort((a, b) => a - b);
};

const array = [
	[1, 2],
	[5, 6],
	[3, 4],
];

console.log('Unordered:', array);

console.log(orderArrayOfArrays(array));
