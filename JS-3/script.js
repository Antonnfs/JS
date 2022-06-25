// Task #1
/**
  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  * Ожидаемый результат: ({}) => true,
      ({ a: undefined }) => true,
      ({ a: 1 }) => false
  * Пустые значения: '', null, NaN, undefined
  * Сложность задачи: 2 of 5
  * @param {Object} object - объект с примитивами
  * @returns {boolean}

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
*/

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
/**
  * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
  * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
  * @param {Object} firstObj - Объект с любыми значениями
  * @param {Object} secondObj - Объект с любыми значениями
  * @returns {boolean}
  
const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
*/

function isEqualDeep(object1, object2) {
	return JSON.stringify(object1) === JSON.stringify(object2);
}
const data3 = { a: 1, b: { c: 1 } };
const data4 = { a: 1, b: { c: 1 } };
const data5 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data3, data4)); // true
console.log(isEqualDeep(data3, data5)); // false


// Task #3
/**
  * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
  * @param {Object<string | number>} firstObj - объект с примитивными значениями
  * @param {Object<string | number>} secondObj - объект с примитивными значениями
  * @returns {Object}

const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }
*/


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
