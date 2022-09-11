const leftSection = document.getElementById('left-section');
const rightSection = document.getElementById('right-section');

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

const leftImage = document.getElementById('spinning-cutter');
const catImage = document.getElementById('willow');

const aboutTable = document.getElementById('about-table');

const presentationPlayer = document.getElementById('presentation');

const leftFocusPoint = document.getElementById('left-focus-point');
const rightFocusPoint = document.getElementById('right-focus-point');

let going_sound = new Audio('../assets/going_button_click.mp3');
let coming_sound = new Audio('../assets/coming_button_click.mp3');
let meowing_sound = new Audio('../assets/meow.mp3');
let presentation = new Audio('../assets/presentation.mp3');

leftButton.addEventListener('click', () => {
	coming_sound.currentTime = 0;
	coming_sound.volume = 0.2;
	coming_sound.play();
});

rightButton.addEventListener('click', () => {
	going_sound.currentTime = 0;
	going_sound.volume = 0.2;
	going_sound.play();
});

catImage.addEventListener('click', () => {
	meowing_sound.currentTime = 0.5;
	meowing_sound.volume = 1;
	meowing_sound.play();
});

catImage.addEventListener('keydown', (e) => {
	if (e.key == 'Enter' || e.key == 'Whitespace') {
		meowing_sound.currentTime = 0.5;
		meowing_sound.volume = 1;
		meowing_sound.play();
	}
});

presentationPlayer.addEventListener('click', () => {
	presentation.volume = 0.5;
	if (presentation.paused) {
		presentation.play();
		presentationPlayer.innerHTML = '<i class="fas fa-pause"></i>';
	} else {
		presentation.pause();
		presentationPlayer.innerHTML = '<i class="fas fa-play"></i>';
	}
});

presentation.addEventListener('ended', () => {
	presentation.currentTime = 0.2;
	presentationPlayer.innerHTML = '<i class="fas fa-play"></i>';
});

const changeToRight = () => {
	leftSection.style.left = '-100%';
	rightSection.style.left = '0';

	leftButton.classList.remove('hidden');
	rightButton.classList.add('hidden');

	leftImage.style.animationPlayState = 'paused';
};

const changeToLeft = () => {
	rightSection.style.left = '100%';
	leftSection.style.left = '0';

	leftButton.classList.add('hidden');
	rightButton.classList.remove('hidden');

	leftImage.style.animationPlayState = 'running';
};

const callOnWhatsApp = () => window.open('https://web.whatsapp.com/send?phone=5561983025990');

const callOnDiscord = () => window.open('https://discord.com/users/262736936546992130');

const callOnSteam = () => window.open('https://steamcommunity.com/id/coffeey/');

const callOnInstagram = () => window.open('https://www.instagram.com/gabriel.rqueiroz');

const goToGithub = () => window.open('https://www.github.com/gabrielrqueiroz');

const goToLinkedIn = () => window.open('https://www.linkedin.com/in/gabrielrqueiroz');
