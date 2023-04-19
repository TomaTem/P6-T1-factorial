// Итерационный подсчет факториала
function factIterat(num) {
    if (num == 0) {
        return 1;
    }
    let result = 1;
    while (num !== 1) {
        result *= num;
        num = num - 1;
    }
    return result;
}

// Рекурсивный расчет факториала
function factRec(num) {
    if (num == 1 || num == 0) {
        return 1;
    } else {
        return num * factRec(num - 1);
    }
}

console.log(factRec(0));
console.log(factIterat(100));