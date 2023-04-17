// Итерационный подсчет факториала
function factIterat(num) {
    let result = 1;
    while (num !== 1) {
        result *= num;
        num = num - 1;
    }
    return result;
}

// Рекурсивный расчет факториала
function factRec(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * factRec(num - 1);
    }
}

console.log(factRec(10));
console.log(factIterat(10));