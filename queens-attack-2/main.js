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
    var rQueen_temp = readLine().split(' ');
    var rQueen = parseInt(rQueen_temp[0]);
    var cQueen = parseInt(rQueen_temp[1]);
    var queen = {
                r: rQueen,
                c: cQueen
            };
    var obstaclesDistance = [];
    for(var a0 = 0; a0 < k; a0++){
        var rObstacle_temp = readLine().split(' ');
        var rObstacle = parseInt(rObstacle_temp[0]);
        var cObstacle = parseInt(rObstacle_temp[1]);
        // your code goes here
        var obstacle = 
            {
                r: rObstacle,
                c: cObstacle
            };
        var obstacleHeading = getHeading(queen,obstacle);
        if(obstacleHeading != -1){
            var obstacleDistance = calcDistanceToQueen(queen,obstacle,obstacleHeading);
            //obstacles[obstacleHeading] = obstacleDistance;
        }
    }
    
    
}

function calcDistanceToQueen(xpoint,queen,heading){
    process.stdout.write(heading+'\n');
}

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
    // Not in Queen's path
    else {
        return -1;
    }
}


// function getHeading(xpoint,queen) {
//     var heading = '';
    
//     // Get row heading
//     if(xpoint.r > queen.r){
//         heaing += 'N';
//     } else if(xpoint.r < queen.r) {
//         heading += 'S';
//     }

//     // Get col heading
//     if(xpoint.c > queen.c){
//         heading += 'E';
//     } else if(xpoint.c > queen.c){
//         heading += 'W';
//     }

//     return heading;
// }
