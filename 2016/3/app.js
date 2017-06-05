"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task1_1 = require("./task1");
var fs = require("fs");
var readline = require("readline");
var stream = readline.createInterface(fs.createReadStream('./input.txt'));
var numTriangles = 0;
var count = 0;
stream.on('line', function (line) {
    console.log('line', line.trim());
    if (task1_1.default(line)) {
        numTriangles++;
    }
    count++;
}).on('close', function () {
    console.log(count, numTriangles);
});
// console.log(isPossibleTriangle("6 6 10"))
// console.log(isPossibleTriangle("5 10 20")) 
