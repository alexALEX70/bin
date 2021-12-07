#!/usr/bin/env node
import readlineSync from 'readline-sync';




console.log('Добро пожаловать в занимательную игру!');
const name = readlineSync.question('Сначала назови свое имя? ');
console.log(`Привет, ${name} !`);
console.log('Ответ "yes" если число четное, если не четное то ответ "no"');

function func() {
    for (let i = 0; i < 3; i++) {
        const question = Math.floor(Math.random() * 100);
        console.log(`Вопрос : ${question}`);
        const answer = readlineSync.question('Ответ: ');

        const correctAnswer = (question) % 2 === 0 ? 'yes' : 'no';
        if (answer === correctAnswer) {
            console.log('Правильно');
        } else {
            console.log(`'${answer}' ты ошибся ;(. Правильно '${correctAnswer}'.\nПопробуй еще раз, ${name}!`);
        }
    }
    console.log(`Правильно, ${name}!`);
}
export default func();

// const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;





