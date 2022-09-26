const getDateDiference = (day, month, year) => {
	const date = new Date();
	const date2 = new Date(year, month - 1, day);
	const diff = Math.abs(date.getTime() - date2.getTime());
	const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
	return diffDays;
};

const day = parseInt(prompt('Insira um dia'));
const month = parseInt(prompt('Insira um mês'));
const year = parseInt(prompt('Insira um ano'));

console.log(getDateDiference(day, month, year));
