const average = (...numbers) => {
	let sum = 0;
	numbers.forEach((number) => {
		sum += number;
	});
	return Math.round(sum / numbers.length);
};

const numbers = prompt('Insira os números separados por vírgula');
const numbersArray = numbers.split(',').map((number) => parseInt(number));
console.log(average(...numbersArray));
