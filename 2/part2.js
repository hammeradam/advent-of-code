const CHOICES = {
    A: {
        X: "C",
        Y: "A",
        Z: "B",
    },
    B: {
        X: "A",
        Y: "B",
        Z: "C",
    },
    C: {
        X: "B",
        Y: "C",
        Z: "A",
    },
};

console.log(
    require("fs")
        .readFileSync("input.txt")
        .toString()
        .split("\n")
        .reduce(
            (total, [enemy, _, outcome]) =>
                total +
                -(64 - CHOICES[enemy][outcome].charCodeAt(0)) +
                (88 - outcome.charCodeAt(0)) * -3,
            0
        )
);
