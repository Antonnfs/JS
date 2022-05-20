'use strict'
// Task #1
const arrayOne = ['a', 'b', 'c'];
const arrayTwo = new Array(1, 2, 3);
function uniteArrays(arr1, arr2) {
	return arr1.concat(arr2);
}
console.log(uniteArrays(arrayOne, arrayTwo));
// Task #2
const copyOfArrayOne = arrayOne.slice()
copyOfArrayOne.splice(3, 0, 1, 2, 3)
console.log(copyOfArrayOne);
// Task #3
const arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);
// Task #4
const data = [1, 2, 3];
const data2 = ['one', 'two', 'three'];
const reverse = (array) => {
	array.sort(() => -1);
}
reverse(data);
reverse(data2);
console.log(data);
console.log(data2);
// Task #5
console.log(typeof null);  // Object ... В документации сказано, что это  официально признанная ошибка в языке, сохранённая для совместимости.
// На самом деле null - это отдельный примитивный тип данных, у которого есть только одно значение 'null'.
// Оно означает, что значение отсутствует.