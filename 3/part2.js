const packs = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n')
    .map((p) => p.split(''));

let sum = 0;

for (let i = 0; i < packs.length - 2; i += 3) {
    const common = packs[i]
        .filter(
            (item) => packs[i + 1].includes(item) && packs[i + 2].includes(item)
        )[0]
        .charCodeAt(0);
    const prio = common < 91 ? common - 38 : -(96 - common);
    sum += prio;
}

console.log(sum);
