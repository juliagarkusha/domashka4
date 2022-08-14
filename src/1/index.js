const userArray = [];
let userPromptValue = +(prompt("Введите значение"));

const compareNumeric = (a, b) => {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -2
}

while (userPromptValue !== null) {
    if(userPromptValue) userArray.push(+(userPromptValue));
    userPromptValue = prompt("Введите значение");
}

console.log('Введенный массив: ', userArray);

console.log('Отсортированный массив: ', userArray.sort(compareNumeric));

const deleteItems = userArray.splice(1, 3);

console.log('Массив без элементов с 2 по 4: ', userArray);

console.log('Массив удаленных значений: ', deleteItems);
