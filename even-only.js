function sumOfEvenNumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6];
const sum = sumOfEvenNumbers(numbers);
console.log('Sum of even numbers is', sum);
