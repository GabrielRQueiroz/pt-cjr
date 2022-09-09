const leftSection = document.getElementById('left-section');
const rightSection = document.getElementById('right-section');

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

const header = document.getElementById('header');

let going_sound = new Audio('../assets/going_button_click.mp3');
let coming_sound = new Audio('../assets/coming_button_click.mp3');

leftButton.addEventListener('click', () => {
	coming_sound.currentTime = 0;
	coming_sound.volume = 0.5;
	coming_sound.play();
});

rightButton.addEventListener('click', () => {
	going_sound.currentTime = 0;
	going_sound.volume = 0.5;
	going_sound.play();
});

const changeToRight = () => {
	leftSection.style.left = '-100%';
	rightSection.style.left = '0';

	leftButton.classList.remove('hidden');
	rightButton.classList.add('hidden');

	header.style.transform = 'translateX(-50%)';
};

const changeToLeft = () => {
	rightSection.style.left = '100%';
	leftSection.style.left = '0';

	leftButton.classList.add('hidden');
	rightButton.classList.remove('hidden');

	header.style.transform = 'translateX(0)';
};

const callOnWhatsApp = () => window.open('https://web.whatsapp.com/send?phone=5561983025990');

const callOnDiscord = () => window.open('https://discord.com/users/262736936546992130');

const callOnSteam = () => window.open('https://steamcommunity.com/id/coffeey/');

const callOnInstagram = () => window.open('https://www.instagram.com/gabriel.rqueiroz');
