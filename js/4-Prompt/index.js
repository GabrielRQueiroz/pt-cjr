const greetings = (name, lastName) => {
	console.log(`Olá ${name} ${lastName}, eu sou uma função!`);
};

const name = prompt('Qual o seu nome?');
const lastName = prompt('Qual o seu sobrenome?');

greetings(name, lastName);
