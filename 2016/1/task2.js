"use strict";
var helpers_1 = require("./helpers");
function move(point, direction) {
    switch (direction) {
        case 0:
            point[1]++;
            break;
        case 1:
            point[0]++;
            break;
        case 2:
            point[1]++;
            break;
        case 3:
            point[0]++;
            break;
    }
    console.log('direction', direction);
    console.log('point', point);
    return point;
}
function calcDistanceToFirstDuplicate(inputString) {
    var instructions = inputString.split(', ');
    var point = [0, 0];
    var visitedPoints = [];
    var direction = 0;
    for (var c = 0; c < instructions.length; c++) {
        var i = instructions[c];
        var movement = helpers_1.parseString(i);
        // turn
        if (movement.dir === 'R') {
            direction++;
        }
        else {
            direction--;
        }
        if (direction < 0) {
            direction = 3;
        }
        else if (direction === 4) {
            direction = 0;
        }
        // move
        for (var i_1 = 1; i_1 <= movement.length; i_1++) {
            move(point, direction);
            // check if we already been here
            var found = visitedPoints.filter(function (p) {
                return p[0] === point[0] && p[1] === point[1];
            });
            console.log('current point', point);
            if (found.length) {
                return Math.abs(point[0]) + Math.abs(point[1]);
            }
            console.log('visited before', visitedPoints);
            visitedPoints.push(point.slice());
            console.log('visited after', visitedPoints);
            console.log();
        }
    }
    return 0;
}
exports.calcDistanceToFirstDuplicate = calcDistanceToFirstDuplicate;
var input = 'R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2';
console.log("first hit is located at the distance of", calcDistanceToFirstDuplicate(input));
