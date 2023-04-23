function countNumberOfPrimeNumbers(number) {
    let arrayPrimeNumbers = [];

    for (let i = 2; number > 0; i++) {
        for (let j = 2; j <= i; j++) {
            if (i === j) {
                arrayPrimeNumbers.push(i);
                number--;
            }
            if (i % j === 0) {
                break;
            } 
        }
    } 
    return arrayPrimeNumbers;
}


let number = process.argv[2];
console.time();
console.log(countNumberOfPrimeNumbers(number));
console.timeEnd();
