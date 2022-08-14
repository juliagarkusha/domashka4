const userArray = [];
let userPromptValue = +(prompt("Введите значение"));

while (userPromptValue !== null) {
    if (userPromptValue) {
        userArray.push(+(userPromptValue))
    }

    userPromptValue = prompt("Введите значение");
}

console.log('Введенный массив: ', userArray);

console.log('Отсортированный массив: ', userArray.sort((a, b) => a - b));

const deleteItems = userArray.splice(1, 3);

console.log('Массив без элементов с 2 по 4: ', userArray);

console.log('Массив удаленных значений: ', deleteItems);
