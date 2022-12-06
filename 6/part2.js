const signal = require('fs').readFileSync('input.txt').toString().split('');

const MARKER_LENGTH = 14;
let marker = null;
let i = MARKER_LENGTH;

while (!marker) {
    const seq = new Set(signal.slice(i - MARKER_LENGTH, i));

    if (seq.size === MARKER_LENGTH) {
        marker = i;
    }

    i++;
}

console.log(marker);
