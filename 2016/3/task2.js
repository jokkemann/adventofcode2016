"use strict";
exports.__esModule = true;
var fs = require("fs");
var readline = require("readline");
function isPossibleTriangle(nums) {
    return nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums[1] && nums[1] + nums[2] > nums[0];
}
var stream = readline.createInterface(fs.createReadStream('./input.txt'));
var input = new Array([], [], []);
var numTriangles = 0;
stream.on('line', function (l) {
    // console.log(l.trim())
    // if (isPossibleTriangle(l)) {
    //     numTriangles++
    // }
    var numbers = l.trim().split(/\s+/);
    input[0].push(+numbers[0]);
    input[1].push(+numbers[1]);
    input[2].push(+numbers[2]);
}).on('close', function () {
    var inputs = input[0].concat(input[1], input[2]);
    for (var i = 0; i < inputs.length; i += 3) {
        if (isPossibleTriangle([inputs[i], inputs[i + 1], inputs[i + 2]])) {
            numTriangles++;
        }
    }
    console.log(numTriangles);
});
// console.log(isPossibleTriangle("6 6 10"))
// console.log(isPossibleTriangle("5 10 20")) 
