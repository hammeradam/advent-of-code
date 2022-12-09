const getForest = () =>
    require('fs')
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

const calculateScenicScore = (forest, row, column) => {
    const height = forest[row][column];

    const toLeft = forest[row].slice(0, column).reverse();
    const toLeftIndex = toLeft.findIndex((value) => value >= +height);
    const left = toLeftIndex === -1 ? toLeft.length : toLeftIndex + 1;

    const toRight = forest[row].slice(column + 1, forest[row].length);
    const toRightIndex = toRight.findIndex((value) => value >= +height);
    const right = toRightIndex === -1 ? toRight.length : toRightIndex + 1;

    const columnValues = forest.reduce((acc, row) => {
        acc.push(row[column]);
        return acc;
    }, []);

    const toTop = columnValues.slice(0, row).reverse();
    const toTopIndex = toTop.findIndex((value) => value >= +height);
    const top = toTopIndex === -1 ? toTop.length : toTopIndex + 1;

    const toBottom = columnValues.slice(row + 1, columnValues.length);
    const toBottomIndex = toBottom.findIndex((value) => value >= +height);
    const bottom = toBottomIndex === -1 ? toBottom.length : toBottomIndex + 1;

    return left * right * top * bottom;
};

const calculateHighestScenicScore = (forest) => {
    let highestScenicScore = 0;
    for (let i = 0; i < forest.length; i++) {
        for (let j = 0; j < forest[i].length; j++) {
            if (isOnEdge(forest, i, j)) {
                continue;
            }

            const scenicScore = calculateScenicScore(forest, i, j);
            if (scenicScore > highestScenicScore) {
                highestScenicScore = scenicScore;
            }
        }
    }

    return highestScenicScore;
};

console.log(calculateHighestScenicScore(getForest()));
