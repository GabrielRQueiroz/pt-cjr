import stock from '../18,25-stock.js';

let foodName = prompt('Insira o nome do alimento que deseja encontrar');

let food = stock.find(({ name }) => name === foodName.toLowerCase());

if (!food || !food.available) alert(`${foodName} is not available`);
else if (food) alert(`R$ ${food.price.toFixed(2).replace('.', ',')}`);
