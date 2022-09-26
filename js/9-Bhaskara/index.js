const solveSecondDegreeEquation = (a, b, c) => {
	const delta = b ** 2 - 4 * a * c;
	if (delta < 0) {
		console.log(`A função ${a}x^2 + ${b}x + ${c} não possui raízes reais`);
	} else if (delta === 0) {
		const x = -b / (2 * a);
		console.log(x);
	} else {
		const x1 = (-b + delta ** 0.5) / (2 * a);
		const x2 = (-b - delta ** 0.5) / (2 * a);
		console.log(x1, x2);
	}
};

const valueOfA = prompt('Digite o valor de A para a equação do segundo grau');
const valueOfB = prompt('Digite o valor de B para a equação do segundo grau');
const valueOfC = prompt('Digite o valor de C para a equação do segundo grau');

solveSecondDegreeEquation(valueOfA, valueOfB, valueOfC);
