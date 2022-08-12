const initialNumbersArray = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
let sumNumbersArray = 0;
let sumEvenPositiveNumbers = 0;
let multiplyPositiveNumbers = 1;

const compareNumeric = (a, b) => {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -2
}

const sortedNumbersArray = initialNumbersArray.sort(compareNumeric);
let minArrayValue = sortedNumbersArray[0];

const positiveNumbersArray = initialNumbersArray.filter(item => {
    return Math.sign(item) === 1;
})

const oddPositiveNumbersArray = positiveNumbersArray.filter(item => {
    return item % 2 !== 0;
})

const evenPositiveNumbersArray = positiveNumbersArray.filter(item => {
    return item % 2 === 0;
})

positiveNumbersArray.forEach(item => {
    sumNumbersArray += item;
})

evenPositiveNumbersArray.forEach(item => {
    sumEvenPositiveNumbers += item;
})

positiveNumbersArray.forEach(item => {
    multiplyPositiveNumbers *= item;
})

console.log('Сумма положительных значений:', sumNumbersArray, typeof sumNumbersArray)
console.log('Количество положительных элементов:', positiveNumbersArray.length);

console.log('Минимальный элемент массива:', minArrayValue);
console.log('Порядковый номер минимального элемента массива:', initialNumbersArray.indexOf(-63));

console.log('Максимальный элемент массива:', sortedNumbersArray[sortedNumbersArray.length - 1]);
console.log('Порядковый номер максимального элемента массива:', initialNumbersArray.indexOf(235));

console.log('Количество отрицательных элементов:', initialNumbersArray.length - positiveNumbersArray.length);

console.log('Количество нечетных положительных элементов', oddPositiveNumbersArray.length);
console.log('Найти сумму четных положительных элементов', sumEvenPositiveNumbers);

console.log('Произведение положительных элементов:', multiplyPositiveNumbers);
console.log('Найти самый большой среди элементов массива, остальное обнулить:', initialNumbersArray[sortedNumbersArray.length - 1]);



