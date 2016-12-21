"use strict";
var helpers_1 = require("./helpers");
var direction = [0, 0];
function calcBlockDistance(inputString) {
    if (inputString.length === 0) {
        return 0;
    }
    if (/^R|L/.test(inputString)) {
        var point = [0, 0];
        var visitedPoints = [];
        var direction_1 = 0;
        var instructions = inputString.split(' ');
        for (var c = 0; c < instructions.length; c++) {
            var i = instructions[c];
            var movement = helpers_1.parseString(i);
            // turn
            if (movement.dir === 'R') {
                direction_1++;
            }
            else {
                direction_1--;
            }
            if (direction_1 < 0) {
                direction_1 = 3;
            }
            else if (direction_1 === 4) {
                direction_1 = 0;
            }
            // move
            switch (direction_1) {
                case 0:
                    point[1] += movement.length;
                    break;
                case 1:
                    point[0] += movement.length;
                    break;
                case 2:
                    point[1] -= movement.length;
                    break;
                case 3:
                    point[0] -= movement.length;
                    break;
            }
        }
        ;
        return Math.abs(point[0]) + Math.abs(point[1]);
    }
    else {
        throw new Error('Unknown input format');
    }
}
exports.calcBlockDistance = calcBlockDistance;
var input = 'R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2';
console.log('result', calcBlockDistance(input));
