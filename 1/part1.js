console.log(
    Math.max(
        ...require("fs")
            .readFileSync("input.txt")
            .toString()
            .split("\n\n")
            .map((line) => line.split("\n"))
            .map((elf) => elf.reduce((sum, a) => sum + +a, 0))
    )
);