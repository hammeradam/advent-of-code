console.log(
    require("fs")
        .readFileSync("input.txt")
        .toString()
        .split("\n\n")
        .map((line) => line.split("\n"))
        .map((elf) => elf.reduce((sum, a) => sum + +a, 0))
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((sum, a) => sum + a, 0)
);
