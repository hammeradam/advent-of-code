const commands = require('fs')
    .readFileSync('input.txt')
    .toString()
    .split('\n')
    .map((line) => line.split(' '));

const fileSystem = { '/': {} };
const currentDir = [];

for (let i = 0; i < commands.length; i++) {
    const line = commands[i];
    switch (line[0]) {
        case '$': {
            switch (line[1]) {
                case 'cd': {
                    switch (line[2]) {
                        case '/': {
                            if (currentDir.length) {
                                currentDir.splice(1);
                                break;
                            } else {
                                currentDir.push(line[2]);
                                break;
                            }
                        }
                        case '..': {
                            currentDir.pop();
                            break;
                        }
                        default: {
                            currentDir.push(line[2]);
                        }
                    }
                }
            }
            break;
        }
        case 'dir': {
            let workdir = fileSystem;
            currentDir.forEach((dir) => {
                workdir = workdir[dir];
            });

            workdir[line[1]] = {};
            break;
        }
        default: {
            let workdir = fileSystem;
            currentDir.forEach((dir) => {
                workdir = workdir[dir];
            });

            workdir[line[1]] = +line[0];
            break;
        }
    }
}

let deletableSize = 0;

const calculateSize = (dir) => {
    let size = 0;
    const elements = Object.entries(dir);
    for (const [name, value] of elements) {
        if (typeof value === 'number') {
            size += value;
        } else {
            size += calculateSize(dir[name]);
        }
        dir['__size'] = size;
    }

    if (size <= 100000) {
        deletableSize += size;
    }

    return size;
};

calculateSize(fileSystem);
console.log(deletableSize);
