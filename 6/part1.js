const signal = require('fs').readFileSync('input.txt').toString().split('');

const MARKER_LENGTH = 4;
let marker = null;
let i = MARKER_LENGTH;

while (!marker) {
    const seq = new Set(signal.slice(i - MARKER_LENGTH, i));

    if (seq.size === MARKER_LENGTH) {
        console.log(seq);
        marker = i;
    }

    i++;
}

console.log(marker);
