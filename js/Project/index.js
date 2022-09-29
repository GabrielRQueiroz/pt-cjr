// id, checked, label
let items = JSON.parse(localStorage.getItem('items')) || [];

const updateData = async () => {
	items = await fetch('https://todos-cjr.herokuapp.com/todos', {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': null,
		},
	}).then((res) =>
		res.json().then((data) => {
			data.sort((a, b) => a.id - b.id);
			return data;
		})
	);
};

const handleInputChange = () => {
	const item = document.querySelector('input').value;
	if (item) {
		itemAddButton.disabled = false;
	} else {
		itemAddButton.disabled = true;
	}
};

const addItem = async (e) => {
	e.preventDefault();

	const item = {
		id: Date.now(),
		checked: false,
		label: itemInput.value,
	};

	items.push(item);

	itemInput.value = '';
	itemAddButton.disabled = true;

	await fetch('https://todos-cjr.herokuapp.com/todos', {
		method: 'POST',
		headers: {
			'Access-Control-Allow-Origin': null,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	});

	localStorage.setItem('items', JSON.stringify(items));

	render();
};

const removeItem = async (id) => {
	const item = items[id];
	items.splice(id, 1);

	await fetch(`https://todos-cjr.herokuapp.com/todos/${item.id}`, {
		method: 'DELETE',
		headers: {
			'Access-Control-Allow-Origin': null,
		},
	});

	localStorage.setItem('items', JSON.stringify(items));

	render();
};

const checkItem = async (e) => {
	const item = items.find((item) => item.id === parseInt(e.target.parentNode.id));
	item.checked = !item.checked;

	await fetch(`https://todos-cjr.herokuapp.com/todos/${item.id}`, {
		method: 'PUT',
		headers: {
			'Access-Control-Allow-Origin': null,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	});

	localStorage.setItem('items', JSON.stringify(items));

	render();
};

const render = () => {
	itemsList.innerText = '';

	items.forEach(({ id, checked, label }, index) => {
		const itemElement = document.createElement('li');
		const checkBox = document.createElement('input');
		const removeButton = document.createElement('button');

		checkBox.type = 'checkbox';
		checkBox.checked = checked;
		checkBox.addEventListener('change', checkItem);

		const itemText = document.createElement(checked ? 'del' : 'span');
		itemText.innerText = label;

		removeButton.innerText = 'X';
		removeButton.onclick = () => removeItem(index);

		itemElement.appendChild(checkBox);
		itemElement.appendChild(itemText);
		itemElement.appendChild(removeButton);
		itemElement.id = id;

		itemsList.appendChild(itemElement);
	});

	root.appendChild(itemsList);
};

const root = document.getElementById('root');
const itemForm = document.createElement('form');
const itemInput = document.createElement('input');
const itemAddButton = document.createElement('button');
const itemsList = document.createElement('ul');

itemAddButton.innerText = 'Add item';
itemAddButton.disabled = true;

itemInput.oninput = handleInputChange;

itemForm.onsubmit = addItem;
itemForm.appendChild(itemInput);
itemForm.appendChild(itemAddButton);

itemsList.style.listStyle = 'none';

root.appendChild(itemForm);
root.appendChild(itemsList);

updateData();
render();
