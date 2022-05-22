// Task #1
function countOccurrences(str, substr) {
	let pos = 0;
	const substrArray = [];
	for(let i = 0; i <= str.length; i++) {
		let foundPos = str.indexOf(substr, pos);
		if (foundPos == -1) break;
		substrArray.push(foundPos);
		pos = foundPos + 1;
	}
	console.log(substrArray.length);
} 
countOccurrences('azyxxzyzy', 'zy');
countOccurrences('ababagalamaga', 'ba');

// Task #2
const propsStorage = {
	setValue: function(key, value) {
		return propsStorage[key] = value;
	},
	getValue: function(key) {
		return console.log(propsStorage[key]);
	}
};
console.log(propsStorage);
propsStorage.setValue('name', 'Peter');
propsStorage.setValue('age', 30);
propsStorage.getValue('name')
propsStorage.getValue('age');
propsStorage.setValue('age', 31);
propsStorage.getValue('age');
propsStorage.getValue('occupation');

// Task #3
function toDigitArray(num) {
	const numArr = Array.from(`${num}`);
	for(let i = 0; i < numArr.length; i++){
		numArr[i] = +numArr[i];
	}
	return numArr.reverse();
}
const N = 46156;
console.log(toDigitArray(N));

// Task #4
function calculateRoundedRating(rating) {
	return Math.round(rating * 2) / 2;
}
console.log(calculateRoundedRating(4.299999));

// Task #5
function countWords(string) {
	textArr = string.split(' ');
	let newArr = [];
	textArr.forEach(element => {
		if(element) {
			newArr.push(element);
		}
	});
	return newArr.length;
}
let string = '   You  area programmer ';
console.log(countWords(string));

// Task #6
function extractYears(text) {
	const regExp = /\d+/g;
	let matches;
	const yearsArray = [];
	while ((matches = regExp.exec(text)) != null) {
		matches[0] = +matches[0];
		if(matches[0] >= 1900 && matches[0] <= 2099)
			yearsArray.push(matches[0]);
	}
	return yearsArray;
}
let text = `
Usually people who were born in 1995 can find they first job not later than
in 2020 but also not earlier than in 2012. Number 11999 is not included in
the result because it's too big. It is out of range between 1900 and 2099.
`
console.log(extractYears(text));
