// id, checked, label
let items = JSON.parse(localStorage.getItem('items')) || [];
let loading = true;

const updateData = async () => {
	root.appendChild(loadingScreen);

	items = await fetch('https://todos-cjr.herokuapp.com/todos', {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': null,
		},
	})
		.then((res) =>
			res.json().then((data) => {
				data.sort((a, b) => a.id - b.id);
				localStorage.setItem('items', JSON.stringify(data));
				return data;
			})
		)
		.finally(() => root.removeChild(loadingScreen));
};

const itemPost = async (item) => {
	await fetch('https://todos-cjr.herokuapp.com/todos', {
		method: 'POST',
		headers: {
			'Access-Control-Allow-Origin': null,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	});
};

const itemDelete = async (item) => {
	await fetch(`https://todos-cjr.herokuapp.com/todos/${item.id}`, {
		method: 'DELETE',
		headers: {
			'Access-Control-Allow-Origin': null,
		},
	});
};

const itemPut = async (item) => {
	await fetch(`https://todos-cjr.herokuapp.com/todos/${item.id}`, {
		method: 'PUT',
		headers: {
			'Access-Control-Allow-Origin': null,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	});
};

const handleInputChange = () => {
	const item = itemInput.value;
	if (item) {
		itemAddButton.disabled = false;
	} else {
		itemAddButton.disabled = true;
	}
};

const addItem = (e) => {
	e.preventDefault();

	const item = {
		id: Date.now(),
		checked: false,
		label: itemInput.value,
	};

	items.push(item);

	itemInput.value = '';
	itemAddButton.disabled = true;

	localStorage.setItem('items', JSON.stringify(items));

	itemPost(item);
	render();
};

const removeItem = (id) => {
	const item = items[id];
	items.splice(id, 1);

	localStorage.setItem('items', JSON.stringify(items));

	itemDelete(item);
	render();
};

const checkItem = (e) => {
	const item = items.find((item) => item.id === parseInt(e.target.parentNode.id));
	item.checked = !item.checked;

	localStorage.setItem('items', JSON.stringify(items));

	itemPut(item);
	render();
};

const render = (updateOnRender = false) => {
	itemsList.innerText = '';

	items.forEach(({ id, checked, label }, index) => {
		const itemElement = document.createElement('li');
		const checkBox = document.createElement('input');
		const removeButton = document.createElement('button');

		checkBox.type = 'checkbox';
		checkBox.checked = checked;
		checkBox.style.marginRight = '1em';
		checkBox.addEventListener('change', checkItem);

		const itemText = document.createElement(checked ? 'del' : 'span');
		itemText.innerText = label;

		removeButton.innerText = 'X';
		removeButton.style.marginLeft = '2em';
		removeButton.addEventListener('click', () => removeItem(index));

		itemElement.appendChild(checkBox);
		itemElement.appendChild(itemText);
		itemElement.appendChild(removeButton);
		itemElement.id = id;

		itemsList.appendChild(itemElement);
	});

	updateOnRender && updateData();
	root.appendChild(itemsList);
};

const root = document.getElementById('root');
const itemForm = document.createElement('form');
const itemInput = document.createElement('input');
const itemAddButton = document.createElement('button');
const itemsList = document.createElement('ul');
const loadingScreen = document.createElement('div');

itemAddButton.innerText = 'Add item';
itemAddButton.disabled = true;

itemInput.type = 'text';
itemInput.placeholder = 'Walk the dog, pass all unit tests...';
itemInput.style.width = '200px';
itemInput.addEventListener('input', handleInputChange);

itemForm.addEventListener('submit', addItem);
itemForm.appendChild(itemInput);
itemForm.appendChild(itemAddButton);

itemsList.style.listStyle = 'none';
itemsList.style.textTransform = 'capitalize';

loadingScreen.innerText = 'We are updating your list 😉';
loadingScreen.style.fontSize = '2em';
loadingScreen.style.textAlign = 'center';
loadingScreen.style.height = '100vh';
loadingScreen.style.width = '100vw';
loadingScreen.style.display = 'flex';
loadingScreen.style.alignItems = 'center';
loadingScreen.style.justifyContent = 'center';
loadingScreen.style.position = 'absolute';
loadingScreen.style.top = 0;
loadingScreen.style.left = 0;
loadingScreen.style.zIndex = 999;
loadingScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
loadingScreen.style.color = 'white';

root.appendChild(itemForm);
root.appendChild(itemsList);

updateData();
render();
