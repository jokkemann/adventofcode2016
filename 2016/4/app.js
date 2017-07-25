// const input = `aaaaa-bbb-z-y-x-123[abxyz]`
// const input2 = `totally-real-room-200[decoy]`
// let inputs = [
//     input,
//     input2,
//     'a-b-c-d-e-f-g-h-987[abcde]',
//     'not-a-real-room-404[oarel]'
// ];
var fs = require('fs');
var inputs = fs.readFileSync('4/input.txt').toString().split('\n');
var sum = inputs.reduce(function (a, i) {
    return a + getSectionIdIfRealRoom(i);
}, 0);
console.log('result:', sum);
function getSectionIdIfRealRoom(input) {
    // console.log(input);
    if (!input) {
        return 0;
    }
    var strings = input.split('-');
    var lastPart = strings.pop();
    var matches = lastPart.match(/(\d+)\[(\w+)\]/);
    var sectionId = parseInt(matches[1]);
    var checksum = matches[2];
    // console.log(sectionId, verifyChecksum(strings, checksum));
    return verifyChecksum(strings, checksum) ? sectionId : 0;
}
function verifyChecksum(input, checksum) {
    // console.log(input);
    var chars = input.join('');
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
    // console.log('result', uniqueChars)
    return uniqueChars === checksum;
}
