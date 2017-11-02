var input = 'qzmt-zixmtkozy-ivhz-343[aoew]';

var fs = require('fs')
var realInputs = fs.readFileSync('../input.txt').toString().split('\n')

var realRooms = [];
task1(realInputs)
function task1(inputArray) {
    var sum = inputArray.reduce((s, i) => {
        if (i.length === 0) return s
        var roomInfo = parseRoom(i)
        if (isRealRoom(roomInfo)) {
            realRooms.push(roomInfo)
            return s + roomInfo.sectionId
        }
        else {
            return s
        }
        return s
    }, 0)
    console.log('task 1:', sum)
}

task2(realRooms)

function task2(inputArray) {
    inputArray.forEach(i => {
        var decrypted = decrypt(i.name, i.sectionId)
        if (/north/.test(decrypted))
            console.log(decrypted, i.sectionId)
    })
}

function decrypt(text, steps) {
    var result = ''

    for(var i = 0; i < text.length; i++) {
        var c = text[i];
        if (c === '-') {
            result += ' ';
        }
        else {
            var deciphered = decipher(c, steps)
            result += deciphered
        }
    }

    return result
}

function decipher(char, steps) {
    var charCode = char.charCodeAt(0);
    var permutated = (charCode - 97 + steps) % 26 + 97
    return String.fromCharCode(permutated);
}

function parseRoom(input) {
    var stringParts = input.split('-');
    var lastPart = stringParts.pop();
    var match = lastPart.match(/(\d+)\[(\w+)\]/);
    var name = stringParts.join('-');
    var sectionId = parseInt(match[1]);
    var checksum = match[2];
    return {
        name,
        sectionId,
        checksum,
    }
}

function isRealRoom(roomInfo) {
    var chars = roomInfo.name.split('-').join('');
    var o = {};
    for (var i = 0; i < chars.length; i++) {
        var e = chars[i];
        o[e] = (o[e] || 0) + 1;
    }
    var uniqueCharsArr = Object.keys(o);
    uniqueCharsArr.sort(function (a, b) {
        if (o[b] === o[a])
            return a.charCodeAt(0) - b.charCodeAt(0);
        return o[b] - o[a];
    });
    var uniqueChars = uniqueCharsArr.join('').substr(0, 5);
    return uniqueChars === roomInfo.checksum;
}