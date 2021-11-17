#!/usr/bin/env node
import readlineSync from 'readline-sync';


console.log('Добро пожаловать в занимательную игру!');
const name = readlineSync.question('Сначала назови свое имя? ');
console.log(`Привет, ${name} !`);
console.log('Ответ "yes" если число простое, если все остальные то ответ "no"');

function func() {
    for (let i = 0; i < 3; i++) {
        const question = Math.floor(Math.random() * 100);
        console.log(`Вопрос : ${question}`);
        const answer = readlineSync.question('Ответ: ');

        const correctAnswer = func1(question) ? 'yes' : 'no';

        function func1(num) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        if (correctAnswer === answer) {
            console.log('Правильно');;
        } else
            console.log(`'${answer}' ты ошибся ;(. Правильно '${correctAnswer}'.\nПопробуй еще раз, ${name}!`);;
    }

    console.log(`Молодец, ${name}!`);
}

func();
