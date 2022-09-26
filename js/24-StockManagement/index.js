import stock from '../18,25-stock.js';

const foodName = prompt('Insira o nome do alimento que deseja gerenciar');
const foodAmount = parseInt(prompt('Insira a quantidade do alimento'));

const modifyStock = (name, amount) => {
	const food = stock.find(({ name: foodName }) => foodName === name);

	if (!food) return alert('Alimento não encontrado');

	if (amount > 0) {
		food.quantity += amount;
		food.available = true;
		alert(`Estoque de ${food.name} atualizado para ${food.quantity}`);
	} else if (amount < 0) {
		if (food.quantity + amount < 0) return alert('Quantidade insuficiente');
		else if (amount === -food.quantity) {
			food.available = false;
			food.quantity = 0;
			alert(`Estoque de ${food.name} atualizado para 0`);
		} else {
			food.quantity += amount;
			alert(`Estoque de ${food.name} atualizado para ${food.quantity}`);
		}
	}

	return stock;
};

console.log(modifyStock(foodName, foodAmount));
