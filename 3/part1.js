console.log(
    require('fs')
        .readFileSync('input.txt')
        .toString()
        .split('\n')
        .reduce((total, pack) => {
            const compA = pack.slice(0, pack.length / 2).split('');
            const compB = pack.slice(pack.length / 2, pack.length).split('');
            const common = compA
                .filter((item) => compB.includes(item))[0]
                .charCodeAt(0);
            const p = common < 91 ? common - 38 : -(96 - common);
            return total + prio;
        }, 0)
);
