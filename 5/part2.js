const [stacksInput, movesInput] = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n\n');

let stacks = [];
const stackRows = stacksInput.split('\n');

for (let s = 0; s < stackRows.length - 1; s++) {
    for (let i = 1; i < stackRows[0].length; i += 4) {
        stackRows[s][i] !== ' ' && (stacks[i] ||= []).push(stackRows[s][i]);
    }
}

stacks = stacks.filter(Boolean);

movesInput
    .split('\n')
    .map((move) => move.match(/\d+/g))
    .map(([quantity, from, to]) => ({ quantity, from, to }))
    .forEach(({ quantity, from, to }) => {
        stacks[to - 1].unshift(...stacks[from - 1].splice(0, quantity));
    });

console.log(
    stacks.reduce((acc, stack) => {
        return (acc += stack[0]);
    }, '')
);
