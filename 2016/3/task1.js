"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPossibleTriangle(input) {
    var nums = input.trim().split(/\s+/).map(function (s) { return +s; });
    return nums[0] + nums[1] > nums[2] && nums[0] + nums[2] > nums[1] && nums[1] + nums[2] > nums[0];
}
exports.default = isPossibleTriangle;
// let stream = readline.createInterface(fs.createReadStream('./input.txt'))
// let numTriangles = 0
// stream.on('line', l => {
//     console.log(l.trim())
//     if (isPossibleTriangle(l)) {
//         numTriangles++
//     }
// })
// console.log(numTriangles)
// console.log(isPossibleTriangle("6 6 10"))
// console.log(isPossibleTriangle("5 10 20")) 
