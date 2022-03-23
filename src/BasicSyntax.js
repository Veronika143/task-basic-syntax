export function romanToInteger(str) {
    let result = 0;
    const alphabet = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const numbers = str.split('');
    for (let i = 0; i < numbers.length; i++) {
        let firstNum = alphabet[numbers[i]];
        let secondNum = alphabet[numbers[i + 1]];
        if (firstNum < secondNum) {
            result += secondNum - firstNum;
            i++;
        } else {
            result += firstNum;
        }
    }
    return result;
}
