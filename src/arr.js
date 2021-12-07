#!/usr/bin/env node
import readlineSync from 'readline-sync';


console.log('Добро пожаловать в интеллектуальную игру!');
const name = readlineSync.question('Как твое имя? ');
console.log(`Привет, ${name} !`);
console.log('Какое пропущеное число?');


const progress = (first, metr, step) => {
    let arr = [];
    for (let i = 1; i < metr; i++) {
        arr.push(first + step * i);
    }
    return arr;
}
function func1() {
    for (let i = 0; i < 3; i++) {

        let metr = Math.floor(Math.random() * (20 - 10) + 10);
        let step = Math.floor(Math.random() * (5 - 1) + 1);
        let first = Math.floor(Math.random() * 50);
        let res = Math.floor(Math.random() * (5 - 1) + 1);

        let result = progress(first, metr, step);
        let data = String(result[res])
        result[res] = '..';


        console.log('Вопрос :', result.toString());

        const answer = readlineSync.question('Ответ: ');

        if (data == answer) {
            console.log(`Првильно: ${data}`);
        } else {
            console.log(`'${answer}' это не правильный ответ ;(.Bерный ответ '${data}'.\nДавай попробуй снова, ${name}!`)
        }
    }
    console.log(`Молодец, ${name}!`);

}
export default func1();


