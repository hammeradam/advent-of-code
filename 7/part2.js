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

const calculateSize = (dir) => {
    let size = 0;
    const elements = Object.entries(dir);
    for (const [name, value] of elements) {
        if (typeof value === 'number') {
            size += value;
        } else {
            size += calculateSize(dir[name]);
        }
        dir.__size = size;

    }

    return size;
}

calculateSize(fileSystem);

const FULL_SIZE = 70000000
const SIZE_REQUIRED = 30000000;

const sizeNeeded = SIZE_REQUIRED - (FULL_SIZE - fileSystem.__size);

const getSizes = (dir, folderSizes) => {
    folderSizes.push(dir.__size);
    
    const elements = Object.entries(dir);
    for (const [name, value] of elements) {
        if (typeof value === 'number') {
            continue;
        }
        getSizes(dir[name], folderSizes);
    }
}

let folderSizes = [];
getSizes(fileSystem, folderSizes)
    
folderSizes = folderSizes.sort((a, b) => a - b);

let toDelete;
let i = 0;
while (!toDelete) {
    if (folderSizes[i] > sizeNeeded) {
        toDelete = folderSizes[i];
    }
    i++;
}

console.log(toDelete);
