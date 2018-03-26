'use strict';

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

function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    
    var ar = []; // array result
    
    // Move the rotating element to the beginning of the array
    ar[0] = a[d];
    
    if(n-d > 1) { // there are more elements to the end of the array
        for(var i=d+1; i<n; i++) {
            ar.push(a[i]);
        }
    }
    
    // Now add in the elemenst behind the rotating element to the end
    for(var i=0; i<d; i++) {
        ar.push(a[i])
    }
    
    console.log(ar.join(' '));
}
