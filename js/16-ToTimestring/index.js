const getTimestring = (object) => {
	const { hours, minutes, seconds } = object;
	return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const timeObject = {
	hours: 13,
	minutes: 15,
	seconds: 30,
};

console.log('Time object:', timeObject);
console.log(getTimestring(timeObject));
