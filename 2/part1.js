const OUTCOMES = {
    A: {
        X: 3,
        Y: 6,
        Z: 0,
    },
    B: {
        X: 0,
        Y: 3,
        Z: 6,
    },
    C: {
        X: 6,
        Y: 0,
        Z: 3,
    },
};

console.log(
    require("fs")
        .readFileSync("input.txt")
        .toString()
        .split("\n")
        .reduce(
            (total, [enemy, _, me]) =>
                total + -(87 - me.charCodeAt(0)) + OUTCOMES[enemy][me],
            0
        )
);
