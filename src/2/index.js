const initialNumbersArray = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];
let sumNumbersArray = 0;
let sumEvenPositiveNumbers = 0;
let multiplyPositiveNumbers = 1;

const minArrayValue = Math.min(...initialNumbersArray);
const maxArrayValue = Math.max(...initialNumbersArray);

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

const customNumbersArray = initialNumbersArray.map(item => {
    return item !== maxArrayValue ? 0 : maxArrayValue;
})

console.log(
    'Сумма положительных значений:',
    sumNumbersArray,
    'Количество положительных элементов:',
    positiveNumbersArray.length
)

console.log(
    'Минимальный элемент массива:',
    minArrayValue,
    'его порядковый номер:',
    initialNumbersArray.indexOf(minArrayValue) + 1
);

console.log(
    'Максимальный элемент массива:',
    maxArrayValue,
    'его порядковый номер:',
    initialNumbersArray.indexOf(maxArrayValue) + 1
);

console.log('Количество отрицательных элементов:', initialNumbersArray.length - positiveNumbersArray.length);

console.log('Количество нечетных положительных элементов:', oddPositiveNumbersArray.length);
console.log('Найти сумму четных положительных элементов', sumEvenPositiveNumbers);

console.log('Произведение положительных элементов:', multiplyPositiveNumbers);
console.log('Найти самый большой среди элементов массива, остальное обнулить:', customNumbersArray);



