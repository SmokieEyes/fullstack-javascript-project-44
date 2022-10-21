import { index, randomizeNumber } from '../index.js';
export default () => {
    const nod = (num_one, num_two) => {
        if (num_two !== 0) {
            const num_temp = num_one % num_two;
            return nod(num_two, num_temp);
        }
        return num_one;
    }
    const definition = 'Find the greatest common divisor of given numbers.';
    const expression = [];
    const correct_answer = [];
    for (let index = 0; index < 3; index += 1) {
        const num_first = randomizeNumber(1, 30);
        const num_two = randomizeNumber(1, 30);
        const answer = nod(num_first, num_two);
        expression.push(`${num_first} ${num_two}`);
        correct_answer.push(String(`${answer}`));
    }
    return index(definition, expression, correct_answer);
};
