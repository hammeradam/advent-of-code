const getForest = () => require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n')
    .map((line) => line.split(''));

const isOnEdge = (forest, row, column) => {
    if (
        row === 0 ||
        column === 0 ||
        row === forest.length - 1 ||
        column === forest[row].length - 1
    ) {
        return true;
    }

    return false;
};

const isVisible = (forest, row, column) => {
    const height = forest[row][column];

    // check left
    if (Math.max(...forest[row].slice(0, column)) < height) {
        return true;
    }

    // check right
    if (
        Math.max(...forest[row].slice(column + 1, forest[row].length)) < height
    ) {
        return true;
    }

    const columnValues = forest.reduce((acc, row) => {
        acc.push(row[column]);
        return acc;
    }, []);

    // check top
    if (Math.max(...columnValues.slice(0, row)) < height) {
        return true;
    }

    // check right
    if (
        Math.max(...columnValues.slice(row + 1, columnValues.length)) < height
    ) {
        return true;
    }

    return false;
};


const calculateVisible = (forest) => {
    let visibleCount = 0;
    for (let i = 0; i < forest.length; i++) {
        for (let j = 0; j < forest[i].length; j++) {
            if (isOnEdge(forest, i, j)) {
                visibleCount++;
                continue;
            }

            if (isVisible(forest, i, j)) {
                visibleCount++;
            }
        }
    }

    return visibleCount;
};

console.log(calculateVisible(getForest()));
