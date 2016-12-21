"use strict";
function parseString(input) {
    var matches = /(R|L)(\d+)/.exec(input);
    return {
        dir: matches[1],
        length: parseInt(matches[2])
    };
}
exports.parseString = parseString;
