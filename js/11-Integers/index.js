const listIntegers = (start) => {
	if (start < 1) {
		return [];
	} else {
		const list = [];
		for (let i = start; i > 0; i--) {
			list.push(i);
		}
		return list;
	}
};

const start = parseInt(prompt('Insira um valor para começar a contagem'));
console.log(listIntegers(start));
