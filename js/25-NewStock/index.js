import stock from '../18,25-stock.js';

const newStock = JSON.parse(JSON.stringify(stock));
const foodName = prompt('Insira o nome do alimento que deseja gerenciar');
const foodAmount = parseInt(prompt('Insira a quantidade do alimento'));

const modifyStock = (name, amount) => {
	const food = newStock.find(({ name: foodName }) => foodName === name);

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

	return newStock;
};

console.log(modifyStock(foodName, foodAmount));
console.log(stock);
