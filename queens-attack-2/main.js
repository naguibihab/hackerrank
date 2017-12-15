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
    var allHeadings = ['N','NE','E','SE','S','SW','W','NW'];
    var totalDistance = 0;
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
            var obstacleDistance = calcDistanceToQueen(queen,obstacle,obstacleHeading)-1;
            if(!(obstacleHeading in obstaclesDistance)){
                // No obstacles in that heading
                obstaclesDistance[obstacleHeading] = obstacleDistance;
            } else {
                // There is already an obstacle in that heading
                obstaclesDistance[obstacleHeading] = Math.min(obstaclesDistance[obstacleHeading],obstacleDistance);
            }
        }
    }
    // Loop over obstacles
    for(var key in obstaclesDistance){
        totalDistance += obstaclesDistance[key];
    }
    
    // Calc distance from queen to board where there are no obstacles
    var boardNE = {
        r: n,
        c: n
    };
    var boardSE = {
        r: 1,
        c: n
    };
    var boardSW = {
        r: 1,
        c: 1
    };
    var boardNW = {
        r: n,
        c: 1
    };
    
    if(!('N' in obstaclesDistance)){
        totalDistance+= calcDistanceToQueen(queen,boardNE,'N');
    }
    if(!('NE' in obstaclesDistance)){
        totalDistance+= calcDistanceToQueen(queen,boardNE,'NE');
    }
    if(!('E' in obstaclesDistance)){
        totalDistance+= calcDistanceToQueen(queen,boardNE,'E');
    }
    if(!('SE' in obstaclesDistance)){
        totalDistance+= calcDistanceToQueen(queen,boardSE,'SE');
    }
    if(!('S' in obstaclesDistance)){
        totalDistance+= calcDistanceToQueen(queen,boardSE,'S');
    }
    if(!('SW' in obstaclesDistance)){
        totalDistance+= calcDistanceToQueen(queen,boardSW,'SW');
    }
    if(!('W' in obstaclesDistance)){
        totalDistance+= calcDistanceToQueen(queen,boardSW,'W');
    }
    if(!('NW' in obstaclesDistance)){
        totalDistance+= calcDistanceToQueen(queen,boardNW,'NW');
    }
    console.log(totalDistance);
}

function calcDistanceToQueen(queen,xpoint,heading){
    var distance = 0;
    var nsDistance = -1;
    var ewDistance = -1;
    switch(heading[0]){
        case 'N':
            nsDistance = xpoint.r - queen.r;
            break;
        case 'S':
            nsDistance = queen.r - xpoint.r;
            break;
        case 'E':
            ewDistance = xpoint.c - queen.c;
            break;
        case 'W':
            ewDistance = queen.c - xpoint.c;
            break;
    }
    
    switch(heading[1]){
        case 'E':
            ewDistance = xpoint.c - queen.c;
            break;
        case 'W':
            ewDistance = queen.c - xpoint.c;
            break;
    }
    
    if(nsDistance == -1){
        distance = ewDistance;   
    } else if(ewDistance == -1){
        distance = nsDistance;
    } else{
        distance = Math.min(nsDistance,ewDistance);
    }
    
//    console.log('calcDistance',xpoint,heading,nsDistance,ewDistance,distance);
    return distance;
}

function getHeading(queen,xpoint){
    // North
    if(xpoint.r > queen.r && xpoint.c == queen.c){
        return 'N';
    }
    // North East
    else if(xpoint.r > queen.r && xpoint.c > queen.c && xpoint.r - queen.r == xpoint.c - queen.c){
        return 'NE';
    }
    // East
    else if(xpoint.r == queen.r && xpoint.c > queen.c){
        return 'E';
    }
    // South East
    else if(xpoint.r < queen.r && xpoint.c > queen.c && queen.r - xpoint.r == xpoint.c - queen.c){
        return 'SE';
    }
    // South
    else if(xpoint.r < queen.r && xpoint.c == queen.c){
        return 'S';
    }
    // South West
    else if(xpoint.r < queen.r && xpoint.c < queen.c && queen.r - xpoint.r == queen.c - xpoint.c){
        return 'SW';
    }
    // West
    else if(xpoint.r == queen.r && xpoint.c < queen.c){
        return 'W';
    }
    // North West
    else if(xpoint.r > queen.r && xpoint.c < queen.c && xpoint.r - queen.r == queen.c - xpoint.c) {
        return 'NW';
    }
    // Not in Queen's path
    else {
        return -1;
    }
}