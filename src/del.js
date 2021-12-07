#!/usr/bin/env node
import readlineSync from 'readline-sync';


console.log('Добро пожаловать в интеллектуальную игру!');
const name = readlineSync.question('Как твое имя? ');
console.log(`Привет, ${name} !`);
console.log('Найди наиболший общий делитель двух чисел');

function func3() {
    for (let i = 0; i < 3; i++) {


        const num1 = Math.floor(Math.random() * 50);
        const num2 = Math.floor(Math.random() * 50);

        console.log(`Вопрос : ${num1} ${num2}`);
        const answer = readlineSync.question('Ответ: ');

        function del(num1, num2) {
            if (!num2) {
                return num1;
            }
            return del(num2, num1 % num2)
        }
        if (del(num1, num2) == answer) {
            console.log('Правильно')
        } else {
            console.log(`'${answer}' это не правильный ответ ;(.Bерный ответ '${del(num1, num2)}'.\nДавай попробуй снова, ${name}!`)
        }
    }
}
export default func3();
console.log(`Молодец, ${name}!`);

