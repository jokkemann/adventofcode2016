var input = [
    'abba[mnop]qrst',
    'abcd[bddb]xyyx',
    'aaaa[qwer]tyui',
    'ioxxoj[asdfgh]zxcvbn',
    'abba[dodd]goog[boosb]',
]
var fs = require('fs');
input = fs.readFileSync('./input.txt').toString().split('\n').filter(s => s !== '')

console.log(input.filter(s => isSupportingTSL(s)).length)

function isSupportingTSL(s) {
    var hypernets = [];
    var ipParts = [];

    s.split('[').forEach((sp, i) => {
        if (i === 0) {
            ipParts.push(sp);
        }
        else {
            var newSplit = sp.split(']');
            hypernets.push(newSplit[0])
            ipParts.push(newSplit[1])
        }
    })
    return hypernets.every(h => !containsAbba(h)) && ipParts.some(i => containsAbba(i))
}

function containsAbba(s) {
    if (s.length < 4) {
        return false
    }
    var i = 0;
    while (i+3 < s.length) {
        if (isAbba(s.substr(i, 4))) {
            return true;
        }
        i++
    }
    return false
}

function isAbba(s) {
    return s.charAt(0) === s.charAt(3) && s.charAt(1) === s.charAt(2) && s.charAt(0) !== s.charAt(1);
}