console.log(
    require("fs")
        .readFileSync("input.txt")
        .toString()
        .split("\n")
        .reduce((total, pack) => {
            const ca = pack.slice(0, pack.length / 2).split("");
            const cb = pack.slice(pack.length / 2, pack.length).split("");
            const c = ca.filter((item) => cb.includes(item))[0];
            const cc = c.charCodeAt(0);
            const p = cc < 91 ? cc - 38 : -(96 - cc);
            return total + p;
        }, 0)
);
