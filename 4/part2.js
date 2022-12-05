console.log(
    require("fs")
        .readFileSync("input.txt")
        .toString()
        .split("\n")
        .map((pair) => pair.split(","))
        .reduce((acc, pair) => {
            const elfA = pair[0].split("-");
            const elfB = pair[1].split("-");
            return (
                acc +
                ((+elfA[1] >= +elfB[0] && +elfA[0] <= +elfB[0]) ||
                (+elfB[1] >= +elfA[0] && +elfB[0] <= +elfA[0])
                    ? 1
                    : 0)
            );
        }, 0)
);
