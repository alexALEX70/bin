#!/usr/bin/env node
import readlineSync from 'readline-sync';



console.log('Добро пожаловать на увлекательную игру!');
const name = readlineSync.question('Как тебя зовут? ');
console.log(`Привет, ${name} !`);
console.log('Угадай какой будет результат?')
function func() {
    for (let i = 0; i < 3; i++) {

        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const num3 = ['-', '+', '*'];
        let n = num3[Math.floor(Math.random() * 3)];


        console.log(`Вопрос : ${num1} ${n} ${num2}`);
        const answer = readlineSync.question('Ответ: ');


        let sum;
        if (n == '+') {
            sum = num1 + num2;
        }
        if (n == '-') {
            sum = num1 - num2;
        }
        if (n == '*') {
            sum = num1 * num2;
        }


        if (sum == answer) {
            console.log('Правильно')
        } else {
            console.log(`'${answer}' не угадал ;(. Верный ответ '${sum}'.\nПопробуй снова, ${name}!`)
        }
    }
}
func();
console.log(`Молодец, ${name}!`);


