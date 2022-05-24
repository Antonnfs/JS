// Task #1
const isEmpty = function(object) {
	let result;
	const trueValues = [];
	for(let key in object) {
		if(object[key]) {
			trueValues.push(object[key]);
		} 
	}
	if(trueValues.length > 0) {
		result = false;
	} else {
		result = true;
	}
	return result;
}

const data1 = {  a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data1)); // false
console.log(isEmpty(data2)); // true

// Task #2
function isEqualDeep(object1, object2) {
	return JSON.stringify(object1) === JSON.stringify(object2);
}
const data3 = { a: 1, b: { c: 1 } };
const data4 = { a: 1, b: { c: 1 } };
const data5 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data3, data4)); // true
console.log(isEqualDeep(data3, data5)); // false


// Task #3
const intersection = function(firstObject, secondObject) {
	const intersectionObject = {};
	for(let prop in firstObject) {
		for(let key in secondObject) {
			if(prop === key && firstObject[prop] === secondObject[key]) {
				intersectionObject[prop] = secondObject[prop];
			}
		}
	}
	return intersectionObject;
}

const data6 = { a: 1, b: 2};
const data7 = { c: 1, b: 2};
console.log(intersection(data6, data7)); 
