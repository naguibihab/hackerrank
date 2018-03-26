'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the findSuffix function below.
 */
function findSuffix(collections, queryString) {
    var count = 0;
    collections.forEach(function(value){
        if(queryString == value) {
            count++;
        }
    });
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let collections = [];

    for (let stringsItr = 0; stringsItr < n; stringsItr++) {
        const stringsItem = readLine();
        collections.push(stringsItem);
    }

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const queryString = readLine();

        let res = findSuffix(collections, queryString);

        ws.write(res + "\n");
    }

    ws.end();
}
