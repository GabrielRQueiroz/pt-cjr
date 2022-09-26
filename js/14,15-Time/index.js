const getTimeFromTimestring = (timestring) => {
	const [hours, minutes, seconds] = timestring.split(':');
	return {
		hours: parseInt(hours),
		minutes: parseInt(minutes),
		seconds: parseInt(seconds),
	};
};

const timestring = prompt('Insira um horário no formato hh:mm:ss');
console.log(getTimeFromTimestring(timestring));
