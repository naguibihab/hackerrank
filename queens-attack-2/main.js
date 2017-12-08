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

}

// There's an easier way to get the heading by splitting it into two headings
function getHeading(xpoint,queen){
    // North
    if(xpoint.r > queen.r && xpoint.c == queen.c){
        return 'N';
    }
    // North East
    else if(xpoint.r > queen.r && xpoint.c > queen.c){
        return 'NE';
    }
    // East
    else if(xpoint.r == queen.r && xpoint.c > queen.c){
        return 'E';
    }
    // South East
    else if(xpoint.r < queen.r && xpoint.c < queen.c){
        return 'SE';
    }
    // South
    else if(xpoint.r < queen.r && xpoint.c == queen.c){
        return 'S';
    }
    // South West
    else if(xpoint.r < queen.r && xpoint.c < queen.c){
        return 'SW';
    }
    // West
    else if(xpoint.r == queen.r && xpoint.c < queen.c){
        return 'W';
    }
    // North West
    else if(xpoint.r > queen.r && xpoint.c < queen.c) {
        return 'NW';
    }
}
