#!/usr/bin/env node
import readlineSync from 'readline-sync';


console.log('Добро пожаловать в интеллектуальную игру!');
const name = readlineSync.question('Как твое имя? ');
console.log(`Привет, ${name} !`);
console.log('Какое пропущеное число?');

function func() {
    for (let i = 0; i < 3; i++) {

        let m = Math.floor(Math.random() * (20 - 10) + 10);
        let step = Math.floor(Math.random() * (5 - 1) + 1);
        let first = Math.floor(Math.random() * 50);
        let s = Math.floor(Math.random() * (5 - 1) + 1);


        let arr = [];
        for (let i = 1; i < m; i++) {
            arr.push(first + step * i);
        }

        let data = arr.toString()

        let res = (first + step * i)


        console.log('Вопрос :', data, res);
        const answer = readlineSync.question('Ответ: ');



        if (res == answer) {
            console.log(`Првильно: ${res}`);
        } else {
            console.log(`'${answer}' это не правильный ответ ;(.Bерный ответ '${res}'.\nДавай попробуй снова, ${name}!`)
        }
    }
    console.log(`Молодец, ${name}!`);

}
func()


