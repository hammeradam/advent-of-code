const packs = require("fs")
    .readFileSync("input.txt")
    .toString()
    .split("\n")
    .map((p) => p.split(""));

let sum = 0;

for (let i = 0; i < packs.length - 2; i += 3) {
    const c = packs[i].filter(
        (item) => packs[i + 1].includes(item) && packs[i + 2].includes(item)
    )[0];
    const cc = c.charCodeAt(0);
    const p = cc < 91 ? cc - 38 : -(96 - cc);
    sum += p;
}

console.log(sum);
