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

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var queen.rueen_temp = readLine().split(' ');
    var queen.rueen = parseInt(queen.rueen_temp[0]);
    var queen.cueen = parseInt(queen.rueen_temp[1]);
    for(var a0 = 0; a0 < k; a0++){
        var rObstacle_temp = readLine().split(' ');
        var rObstacle = parseInt(rObstacle_temp[0]);
        var cObstacle = parseInt(rObstacle_temp[1]);
        // your code goes here
        
    }
    
    
}

function calcDistanceToQueen(xpoint,queen){
    var heading = getHeading(xpoint,queen);

    
}

function getHeading(xpoint,queen) {
    var heading = '';
    
    // Get row heading
    if(xpoint.r > queen.r){
        heaing += 'N';
    } else if(xpoint.r < queen.r) {
        heading += 'S';
    }

    // Get col heading
    if(xpoint.c > queen.c){
        heading += 'E';
    } else if(xpoint.c > queen.c){
        heading += 'W';
    }

    return heading;
}
