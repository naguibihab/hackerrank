process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    15: 'fifteen',
    20: 'twenty',
    30: 'thirty',
    50: 'fifty'
}

function main() {
    var h = parseInt(readLine());
    var m = parseInt(readLine());
    
    if(m == 0){
        process.stdout.write(numbers[h]+" o' clock");
    }
    else if(m <= 30){
        var unit = 'minutes';
        if(m == 1){
            unit = 'minute';
        }
        process.stdout.write(constructWord(m)+' '+unit+' past '+numbers[h]);
    }
    else if(m > 30) {
        var unit = 'minutes';
        if(60-m == 1){
            unit = 'minute';
        }
        
        process.stdout.write(constructWord(60-m)+' minutes to '+numbers[h+1]);
    }
}

function constructWord(n){
    var resultWord = '';
    if (typeof numbers[n] === 'undefined') { // If m doesn't exist in numbers array
        if(n < 20) { // ends with teen
            minuteWord = numbers[n-10]+'teen';
        } else {
            var firstDigit = parseInt(n/10,10);
            var secondDigit = n%10;

            // Getting the word of the first digit (i.e. fourty)
            if(typeof numbers[firstDigit*10] === 'undefined') {
                resultWord += numbers[firstDigit]+'ty'+' ';
            } else {
                resultWord += numbers[firstDigit*10] + ' ';
            }

            // Getting the word of the second digit (i.e. two)
            resultWord += numbers[secondDigit];
        }
    } else {
        resultWord = numbers[n];
    }
    
    return resultWord;
}
